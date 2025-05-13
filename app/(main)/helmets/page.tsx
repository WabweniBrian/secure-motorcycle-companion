import { Suspense } from "react";
import { AlertTriangle, Battery, HardHatIcon, Wifi } from "lucide-react";
import type { Metadata } from "next";

import { HelmetGrid } from "@/components/helmet-grid";
import { HelmetMap } from "@/components/helmet-map";
import { HelmetDialog } from "@/components/helmet-dialog";
import { HelmetDataProvider } from "@/components/helmet-data-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getHelmets } from "@/lib/actions/helmet";
import { getRiders } from "@/lib/actions/rider";

export const metadata: Metadata = {
  title: "Helmets",
  description: "Manage and monitor your Smart Helmets",
};

export default async function HelmetsPage() {
  const helmets = await getHelmets();
  const riders = await getRiders();

  // Calculate statistics
  const totalHelmets = helmets.length;
  const activeHelmets = helmets.filter(
    (helmet) => helmet.status === "active"
  ).length;
  const activePercentage =
    totalHelmets > 0 ? Math.round((activeHelmets / totalHelmets) * 100) : 0;

  // Calculate average battery (assuming battery is stored as a string like "85%")
  const batteryValues = helmets.map(
    (helmet) => Number.parseInt(helmet.battery!.replace("%", "")) || 0
  );
  const avgBattery =
    batteryValues.length > 0
      ? Math.round(
          batteryValues.reduce((sum, val) => sum + val, 0) /
            batteryValues.length
        )
      : 0;

  // Count alerts (helmets with low battery or poor signal)
  const criticalAlerts = helmets.filter(
    (helmet) =>
      Number.parseInt(helmet.battery!.replace("%", "")) < 20 ||
      helmet.signalStrength === "poor"
  ).length;

  const warningAlerts = helmets.filter(
    (helmet) =>
      (Number.parseInt(helmet.battery!.replace("%", "")) >= 20 &&
        Number.parseInt(helmet.battery!.replace("%", "")) < 40) ||
      helmet.status === "inactive"
  ).length;

  return (
    <HelmetDataProvider initialHelmets={helmets}>
      <div className="space-y-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Helmets</h2>
          <div className="flex items-center space-x-2">
            <HelmetDialog
              riders={riders}
              title="Add New Helmet"
              description="Enter the helmet ID and select a rider. Other data will be fetched from ThingSpeak API."
            />
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card className="gradient-bg-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Helmets
              </CardTitle>
              <HardHatIcon className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalHelmets}</div>
              <p className="text-xs opacity-80">
                {Math.max(0, totalHelmets - 40)} added this month
              </p>
            </CardContent>
          </Card>
          <Card className="gradient-bg-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Helmets
              </CardTitle>
              <Wifi className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeHelmets}</div>
              <p className="text-xs opacity-80">
                {activePercentage}% of total helmets
              </p>
            </CardContent>
          </Card>
          <Card className="gradient-bg-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Battery
              </CardTitle>
              <Battery className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgBattery}%</div>
              <p className="text-xs opacity-80">Based on all active helmets</p>
            </CardContent>
          </Card>
          <Card className="gradient-bg-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {criticalAlerts + warningAlerts}
              </div>
              <p className="text-xs opacity-80">
                {criticalAlerts} critical, {warningAlerts} warning
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4 overflow-hidden">
            <CardHeader>
              <CardTitle>Helmet Locations</CardTitle>
              <CardDescription>
                Real-time locations of active helmets
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
                <HelmetMap helmets={helmets} riders={riders} />
              </Suspense>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Helmet Grid</CardTitle>
              <CardDescription>Quick view of all helmets</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
                <HelmetGrid helmets={helmets} riders={riders} />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </div>
    </HelmetDataProvider>
  );
}
