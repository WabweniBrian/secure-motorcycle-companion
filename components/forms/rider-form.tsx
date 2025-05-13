"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  createRider,
  updateRider,
  type RiderFormValues,
} from "@/lib/actions/rider";
import toast from "react-hot-toast";

const formSchema = z.object({
  id: z.string().optional(),
  riderId: z.string().min(1, "Rider ID is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().optional(),
  hasHadIncident: z.boolean().default(false),
});

interface RiderFormProps {
  initialData?: RiderFormValues;
  onSuccess?: () => void;
}

export function RiderForm({ initialData, onSuccess }: RiderFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RiderFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      riderId: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      hasHadIncident: false,
    },
  });

  const onSubmit = async (values: RiderFormValues) => {
    setIsLoading(true);

    console.log("Submitting form with values:", values);
    try {
      const result = initialData?.id
        ? await updateRider({ ...values, id: initialData.id })
        : await createRider(values);

      if (result.success) {
        toast.success(initialData ? "Rider updated" : "Rider created");
        if (onSuccess) onSuccess();
        if (!initialData) form.reset();
      } else {
        toast.error((result.error as string) || "Something went wrong");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="riderId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rider ID</FormLabel>
              <FormControl>
                <Input placeholder="RID-101" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Wabweni Brian" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="wabwenib@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="+256723489332" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Kampala, Uganda"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {initialData && (
          <FormField
            control={form.control}
            name="hasHadIncident"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Has had incident</FormLabel>
                </div>
              </FormItem>
            )}
          />
        )}

        <Button type="submit" disabled={isLoading}>
          {isLoading
            ? "Saving..."
            : initialData
              ? "Update Rider"
              : "Create Rider"}
        </Button>
      </form>
    </Form>
  );
}
