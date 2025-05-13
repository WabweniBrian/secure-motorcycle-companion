"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState, useRef } from "react";
import { toast } from "sonner";
import type { Helmet, SignalStrength } from "@/lib/generated/prisma";

// Define the shape of our context
interface HelmetDataContextType {
  helmetsData: Record<string, ThingSpeakHelmetData>;
  isUpdating: boolean;
  lastUpdated: Date | null;
  locationNames: Record<string, string>;
}

// ThingSpeak data structure
interface ThingSpeakHelmetData {
  battery: string;
  temperature: string;
  status: "active" | "inactive";
  signalStrength: SignalStrength;
  latitude: string;
  longitude: string;
  lastActiveAt: Date;
}

// Create the context
const HelmetDataContext = createContext<HelmetDataContextType>({
  helmetsData: {},
  isUpdating: false,
  lastUpdated: null,
  locationNames: {},
});

// Hook to use the context
export const useHelmetData = () => useContext(HelmetDataContext);

interface HelmetDataProviderProps {
  children: React.ReactNode;
  initialHelmets: Helmet[];
}

export function HelmetDataProvider({
  children,
  initialHelmets,
}: HelmetDataProviderProps) {
  // Store ThingSpeak data by helmet ID
  const [helmetsData, setHelmetsData] = useState<
    Record<string, ThingSpeakHelmetData>
  >({});
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [locationNames, setLocationNames] = useState<Record<string, string>>(
    {}
  );

  // Track if component is mounted
  const isMounted = useRef(true);
  // Track last geocoding request time for rate limiting
  const lastGeocodeTime = useRef<number>(0);

  // Initialize with default ThingSpeak data
  useEffect(() => {
    const initialData: Record<string, ThingSpeakHelmetData> = {};

    initialHelmets.forEach((helmet) => {
      // Generate random coordinates around Kampala, Uganda
      const baseLat = 0.3437098237409289;
      const baseLng = 32.57836596268075;

      initialData[helmet.id] = {
        battery: "85%",
        temperature: "25°C",
        status: "active",
        signalStrength: "good",
        latitude: baseLat.toString(),
        longitude: baseLng.toString(),
        lastActiveAt: new Date(),
      };
    });

    setHelmetsData(initialData);

    // Geocode the initial coordinates
    Object.entries(initialData).forEach(([helmetId, data]) => {
      geocodeCoordinates(data.latitude, data.longitude, helmetId);
    });

    return () => {
      isMounted.current = false;
    };
  }, [initialHelmets]);

  // Function to geocode coordinates to place names using Nominatim API
  const geocodeCoordinates = async (
    latitude: string,
    longitude: string,
    helmetId: string
  ) => {
    try {
      // Respect Nominatim's rate limit (1 request per second)
      const now = Date.now();
      const timeSinceLast = now - lastGeocodeTime.current;
      if (timeSinceLast < 1000) {
        await new Promise((resolve) =>
          setTimeout(resolve, 1000 - timeSinceLast)
        );
      }

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
        {
          headers: {
            "User-Agent":
              "HelmetTrackingApp/1.0 (contact: wabwenib66@gmail.com)",
          },
        }
      );

      lastGeocodeTime.current = Date.now();

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log(data);
      // Extract location name from Nominatim response
      let locationName = "Unknown Location";

      if (data.address) {
        const address = data.address;
        // Construct detailed address similar to display_name
        const components = [
          address.suburb, // e.g., "Mulago"
          address.city || address.town, // e.g., "Kampala"
          address.state, // e.g., "Central Region"
          address.country, // e.g., "Uganda"
        ].filter(Boolean); // Remove undefined/null values

        locationName = components.join(", ").trim();
      } else if (data.display_name) {
        // Fallback to display_name if address is not structured
        locationName = data.display_name;
      }
      // Update state with the new location name
      setLocationNames((prev) => ({
        ...prev,
        [helmetId]: locationName,
      }));
    } catch (error) {
      console.error("Error geocoding coordinates:", error);
      if (isMounted.current) {
        setLocationNames((prev) => ({
          ...prev,
          [helmetId]: "Unknown Location",
        }));
      }
    }
  };

  // Simulate ThingSpeak API calls every 10 seconds
  useEffect(() => {
    const fetchThingSpeakData = async () => {
      if (!isMounted.current) return;

      setIsUpdating(true);

      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const updatedData = { ...helmetsData };
        let hasLocationChanges = false;

        // Update each helmet with "new" data from ThingSpeak
        Object.keys(updatedData).forEach((helmetId) => {
          const currentData = updatedData[helmetId];

          // Generate random battery level (decreasing slightly over time)
          const currentBattery = Number.parseInt(
            currentData.battery.replace("%", "")
          );
          const newBattery = Math.max(
            1,
            currentBattery - Math.floor(Math.random() * 2)
          );

          // Generate random temperature (fluctuating slightly)
          const currentTemp = Number.parseInt(
            currentData.temperature.replace("°C", "")
          );
          const tempChange = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
          const newTemp = Math.min(40, Math.max(20, currentTemp + tempChange));

          // Update signal strength occasionally
          const signalOptions: SignalStrength[] = ["excellent", "good", "poor"];
          const newSignal =
            Math.random() > 0.9
              ? signalOptions[Math.floor(Math.random() * signalOptions.length)]
              : currentData.signalStrength;

          // Update status occasionally (mostly active)
          const newStatus = Math.random() > 0.95 ? "inactive" : "active";

          // Occasionally update location (simulating movement)
          let newLat = Number.parseFloat(currentData.latitude);
          let newLng = Number.parseFloat(currentData.longitude);

          if (Math.random() > 0.7) {
            // 30% chance to move
            // Move slightly in a random direction
            newLat += (Math.random() - 0.5) * 0.002;
            newLng += (Math.random() - 0.5) * 0.002;
            hasLocationChanges = true;
          }

          // Update helmet data
          updatedData[helmetId] = {
            battery: `${newBattery}%`,
            temperature: `${newTemp}°C`,
            signalStrength: newSignal,
            status: newStatus,
            latitude: newLat.toFixed(6),
            longitude: newLng.toFixed(6),
            lastActiveAt: new Date(),
          };

          // Show notifications for important changes
          if (newBattery <= 20 && currentBattery > 20) {
            toast.warning(`Low battery alert: ${helmetId} at ${newBattery}%`, {
              id: `low-battery-${helmetId}`,
            });
          }

          if (newStatus !== currentData.status) {
            if (newStatus === "inactive") {
              toast.error(`Helmet ${helmetId} is now inactive`, {
                id: `status-${helmetId}`,
              });
            } else if (currentData.status === "inactive") {
              toast.success(`Helmet ${helmetId} is now active`, {
                id: `status-${helmetId}`,
              });
            }
          }
        });

        if (isMounted.current) {
          setHelmetsData(updatedData);
          setLastUpdated(new Date());

          // Update location names if coordinates have changed
          if (hasLocationChanges) {
            Object.entries(updatedData).forEach(([helmetId, data]) => {
              geocodeCoordinates(data.latitude, data.longitude, helmetId);
            });
          }
        }
      } catch (error) {
        console.error("Error fetching ThingSpeak data:", error);
      } finally {
        if (isMounted.current) {
          setIsUpdating(false);
        }
      }
    };

    // Initial fetch
    fetchThingSpeakData();

    // Set up interval for periodic updates
    const intervalId = setInterval(fetchThingSpeakData, 10000);

    return () => {
      clearInterval(intervalId);
      isMounted.current = false;
    };
  }, [helmetsData]);

  return (
    <HelmetDataContext.Provider
      value={{
        helmetsData,
        isUpdating,
        lastUpdated,
        locationNames,
      }}
    >
      {children}
    </HelmetDataContext.Provider>
  );
}
