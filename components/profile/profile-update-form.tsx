"use client";

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
import { useAuth } from "@/hooks/use-auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

interface ProfileUpdateFormProps {
  user: {
    name: string;
    email: string;
  };
}

const profileUpdateSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(3),
  email: z
    .string({ required_error: "Email address is required" })
    .email("Invalid email address"),
});

type UserProfileSchemaType = z.infer<typeof profileUpdateSchema>;

const ProfileUpdateForm = ({ user }: ProfileUpdateFormProps) => {
  const { updateUser } = useAuth();

  const form = useForm<UserProfileSchemaType>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const onSubmit = async (values: UserProfileSchemaType) => {
    await updateUser({ name: values.name, email: values.email });
    toast.success("Profile Updated successfully");
  };

  return (
    <div className="rounded-xl border p-2 sm:p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex-col gap-4 flex-align-center sm:flex-row">
            {/* Name */}
            <div className="w-full flex-1 sm:w-fit">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Full Name"
                        className="bg-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email */}
            <div className="w-full flex-1 sm:w-fit">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Email Address"
                        className="bg-transparent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Button
              type="submit"
              variant="secondary"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <div className="gap-x-2 flex-center-center">
                  <Loader2 className="animate-spin w-4 h-4" />
                  <span>Updating...</span>
                </div>
              ) : (
                "Update"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileUpdateForm;
