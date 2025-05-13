"use server";

import { prisma } from "@/lib/prisma";
import { Severity } from "@/lib/generated/prisma";

// Get dashboard statistics
export const getDashboardStats = async () => {
  // Get current date and previous month date for comparisons
  const previousMonthDate = new Date();
  previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);

  const previousWeekDate = new Date();
  previousWeekDate.setDate(previousWeekDate.getDate() - 7);

  // Get total helmets count
  const totalHelmets = await prisma.helmet.count();

  // Get helmets created in the last month
  const newHelmetsLastMonth = await prisma.helmet.count({
    where: {
      createdAt: {
        gte: previousMonthDate,
      },
    },
  });

  // Calculate helmet growth percentage
  const helmetsBeforeLastMonth = await prisma.helmet.count({
    where: {
      createdAt: {
        lt: previousMonthDate,
      },
    },
  });

  const helmetGrowthPercentage =
    helmetsBeforeLastMonth > 0
      ? Math.round((newHelmetsLastMonth / helmetsBeforeLastMonth) * 100)
      : 100;

  // Get active helmets count
  const activeHelmets = await prisma.helmet.count({
    where: {
      status: "active",
    },
  });

  // Get active helmets from last week
  const activeHelmetsLastWeek = await prisma.helmet.count({
    where: {
      status: "active",
      lastActiveAt: {
        gte: previousWeekDate,
      },
    },
  });

  // Calculate active helmets growth percentage
  const activeHelmetsBeforeLastWeek = await prisma.helmet.count({
    where: {
      status: "active",
      lastActiveAt: {
        lt: previousWeekDate,
        gte: new Date(previousWeekDate.getTime() - 7 * 24 * 60 * 60 * 1000),
      },
    },
  });

  const activeHelmetGrowthPercentage =
    activeHelmetsBeforeLastWeek > 0
      ? Math.round(
          ((activeHelmetsLastWeek - activeHelmetsBeforeLastWeek) /
            activeHelmetsBeforeLastWeek) *
            100
        )
      : 0;

  // Get total incidents count
  const totalIncidents = await prisma.incident.count();

  // Get incidents from last month
  const incidentsLastMonth = await prisma.incident.count({
    where: {
      date: {
        gte: previousMonthDate,
      },
    },
  });

  // Get incidents from the month before last month
  const incidentsBeforeLastMonth = await prisma.incident.count({
    where: {
      date: {
        lt: previousMonthDate,
        gte: new Date(previousMonthDate.getTime() - 30 * 24 * 60 * 60 * 1000),
      },
    },
  });

  // Calculate incident growth percentage
  const incidentGrowthPercentage =
    incidentsBeforeLastMonth > 0
      ? Math.round(
          ((incidentsLastMonth - incidentsBeforeLastMonth) /
            incidentsBeforeLastMonth) *
            100
        )
      : 0;

  // Calculate average battery health
  const helmets = await prisma.helmet.findMany({
    select: {
      battery: true,
    },
  });

  let totalBatteryPercentage = 0;
  let validBatteryCount = 0;

  helmets.forEach((helmet) => {
    const batteryMatch = helmet.battery!.match(/(\d+)%/);
    if (batteryMatch && batteryMatch[1]) {
      const batteryPercentage = Number.parseInt(batteryMatch[1]);
      if (!isNaN(batteryPercentage)) {
        totalBatteryPercentage += batteryPercentage;
        validBatteryCount++;
      }
    }
  });

  const averageBatteryHealth =
    validBatteryCount > 0
      ? Math.round(totalBatteryPercentage / validBatteryCount)
      : 0;

  return {
    totalHelmets,
    helmetGrowthPercentage,
    activeHelmets,
    activeHelmetGrowthPercentage,
    totalIncidents,
    incidentsLastMonth,
    incidentGrowthPercentage,
    averageBatteryHealth,
  };
};

// Get monthly incident data for the chart
export const getMonthlyIncidentData = async () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  // Create an array of all months
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Initialize data structure
  const monthlyData = months.map((name, index) => ({
    name,
    total: 0,
    month: index,
  }));

  // Get all incidents for the current year
  const incidents = await prisma.incident.findMany({
    where: {
      date: {
        gte: new Date(currentYear, 0, 1),
        lt: new Date(currentYear + 1, 0, 1),
      },
    },
    select: {
      date: true,
      severity: true,
    },
  });

  // Count incidents by month
  incidents.forEach((incident) => {
    const month = incident.date.getMonth();
    monthlyData[month].total += 1;
  });

  return { monthlyData };
};

// Get recent incidents with rider information
export const getRecentIncidents = async (limit = 5) => {
  return await prisma.incident.findMany({
    take: limit,
    orderBy: {
      date: "desc",
    },
    include: {
      rider: true,
      helmet: true,
    },
  });
};

// Get incident severity distribution
export const getIncidentSeverityDistribution = async () => {
  const severeCounts = await prisma.incident.count({
    where: {
      severity: Severity.severe,
    },
  });

  const moderateCounts = await prisma.incident.count({
    where: {
      severity: Severity.moderate,
    },
  });

  const minorCounts = await prisma.incident.count({
    where: {
      severity: Severity.minor,
    },
  });

  return {
    severe: severeCounts,
    moderate: moderateCounts,
    minor: minorCounts,
  };
};
