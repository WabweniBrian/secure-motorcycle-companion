"use client";

import { createIncident } from "@/lib/actions/incident";
import type { Helmet, Rider } from "@/lib/generated/prisma";
import { IncidentStatus } from "@/lib/generated/prisma";
import {
  fetchIncidentData,
  generateDescription,
} from "@/lib/thingspeak-incident";
import type React from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";
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

  const processIncidentData = async () => {
    if (!isMounted.current) return;

    setIsChecking(true);

    try {
      const incident = await fetchIncidentData();

      console.log("Fetched incident data:", incident);

      console.log(!incident);
      console.log(!incident?.helmetId);
      console.log(incident?.processed);

      if (!incident || !incident.helmetId || !incident.processed) {
        // No new feed or invalid helmetId
        if (isMounted.current) {
          setLastChecked(new Date());
          setIsChecking(false);
        }
        return;
      }

      // Validate helmetId
      const helmet = helmets.find((h) => h.helmetId === incident.helmetId);
      if (!helmet) {
        console.warn(`No helmet found for ID: ${incident.helmetId}`);
        if (isMounted.current) {
          setLastChecked(new Date());
          setIsChecking(false);
        }
        return;
      }

      // Get location name

      console.log("Helmet location:", location);

      // Generate description
      const description = generateDescription(incident.severity);

      // Create incident in the database
      const result = await createIncident({
        incidentId: `INC-${incident.elementId.split("-")[1].padStart(3, "0")}`,
        riderId: helmet.riderId,
        helmetId: helmet.id,
        longitude: incident.longitude,
        latitude: incident.latitude,
        description,
        date: incident.timestamp,
        status: IncidentStatus.active,
        severity: incident.severity || "minor",
      });

      if (result.success) {
        toast.success(
          `New ${incident.severity || "minor"} incident detected for ${helmet.helmetId}`
        );
      } else {
        console.error("Failed to create incident:", result.error);
      }

      if (isMounted.current) {
        setLastChecked(new Date());
      }
    } catch (error) {
      console.error("Error processing incident data:", error);
      toast.error("Failed to process incident data");
    } finally {
      if (isMounted.current) {
        setIsChecking(false);
      }
    }
  };

  // Check for incidents every 30 seconds
  useEffect(() => {
    processIncidentData();
    const intervalId = setInterval(processIncidentData, 30_000);

    return () => {
      clearInterval(intervalId);
      isMounted.current = false;
    };
  }, [helmets, riders]);

  return (
    <IncidentDataContext.Provider value={{ isChecking, lastChecked }}>
      {children}
    </IncidentDataContext.Provider>
  );
}
