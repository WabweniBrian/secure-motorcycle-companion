"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const ContactSchema = z.object({
  id: z.string().optional(),
  riderId: z.string().min(1, "Rider ID is required"),
  name: z.string().min(1, "Name is required"),
  relation: z.string().min(1, "Relation is required"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof ContactSchema>;

export const getContacts = async (query?: string) => {
  return await prisma.contact.findMany({
    where: query
      ? {
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            { relation: { contains: query, mode: "insensitive" } },
            { phone: { contains: query, mode: "insensitive" } },
          ],
        }
      : undefined,
    orderBy: { createdAt: "desc" },
    include: {
      rider: true,
    },
  });
};

export const getContactById = async (id: string) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id },
      include: {
        rider: true,
      },
    });

    if (!contact) {
      return { success: false, error: "Contact not found" };
    }

    return { success: true, data: contact };
  } catch (error) {
    console.error("Failed to fetch contact:", error);
    return { success: false, error: "Failed to fetch contact" };
  }
};

export const createContact = async (values: ContactFormValues) => {
  try {
    const validatedFields = ContactSchema.parse(values);

    const contact = await prisma.contact.create({
      data: validatedFields,
    });

    revalidatePath("/settings");
    return { success: true, data: contact };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }

    console.error("Failed to create contact:", error);
    return { success: false, error: "Failed to create contact" };
  }
};

export const updateContact = async (values: ContactFormValues) => {
  try {
    const validatedFields = ContactSchema.parse(values);

    if (!validatedFields.id) {
      return { success: false, error: "Contact ID is required for updates" };
    }

    const contact = await prisma.contact.update({
      where: { id: validatedFields.id },
      data: validatedFields,
    });

    revalidatePath("/settings");
    return { success: true, data: contact };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors };
    }

    console.error("Failed to update contact:", error);
    return { success: false, error: "Failed to update contact" };
  }
};

export const deleteContact = async (id: string) => {
  try {
    await prisma.contact.delete({
      where: { id },
    });

    revalidatePath("/settings");
    return { success: true };
  } catch (error) {
    console.error("Failed to delete contact:", error);
    return { success: false, error: "Failed to delete contact" };
  }
};
