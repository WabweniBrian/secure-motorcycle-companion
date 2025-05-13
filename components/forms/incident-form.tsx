"use client";

import { useState, useEffect } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  createIncident,
  updateIncident,
  type IncidentFormValues,
} from "@/lib/actions/incident";
import { IncidentStatus, Severity } from "@/lib/generated/prisma";

const formSchema = z.object({
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

interface IncidentFormProps {
  initialData?: IncidentFormValues;
  riders: { id: string; name: string; riderId: string }[];
  helmets: { id: string; helmetId: string; riderId: string }[];
  onSuccess?: () => void;
}

export function IncidentForm({
  initialData,
  riders,
  helmets,
  onSuccess,
}: IncidentFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredHelmets, setFilteredHelmets] = useState(helmets);

  const form = useForm<IncidentFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      incidentId: "",
      riderId: "",
      helmetId: "",
      longitude: "",
      latitude: "",
      location: "",
      description: "",
      date: new Date(),
      status: IncidentStatus.active,
      severity: Severity.moderate,
    },
  });

  // Filter helmets based on selected rider
  useEffect(() => {
    const riderId = form.watch("riderId");
    if (riderId) {
      setFilteredHelmets(
        helmets.filter((helmet) => helmet.riderId === riderId)
      );
    } else {
      setFilteredHelmets(helmets);
    }
  }, [form.watch("riderId"), helmets]);

  const onSubmit = async (values: IncidentFormValues) => {
    setIsLoading(true);
    try {
      const result = initialData?.id
        ? await updateIncident({ ...values, id: initialData.id })
        : await createIncident(values);

      if (result.success) {
        toast.success(initialData ? "Incident updated" : "Incident created");
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
          name="incidentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Incident ID</FormLabel>
              <FormControl>
                <Input placeholder="INC-101" {...field} />
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
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  // Reset helmet when rider changes
                  form.setValue("helmetId", "");
                }}
                defaultValue={field.value}
              >
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

        <FormField
          control={form.control}
          name="helmetId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Helmet</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={!form.watch("riderId")}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        form.watch("riderId")
                          ? "Select a helmet"
                          : "Select a rider first"
                      }
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {filteredHelmets.map((helmet) => (
                    <SelectItem key={helmet.id} value={helmet.id}>
                      {helmet.helmetId}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Input
                    type="datetime-local"
                    value={
                      field.value instanceof Date
                        ? field.value.toISOString().slice(0, 16)
                        : ""
                    }
                    onChange={(e) => {
                      field.onChange(
                        e.target.value ? new Date(e.target.value) : new Date()
                      );
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter location"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="latitude"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Latitude (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0.0"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="longitude"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Longitude (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0.0"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={IncidentStatus.active}>
                      Active
                    </SelectItem>
                    <SelectItem value={IncidentStatus.investigating}>
                      Investigating
                    </SelectItem>
                    <SelectItem value={IncidentStatus.resolved}>
                      Resolved
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="severity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Severity</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={Severity.minor}>Minor</SelectItem>
                    <SelectItem value={Severity.moderate}>Moderate</SelectItem>
                    <SelectItem value={Severity.severe}>Severe</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the incident..."
                  className="min-h-[100px]"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading
            ? "Saving..."
            : initialData
              ? "Update Incident"
              : "Create Incident"}
        </Button>
      </form>
    </Form>
  );
}
