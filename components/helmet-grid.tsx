"use client";

import { useMemo } from "react";
import {
  HardHatIcon,
  Battery,
  Thermometer,
  Wifi,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
  MapPin,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useHelmetData } from "@/components/helmet-data-provider";
import type { Helmet, Rider } from "@/lib/generated/prisma";
import { HelmetActions } from "./helmet-actions";

interface HelmetGridProps {
  helmets: Helmet[];
  riders: Rider[];
}

function HelmetCard({
  helmet,
  riderName,
  riders,
  locationName,
}: {
  helmet: Helmet;
  riderName: string;
  riders: Rider[];
  locationName: string;
}) {
  // Get real-time data from context
  const { helmetsData, isUpdating } = useHelmetData();

  // Use real-time data from ThingSpeak
  const thingSpeakData = helmetsData[helmet.id];

  // If no ThingSpeak data is available yet, show loading state
  if (!thingSpeakData) {
    return (
      <div className="rounded-lg border p-4 bg-gray-50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <HardHatIcon className="h-6 w-6" />
            <span className="font-bold">{helmet.helmetId}</span>
          </div>
          <RefreshCw className="h-5 w-5 animate-spin text-blue-500" />
        </div>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Loading helmet data...
          </p>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 border-green-200";
      case "inactive":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getBatteryColor = (level: string) => {
    const batteryLevel = Number.parseInt(level.replace("%", ""));
    if (batteryLevel > 60) return "text-green-500";
    if (batteryLevel > 20) return "text-yellow-500";
    return "text-red-500";
  };

  const getTemperatureColor = (temp: string) => {
    const temperature = Number.parseInt(temp.replace("°C", ""));
    if (temperature < 30) return "text-green-500";
    if (temperature < 35) return "text-yellow-500";
    return "text-red-500";
  };

  const getSignalColor = (signal: string) => {
    switch (signal) {
      case "excellent":
        return "text-green-500";
      case "good":
        return "text-blue-500";
      case "poor":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  // Extract battery percentage as a number for the progress bar
  const batteryPercentage =
    Number.parseInt(thingSpeakData.battery.replace("%", "")) || 0;

  // Format the last active time
  const timeAgo = getTimeAgo(thingSpeakData.lastActiveAt);

  return (
    <div
      className={`rounded-lg border p-4 ${getStatusColor(thingSpeakData.status)}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <HardHatIcon className="h-6 w-6" />
          <span className="font-bold">{helmet.helmetId}</span>
        </div>
        <div className="flex items-center space-x-1">
          {isUpdating && (
            <RefreshCw className="h-4 w-4 mr-1 animate-spin text-blue-500" />
          )}
          {thingSpeakData.status === "active" ? (
            <CheckCircle className="h-5 w-5 text-green-500" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-red-500" />
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Battery
              className={`h-4 w-4 ${getBatteryColor(thingSpeakData.battery)}`}
            />
            <span className="text-sm">Battery</span>
          </div>
          <span className="font-medium">{thingSpeakData.battery}</span>
        </div>
        <Progress value={batteryPercentage} className="h-2" />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Thermometer
              className={`h-4 w-4 ${getTemperatureColor(thingSpeakData.temperature)}`}
            />
            <span className="text-sm">Temperature</span>
          </div>
          <span className="font-medium">{thingSpeakData.temperature}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wifi
              className={`h-4 w-4 ${getSignalColor(thingSpeakData.signalStrength)}`}
            />
            <span className="text-sm">Signal</span>
          </div>
          <span className="font-medium">
            {thingSpeakData.signalStrength.charAt(0).toUpperCase() +
              thingSpeakData.signalStrength.slice(1)}
          </span>
        </div>

        <div className="pt-2 border-t">
          <p className="text-sm flex items-start">
            <span className="font-medium mr-1">Location:</span>
            <span className="flex items-center">
              <MapPin className="h-3 w-3 mr-1 mt-0.5 flex-shrink-0" />
              {locationName}
            </span>
          </p>
          <p className="text-sm">
            <span className="font-medium">Rider:</span> {riderName}
          </p>
          <p className="text-sm text-muted-foreground">
            Last active: {timeAgo}
          </p>
        </div>

        {/* Add edit and delete actions */}
        <HelmetActions helmet={helmet} riders={riders} />
      </div>
    </div>
  );
}

// Helper function to format time ago
function getTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHour / 24);

  if (diffSec < 60) return `${diffSec} sec ago`;
  if (diffMin < 60) return `${diffMin} min ago`;
  if (diffHour < 24) return `${diffHour} hours ago`;
  return `${diffDay} days ago`;
}

export function HelmetGrid({ helmets, riders }: HelmetGridProps) {
  // Get real-time data from context
  const { helmetsData, lastUpdated, locationNames } = useHelmetData();

  // Sort helmets by status (active first) and then by lastActiveAt (most recent first)
  const sortedHelmets = useMemo(() => {
    return [...helmets].sort((a, b) => {
      const aData = helmetsData[a.id];
      const bData = helmetsData[b.id];

      // If ThingSpeak data isn't loaded yet, use default sorting
      if (!aData || !bData) return 0;

      // Sort by status first
      if (aData.status === "active" && bData.status !== "active") return -1;
      if (aData.status !== "active" && bData.status === "active") return 1;

      // Then sort by last active time
      return bData.lastActiveAt.getTime() - aData.lastActiveAt.getTime();
    });
  }, [helmets, helmetsData]);

  // Get rider name for each helmet
  const getRiderName = (riderId: string) => {
    const rider = riders.find((r) => r.id === riderId);
    return rider ? rider.name : "Unknown Rider";
  };

  return (
    <div>
      {lastUpdated && (
        <div className="text-xs text-muted-foreground mb-4 flex items-center">
          <RefreshCw className="h-3 w-3 mr-1" />
          Last updated: {lastUpdated.toLocaleTimeString()}
        </div>
      )}

      <div className="grid gap-2 grid-cols-1 max-h-[350px] overflow-y-auto">
        {sortedHelmets.length > 0 ? (
          sortedHelmets.map((helmet) => (
            <HelmetCard
              key={helmet.id}
              helmet={helmet}
              riderName={getRiderName(helmet.riderId)}
              riders={riders}
              locationName={locationNames[helmet.id] || "Unknown Location"}
            />
          ))
        ) : (
          <div className="col-span-2 text-center py-8 text-gray-500">
            No helmets found. Add a helmet to get started.
          </div>
        )}
      </div>
    </div>
  );
}
