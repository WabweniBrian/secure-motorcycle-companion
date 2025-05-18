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
  const [helmetsData, setHelmetsData] = useState<
    Record<string, ThingSpeakHelmetData>
  >(
    initialHelmets.reduce(
      (acc, helmet) => {
        acc[helmet.helmetId] = {
          battery: "0%",
          temperature: "0°C",
          status: "inactive",
          signalStrength: "poor",
          latitude: "0.0",
          longitude: "0.0",
          lastActiveAt: new Date(),
        };
        return acc;
      },
      {} as Record<string, ThingSpeakHelmetData>
    )
  );
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const isMounted = useRef(true);
  const lastProcessedTimestamp = useRef<string | null>(null);

  // Map signal strength value to SignalStrength type
  const mapSignalStrength = (value: string): SignalStrength => {
    const dbm = parseInt(value) || -100; // Default to poor if invalid
    if (dbm >= -50) return "excellent";
    if (dbm >= -70) return "good";
    return "poor";
  };

  // Fetch ThingSpeak data every 30 seconds
  useEffect(() => {
    const fetchThingSpeakData = async () => {
      if (!isMounted.current) return;

      setIsUpdating(true);

      try {
        const apiKey =
          process.env.NEXT_PUBLIC_THINGSPEAK_SMC_MONITORING_READ_API_KEY;
        const channelId =
          process.env.NEXT_PUBLIC_THING_SPEAK_SMC_MONITORING_CHANNEL_ID;

        if (!apiKey || !channelId) {
          throw new Error("Missing ThingSpeak API key or Channel ID");
        }

        const url = `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${apiKey}&results=1`;
        const response = await fetch(url);

        console.log("Fetching ThingSpeak data from:", url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const feeds = data.feeds || [];

        console.log(`Feeds: ${feeds.length}`);

        if (feeds.length === 0) {
          if (isMounted.current) {
            setLastUpdated(new Date());
            setIsUpdating(false);
          }
          return;
        }

        // Process only the latest feed
        const feed = feeds[0]; // Single feed from results=1

        console.log("Lastest feed:", feed);

        const helmetId = feed.field4;
        const latitude = feed.field1;
        const longitude = feed.field2;
        const battery = feed.field3;
        const temperature = feed.field5;
        const status = feed.field6;
        const signalStrength = feed.field7;
        const lastActiveAt = feed.created_at;

        // Notifications

        const newBattery = parseInt(feed.field3?.replace("%", "") || "0");
        const currentBattery = parseInt(battery?.replace("%", "") || "100");

        if (newBattery <= 20 && currentBattery > 20) {
          toast.warning(`Low battery alert: ${helmetId} at ${newBattery}%`, {
            id: `low-battery-${helmetId}`,
          });
        }

        if (feed.field6 !== status) {
          if (feed.field6 === "inactive") {
            toast.error(`Helmet ${helmetId} is now inactive`, {
              id: `status-${helmetId}`,
            });
          } else if (status === "inactive") {
            toast.success(`Helmet ${helmetId} is now active`, {
              id: `status-${helmetId}`,
            });
          }
        }

        setHelmetsData((prevData) => ({
          ...prevData,
          [helmetId]: {
            battery: `${battery}%`,
            temperature: `${temperature}°C`,
            status: status || "inactive",
            signalStrength: mapSignalStrength(signalStrength),
            latitude: latitude || "0.0",
            longitude: longitude || "0.0",
            lastActiveAt: new Date(lastActiveAt),
          },
        }));
        setLastUpdated(new Date());
        lastProcessedTimestamp.current = feed.created_at;
      } catch (error) {
        console.error("Error fetching ThingSpeak data:", error);
        toast.error("Failed to fetch helmet data");
      } finally {
        setIsUpdating(false);
      }
    };

    // Initial fetch
    fetchThingSpeakData();

    // Fetch every 30 seconds
    const intervalId = setInterval(fetchThingSpeakData, 30_000);

    return () => {
      clearInterval(intervalId);
      isMounted.current = false;
    };
  }, [helmetsData, initialHelmets]);

  return (
    <HelmetDataContext.Provider
      value={{
        helmetsData,
        isUpdating,
        lastUpdated,
      }}
    >
      {children}
    </HelmetDataContext.Provider>
  );
}
