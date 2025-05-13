"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { Helmet, HelmetStatus, SignalStrength } from "@/lib/generated/prisma";

const HelmetSchema = z.object({
  id: z.string().optional(),
  riderId: z.string().min(1, "Rider ID is required"),
  helmetId: z.string().min(1, "Helmet ID is required"),
  battery: z.string().min(1, "Battery information is required"),
  temperature: z.string().min(1, "Temperature information is required"),
  status: z.nativeEnum(HelmetStatus),
  lastActiveAt: z.date(),
  latitude: z.string(),
  longitude: z.string(),
  signalStrength: z.nativeEnum(SignalStrength),
});

export type HelmetFormValues = z.infer<typeof HelmetSchema>;

export const getHelmets = async (query?: string) => {
  return await prisma.helmet.findMany({
    where: query
      ? {
          OR: [
            { helmetId: { contains: query, mode: "insensitive" } },
            { rider: { name: { contains: query, mode: "insensitive" } } },
          ],
        }
      : undefined,
    orderBy: { createdAt: "desc" },
    include: {
      rider: true,
    },
  });
};

export const getHelmetById = async (id: string) => {
  try {
    const helmet = await prisma.helmet.findUnique({
      where: { id },
      include: {
        rider: true,
        incidents: true,
      },
    });

    if (!helmet) {
      return { success: false, error: "Helmet not found" };
    }

    return { success: true, data: helmet };
  } catch (error) {
    console.error("Failed to fetch helmet:", error);
    return { success: false, error: "Failed to fetch helmet" };
  }
};

export const createHelmet = async (values: HelmetFormValues) => {
  try {
    const validatedFields = HelmetSchema.parse(values);

    // Generate a helmet ID if not provided
    if (!validatedFields.helmetId) {
      const count = await prisma.helmet.count();
      validatedFields.helmetId = `H-${(count + 201).toString().padStart(3, "0")}`;
    }

    // Check if the helmet ID already exists
    const existingHelmet = await prisma.helmet.findUnique({
      where: { helmetId: validatedFields.helmetId },
    });

    if (existingHelmet) {
      return { success: false, error: "Helmet ID already exists" };
    }

    const helmet = await prisma.helmet.create({
      data: validatedFields,
    });

    revalidatePath("/settings");
    revalidatePath("/helmets");
    return { success: true, data: helmet };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }

    console.error("Failed to create helmet:", error);
    return { success: false, error: "Failed to create helmet" };
  }
};

export const updateHelmet = async (values: Partial<Helmet>) => {
  try {
    const validatedFields = HelmetSchema.parse(values);

    if (!validatedFields.id) {
      return { success: false, error: "Helmet ID is required for updates" };
    }

    // Check if the helmet ID already exists
    const existingHelmet = await prisma.helmet.findUnique({
      where: {
        helmetId: validatedFields.helmetId,
        NOT: { id: validatedFields.id },
      },
    });

    if (existingHelmet) {
      return { success: false, error: "Helmet ID already exists" };
    }

    const helmet = await prisma.helmet.update({
      where: { id: validatedFields.id },
      data: validatedFields,
    });

    revalidatePath("/settings");
    revalidatePath("/helmets");
    return { success: true, data: helmet };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }

    console.error("Failed to update helmet:", error);
    return { success: false, error: "Failed to update helmet" };
  }
};

export const deleteHelmet = async (id: string) => {
  try {
    await prisma.helmet.delete({
      where: { id },
    });

    revalidatePath("/settings");
    revalidatePath("/helmets");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete helmet:", error);
    return { success: false, error: "Failed to delete helmet" };
  }
};
