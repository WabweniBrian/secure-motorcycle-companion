"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState, useRef } from "react";
import {
  fetchIncidentData,
  markIncidentAsProcessed,
  calculateSeverity,
  generateDescription,
} from "@/lib/thingspeak-incident";
import { createIncident } from "@/lib/actions/incident";
import { IncidentStatus, type Severity } from "@/lib/generated/prisma";
import { useHelmetData } from "@/components/helmet-data-provider";
import type { Helmet, Rider } from "@/lib/generated/prisma";
import toast from "react-hot-toast";

interface IncidentDataContextType {
  isChecking: boolean;
  lastChecked: Date | null;
}

const IncidentDataContext = createContext<IncidentDataContextType>({
  isChecking: false,
  lastChecked: null,
});

export const useIncidentData = () => useContext(IncidentDataContext);

interface IncidentDataProviderProps {
  children: React.ReactNode;
  helmets: Helmet[];
  riders: Rider[];
}

export function IncidentDataProvider({
  children,
  helmets,
  riders,
}: IncidentDataProviderProps) {
  const [isChecking, setIsChecking] = useState(false);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);
  const isMounted = useRef(true);

  // Get location names from helmet data provider
  const { locationNames } = useHelmetData();

  // Function to process incident data and create incidents in the database
  const processIncidentData = async () => {
    if (!isMounted.current) return;

    setIsChecking(true);

    try {
      // Fetch incident data from ThingSpeak
      const incidentData = await fetchIncidentData();

      // Process each unprocessed incident
      for (const incident of incidentData) {
        if (incident.processed) continue;

        // Find a random helmet to associate with this incident
        // In a real implementation, the incident data would include the helmet ID
        const randomHelmet =
          helmets[Math.floor(Math.random() * helmets.length)];

        if (!randomHelmet) continue;

        // Calculate severity based on tilt values
        const severity = calculateSeverity(
          incident.tiltX,
          incident.tiltY,
          incident.tiltZ
        );

        // Generate description based on tilt values and severity
        const description = generateDescription(
          incident.tiltX,
          incident.tiltY,
          incident.tiltZ,
          severity
        );

        // Get location name from coordinates
        const location = locationNames[randomHelmet.id] || "Unknown Location";

        // Create incident in the database
        const result = await createIncident({
          incidentId: `INC-${Math.floor(Math.random() * 1000)
            .toString()
            .padStart(3, "0")}`,
          riderId: randomHelmet.riderId,
          helmetId: randomHelmet.id,
          longitude: incident.longitude,
          latitude: incident.latitude,
          location,
          description,
          date: incident.timestamp,
          status: IncidentStatus.active,
          severity: severity as Severity,
        });

        if (result.success) {
          // Mark the incident as processed
          markIncidentAsProcessed(incident.elementId);

          // Show a toast notification
          toast.error(
            `New ${severity} incident detected for ${randomHelmet.helmetId}`
          );
        }
      }

      if (isMounted.current) {
        setLastChecked(new Date());
      }
    } catch (error) {
      console.error("Error processing incident data:", error);
    } finally {
      if (isMounted.current) {
        setIsChecking(false);
      }
    }
  };

  // Check for incidents every 10 seconds
  useEffect(() => {
    // Initial check
    processIncidentData();

    // Set up interval for periodic checks
    const intervalId = setInterval(processIncidentData, 10000);

    return () => {
      clearInterval(intervalId);
      isMounted.current = false;
    };
  }, [helmets, riders, locationNames]);

  return (
    <IncidentDataContext.Provider value={{ isChecking, lastChecked }}>
      {children}
    </IncidentDataContext.Provider>
  );
}
