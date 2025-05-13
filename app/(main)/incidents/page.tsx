import { Suspense } from "react";
import {
  AlertCircle,
  AlertOctagon,
  Clock,
  Filter,
  Users,
  Download,
} from "lucide-react";
import type { Metadata } from "next";

import { IncidentFilters } from "@/components/incident-filters";
import { IncidentsChart } from "@/components/incidents-chart";
import { IncidentsList } from "@/components/incidents-list";
import { IncidentDataProvider } from "@/components/incident-data-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  getIncidents,
  getIncidentStats,
  getIncidentChartData,
} from "@/lib/actions/incident";
import { getHelmets } from "@/lib/actions/helmet";
import { getRiders } from "@/lib/actions/rider";
import { IncidentProvider } from "@/components/incident-context";

export const metadata: Metadata = {
  title: "Incidents",
  description: "Monitor and manage Smart Helmet incidents",
};

export default async function IncidentsPage() {
  // Fetch incidents, helmets, and riders
  const incidents = await getIncidents();
  const helmets = await getHelmets();
  const riders = await getRiders();
  const stats = await getIncidentStats();
  const { chartData } = await getIncidentChartData();

  return (
    <IncidentDataProvider helmets={helmets} riders={riders}>
      <IncidentProvider>
        <div className="space-y-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight">
              Incidents
            </h2>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Card className="gradient-bg-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Incidents
                </CardTitle>
                <AlertCircle className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalIncidents}</div>
                <p className="text-xs opacity-80">
                  {stats.monthlyChange >= 0 ? "+" : ""}
                  {stats.monthlyChange} from last month
                </p>
              </CardContent>
            </Card>
            <Card className="gradient-bg-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Cases
                </CardTitle>
                <Clock className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.activeIncidents}
                </div>
                <p className="text-xs opacity-80">
                  {stats.criticalIncidents} require immediate attention
                </p>
              </CardContent>
            </Card>
            <Card className="gradient-bg-3">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Affected Riders
                </CardTitle>
                <Users className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.affectedRiders}</div>
                <p className="text-xs opacity-80">
                  {stats.riderPercentage}% of total riders
                </p>
              </CardContent>
            </Card>
            <Card className="gradient-bg-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Critical Alerts
                </CardTitle>
                <AlertOctagon className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.criticalIncidents}
                </div>
                <p className="text-xs opacity-80">
                  {stats.criticalIncidents > 0
                    ? "Immediate action required"
                    : "No critical incidents"}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Incident Trends</CardTitle>
                <CardDescription>
                  Number of incidents over time by severity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<Skeleton className="h-[350px] w-full" />}>
                  <IncidentsChart chartData={chartData} />
                </Suspense>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader className="space-y-0.5">
                <CardTitle>Active Filters</CardTitle>
                <CardDescription>Customize your incident view</CardDescription>
              </CardHeader>
              <CardContent>
                <IncidentFilters />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>All Incidents</CardTitle>
              <CardDescription>
                A detailed list of all incidents sorted by date
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
                <IncidentsList incidents={incidents} />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </IncidentProvider>
    </IncidentDataProvider>
  );
}
