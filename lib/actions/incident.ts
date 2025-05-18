"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { IncidentStatus, Severity } from "@/lib/generated/prisma";

const IncidentSchema = z.object({
  id: z.string().optional(),
  incidentId: z.string().min(1, "Incident ID is required"),
  riderId: z.string().min(1, "Rider ID is required"),
  helmetId: z.string().min(1, "Helmet ID is required"),
  longitude: z.string().optional(),
  latitude: z.string().optional(),
  location: z.string().optional(),
  description: z.string().optional(),
  date: z.date(),
  status: z.nativeEnum(IncidentStatus),
  severity: z.nativeEnum(Severity),
});

export type IncidentFormValues = z.infer<typeof IncidentSchema>;

export const getIncidents = async (query?: string) => {
  return await prisma.incident.findMany({
    where: query
      ? {
          OR: [
            { incidentId: { contains: query, mode: "insensitive" } },
            { location: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } },
            { rider: { name: { contains: query, mode: "insensitive" } } },
          ],
        }
      : undefined,
    orderBy: { date: "desc" },
    include: {
      rider: true,
      helmet: true,
    },
  });
};

export const getIncidentById = async (id: string) => {
  try {
    const incident = await prisma.incident.findUnique({
      where: { id },
      include: {
        rider: true,
        helmet: true,
      },
    });

    if (!incident) {
      return { success: false, error: "Incident not found" };
    }

    return { success: true, data: incident };
  } catch (error) {
    console.error("Failed to fetch incident:", error);
    return { success: false, error: "Failed to fetch incident" };
  }
};

export const createIncident = async (values: IncidentFormValues) => {
  try {
    const validatedFields = IncidentSchema.parse(values);

    // Generate an incident ID if not provided
    if (!validatedFields.incidentId) {
      const count = await prisma.incident.count();
      validatedFields.incidentId = `INC-${(count + 101).toString().padStart(3, "0")}`;
    }

    // Check if the incident already exists by date
    const existingIncident = await prisma.incident.findFirst({
      where: {
        date: validatedFields.date,
        helmetId: validatedFields.helmetId,
      },
    });

    if (!existingIncident) {
      console.log("Creating new incident:", validatedFields);
      await prisma.incident.create({
        data: validatedFields,
      });
    }

    // Update rider's hasHadIncident status
    await prisma.rider.update({
      where: { id: validatedFields.riderId },
      data: { hasHadIncident: true },
    });

    revalidatePath("/incidents");
    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }

    console.error("Failed to create incident:", error);
    return { success: false, error: "Failed to create incident" };
  }
};

export const updateIncident = async (values: IncidentFormValues) => {
  try {
    const validatedFields = IncidentSchema.parse(values);

    if (!validatedFields.id) {
      return { success: false, error: "Incident ID is required for updates" };
    }

    const incident = await prisma.incident.update({
      where: { id: validatedFields.id },
      data: validatedFields,
    });

    revalidatePath("/incidents");
    return { success: true, data: incident };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }

    console.error("Failed to update incident:", error);
    return { success: false, error: "Failed to update incident" };
  }
};

export const updateIncidentStatus = async (
  id: string,
  status: IncidentStatus
) => {
  try {
    const incident = await prisma.incident.update({
      where: { id },
      data: { status },
    });

    revalidatePath("/incidents");
    return { success: true, data: incident };
  } catch (error) {
    console.error("Failed to update incident status:", error);
    return { success: false, error: "Failed to update incident status" };
  }
};

export const deleteIncident = async (id: string) => {
  try {
    await prisma.incident.delete({
      where: { id },
    });

    revalidatePath("/incidents");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete incident:", error);
    return { success: false, error: "Failed to delete incident" };
  }
};

// Get incident statistics
export const getIncidentStats = async () => {
  const totalIncidents = await prisma.incident.count();

  const activeIncidents = await prisma.incident.count({
    where: {
      status: { in: ["active", "investigating"] },
    },
  });

  const criticalIncidents = await prisma.incident.count({
    where: {
      severity: "severe",
      status: { in: ["active", "investigating"] },
    },
  });

  const affectedRiders = await prisma.rider.count({
    where: {
      hasHadIncident: true,
    },
  });

  const totalRiders = await prisma.rider.count();

  const lastMonthIncidents = await prisma.incident.count({
    where: {
      date: {
        gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
      },
    },
  });

  const previousMonthIncidents = await prisma.incident.count({
    where: {
      date: {
        gte: new Date(new Date().setMonth(new Date().getMonth() - 2)),
        lt: new Date(new Date().setMonth(new Date().getMonth() - 1)),
      },
    },
  });

  const monthlyChange = lastMonthIncidents - previousMonthIncidents;

  return {
    totalIncidents,
    activeIncidents,
    criticalIncidents,
    affectedRiders,
    totalRiders,
    riderPercentage:
      totalRiders > 0 ? Math.round((affectedRiders / totalRiders) * 100) : 0,
    monthlyChange,
  };
};

// Get incident chart data
export const getIncidentChartData = async () => {
  // Get incidents from the last 7 days
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const incidents = await prisma.incident.findMany({
    where: {
      date: {
        gte: sevenDaysAgo,
      },
    },
    select: {
      date: true,
      severity: true,
    },
    orderBy: {
      date: "asc",
    },
  });

  // Group incidents by day and severity
  interface ChartDataPoint {
    date: string;
    minor: number;
    moderate: number;
    severe: number;
  }

  const chartData: ChartDataPoint[] = [];
  const dateMap = new Map();

  // Initialize the last 7 days
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    const dateStr = date.toISOString().split("T")[0];
    dateMap.set(dateStr, {
      date: dateStr,
      minor: 0,
      moderate: 0,
      severe: 0,
    });
  }

  // Count incidents by day and severity
  incidents.forEach((incident) => {
    const dateStr = incident.date.toISOString().split("T")[0];
    if (!dateMap.has(dateStr)) {
      dateMap.set(dateStr, {
        date: dateStr,
        minor: 0,
        moderate: 0,
        severe: 0,
      });
    }

    const dayData = dateMap.get(dateStr);
    dayData[incident.severity]++;
  });

  // Convert map to array and format dates
  dateMap.forEach((value) => {
    // Format date as "Jan 1", "Jan 2", etc.
    const date = new Date(value.date);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    chartData.push({
      ...value,
      date: formattedDate,
    });
  });

  return { chartData };
};
