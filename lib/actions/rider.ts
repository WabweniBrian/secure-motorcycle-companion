"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const RiderSchema = z.object({
  id: z.string().optional(),
  riderId: z.string().min(1, "Rider ID is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().optional(),
  hasHadIncident: z.boolean().default(false),
});

export type RiderFormValues = z.infer<typeof RiderSchema>;

export const getRiders = async (query?: string) => {
  return await prisma.rider.findMany({
    where: query
      ? {
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            { email: { contains: query, mode: "insensitive" } },
            { riderId: { contains: query, mode: "insensitive" } },
            { phone: { contains: query, mode: "insensitive" } },
          ],
        }
      : undefined,
    orderBy: { createdAt: "desc" },
    include: {
      emergencyContact: true,
      helmet: true,
    },
  });
};

export const getRiderById = async (id: string) => {
  try {
    const rider = await prisma.rider.findUnique({
      where: { id },
      include: {
        emergencyContact: true,
        helmet: true,
        incidents: true,
      },
    });

    if (!rider) {
      return { success: false, error: "Rider not found" };
    }

    return { success: true, data: rider };
  } catch (error) {
    console.error("Failed to fetch rider:", error);
    return { success: false, error: "Failed to fetch rider" };
  }
};

export const createRider = async (values: RiderFormValues) => {
  try {
    const validatedFields = RiderSchema.parse(values);

    console.log("Validated Fields:", validatedFields);

    // Generate a rider ID if not provided
    if (!validatedFields.riderId) {
      const count = await prisma.rider.count();
      validatedFields.riderId = `RID-${(count + 101).toString().padStart(3, "0")}`;
    }

    const existingRiderId = await prisma.rider.findUnique({
      where: { riderId: validatedFields.riderId },
    });

    if (existingRiderId) {
      return { success: false, error: "Rider ID already exists" };
    }

    const existingEmail = await prisma.rider.findUnique({
      where: { email: validatedFields.email },
    });

    if (existingEmail) {
      return { success: false, error: "Email already exists" };
    }

    const rider = await prisma.rider.create({
      data: validatedFields,
    });

    revalidatePath("/settings");
    return { success: true, data: rider };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }

    console.error("Failed to create rider:", error);
    return { success: false, error: "Failed to create rider" };
  }
};

export const updateRider = async (values: RiderFormValues) => {
  try {
    const validatedFields = RiderSchema.parse(values);

    if (!validatedFields.id) {
      return { success: false, error: "Rider ID is required for updates" };
    }

    const existingRiderId = await prisma.rider.findUnique({
      where: {
        riderId: validatedFields.riderId,
        NOT: { id: validatedFields.id },
      },
    });

    if (existingRiderId) {
      return { success: false, error: "Rider ID already exists" };
    }

    const existingEmail = await prisma.rider.findUnique({
      where: { email: validatedFields.email, NOT: { id: validatedFields.id } },
    });

    if (existingEmail) {
      return { success: false, error: "Email already exists" };
    }

    const rider = await prisma.rider.update({
      where: { id: validatedFields.id },
      data: validatedFields,
    });

    revalidatePath("/settings");
    return { success: true, data: rider };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }

    console.error("Failed to update rider:", error);
    return { success: false, error: "Failed to update rider" };
  }
};

export const deleteRider = async (id: string) => {
  try {
    await prisma.rider.delete({
      where: { id },
    });

    revalidatePath("/settings");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete rider:", error);
    return { success: false, error: "Failed to delete rider" };
  }
};
