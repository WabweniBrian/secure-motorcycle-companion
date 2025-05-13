"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createHelmet, updateHelmet } from "@/lib/actions/helmet";
import { HelmetStatus, SignalStrength } from "@/lib/generated/prisma";
import type { Helmet, Rider } from "@/lib/generated/prisma";

const formSchema = z.object({
  id: z.string().optional(),
  riderId: z.string().min(1, "Rider is required"),
  helmetId: z.string().min(1, "Helmet ID is required"),
});

interface HelmetFormProps {
  helmet?: Helmet;
  riders: Rider[];
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function HelmetForm({
  helmet,
  riders,
  onSuccess,
  onCancel,
}: HelmetFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const isEditing = !!helmet;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: helmet?.id,
      riderId: helmet?.riderId || "",
      helmetId: helmet?.helmetId || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      if (isEditing) {
        // When editing, we only update the riderId and helmetId
        // The rest of the data will be preserved from the existing helmet
        const result = await updateHelmet({
          ...helmet,
          riderId: values.riderId,
          helmetId: values.helmetId,
        });

        if (result.success) {
          toast.success("Helmet updated successfully");
          if (onSuccess) onSuccess();
          router.refresh();
        } else {
          toast.error((result.error as string) || "Failed to update helmet");
        }
      } else {
        // When adding, we create default values that would normally come from ThingSpeak API
        const helmetData = {
          ...values,
          battery: "85%", // Default battery level
          temperature: "25°C", // Default temperature
          status: HelmetStatus.active, // Default status
          lastActiveAt: new Date(), // Current time
          latitude: "0.347596", // Default latitude (Kampala)
          longitude: "32.582520", // Default longitude (Kampala)
          signalStrength: SignalStrength.good, // Default signal strength
        };

        const result = await createHelmet(helmetData);

        if (result.success) {
          toast.success("Helmet added successfully");
          form.reset();
          if (onSuccess) onSuccess();
          router.refresh();
        } else {
          toast.error((result.error as string) || "Failed to add helmet");
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="helmetId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Helmet ID</FormLabel>
              <FormControl>
                <Input placeholder="H-201" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="riderId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rider</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a rider" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {riders.map((rider) => (
                    <SelectItem key={rider.id} value={rider.id}>
                      {rider.name} ({rider.riderId})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-amber-800 text-sm">
          <p>
            Note: Battery, temperature, location, and signal strength data will
            be fetched from ThingSpeak API every 10 seconds.
          </p>
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading
              ? isEditing
                ? "Updating..."
                : "Adding..."
              : isEditing
                ? "Update Helmet"
                : "Add Helmet"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
