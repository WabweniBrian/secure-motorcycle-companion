import {
  Activity,
  AlertTriangle,
  Battery,
  HardHatIcon as Helmet,
} from "lucide-react";
import type { Metadata } from "next";
import { Suspense } from "react";

import { Overview } from "@/components/overview";
import { RecentIncidents } from "@/components/recent-incidents";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  getDashboardStats,
  getIncidentSeverityDistribution,
  getMonthlyIncidentData,
  getRecentIncidents,
} from "@/lib/actions/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Smart Helmet Dashboard",
};

export default async function DashboardPage() {
  // Fetch dashboard data
  const stats = await getDashboardStats();
  const { monthlyData } = await getMonthlyIncidentData();
  const recentIncidents = await getRecentIncidents(4);
  const severityDistribution = await getIncidentSeverityDistribution();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="gradient-bg-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Helmets</CardTitle>
            <Helmet className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalHelmets}</div>
            <p className="text-xs opacity-80">
              {stats.helmetGrowthPercentage >= 0 ? "+" : ""}
              {stats.helmetGrowthPercentage}% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="gradient-bg-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Helmets
            </CardTitle>
            <Activity className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeHelmets}</div>
            <p className="text-xs opacity-80">
              {stats.activeHelmetGrowthPercentage >= 0 ? "+" : ""}
              {stats.activeHelmetGrowthPercentage}% from last week
            </p>
          </CardContent>
        </Card>
        <Card className="gradient-bg-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Incidents</CardTitle>
            <AlertTriangle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalIncidents}</div>
            <p className="text-xs opacity-80">
              {stats.incidentGrowthPercentage >= 0 ? "+" : ""}
              {stats.incidentGrowthPercentage}% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="gradient-bg-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Battery Health
            </CardTitle>
            <Battery className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.averageBatteryHealth}%
            </div>
            <p className="text-xs opacity-80">Average across all helmets</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 overflow-x-auto">
          <CardHeader>
            <CardTitle>Incident Overview</CardTitle>
            <CardDescription>
              Monthly incident count for {new Date().getFullYear()}
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <Suspense fallback={<Skeleton className="h-[350px] w-full" />}>
              <Overview data={monthlyData} />
            </Suspense>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Incidents</CardTitle>
            <CardDescription>
              You have {stats.incidentsLastMonth} incidents this month.
              <span className="block text-xs mt-1">
                {severityDistribution.severe} severe,{" "}
                {severityDistribution.moderate} moderate,{" "}
                {severityDistribution.minor} minor
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<Skeleton className="h-[350px] w-full" />}>
              <RecentIncidents incidents={recentIncidents} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
