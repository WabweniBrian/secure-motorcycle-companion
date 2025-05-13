"use client";

import { useEffect, useState } from "react";
import { useHelmetData } from "@/components/helmet-data-provider";
import type { Helmet } from "@/lib/generated/prisma";

interface HelmetStatsProps {
  initialHelmets: Helmet[];
}

export function HelmetStats({ initialHelmets }: HelmetStatsProps) {
  const { helmetsData } = useHelmetData();
  const [stats, setStats] = useState({
    totalHelmets: initialHelmets.length,
    activeHelmets: initialHelmets.filter((h) => h.status === "active").length,
    activePercentage: 0,
    avgBattery: 0,
    criticalAlerts: 0,
    warningAlerts: 0,
  });

  useEffect(() => {
    // Combine initial helmets with real-time data
    const combinedHelmets = initialHelmets.map((helmet) => ({
      ...helmet,
      ...helmetsData[helmet.id],
    }));

    // Calculate statistics
    const totalHelmets = combinedHelmets.length;
    const activeHelmets = combinedHelmets.filter(
      (h) => h.status === "active"
    ).length;
    const activePercentage =
      totalHelmets > 0 ? Math.round((activeHelmets / totalHelmets) * 100) : 0;

    // Calculate average battery
    const batteryValues = combinedHelmets.map(
      (h) => Number.parseInt(h.battery!.toString().replace("%", "")) || 0
    );
    const avgBattery =
      batteryValues.length > 0
        ? Math.round(
            batteryValues.reduce((sum, val) => sum + val, 0) /
              batteryValues.length
          )
        : 0;

    // Count alerts
    const criticalAlerts = combinedHelmets.filter(
      (h) =>
        Number.parseInt(h.battery!.toString().replace("%", "")) < 20 ||
        h.signalStrength === "poor"
    ).length;

    const warningAlerts = combinedHelmets.filter(
      (h) =>
        (Number.parseInt(h.battery!.toString().replace("%", "")) >= 20 &&
          Number.parseInt(h.battery!.toString().replace("%", "")) < 40) ||
        h.status === "inactive"
    ).length;

    setStats({
      totalHelmets,
      activeHelmets,
      activePercentage,
      avgBattery,
      criticalAlerts,
      warningAlerts,
    });
  }, [initialHelmets, helmetsData]);

  return {
    totalHelmets: stats.totalHelmets,
    activeHelmets: stats.activeHelmets,
    activePercentage: stats.activePercentage,
    avgBattery: stats.avgBattery,
    criticalAlerts: stats.criticalAlerts,
    warningAlerts: stats.warningAlerts,
  };
}
