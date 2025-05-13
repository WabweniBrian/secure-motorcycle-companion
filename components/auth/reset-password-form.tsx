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
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { EyeIcon, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const resetPasswordSchema = z
  .object({
    newPassword: z
      .string({ required_error: "New Password is required" })
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string({
      required_error: "Confirm Password is required",
    }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email") as string;
  const token = searchParams.get("token");

  useEffect(() => {
    if (!email || !token) {
      router.push("/login");
    }
  }, [email, router, token]);

  const form = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (values: ResetPasswordSchemaType) => {
    try {
      await axios.put("/api/auth/reset-password", {
        newPassword: values.newPassword,
        email,
        token,
      });
      router.push(
        "/login?message=Your password has been reset successfully, Login"
      );
    } catch (error: any) {
      setError(error.response.data);
      toast.error(error.response.data);
    }
  };
  return (
    <div>
      <h1 className="mb-2 text-center text-2xl font-bold">Reset Password</h1>
      <p className="mb-4">
        After resetting password, you&apos;ll be redirected to the signin page.
      </p>
      {error && (
        <div className="my-2">
          <span className="text-red-500">{error}</span>
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div>
            <Input value={email} readOnly disabled className="bg-transparent" />
          </div>

          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <div
                      className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeIcon className="h-5 w-5 text-slate-600 dark:text-slate-200" />
                      ) : (
                        <EyeOff className="h-5 w-5 text-slate-600 dark:text-slate-200" />
                      )}
                    </div>
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="bg-transparent"
                      disabled={form.formState.isSubmitting}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <div
                      className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeIcon className="h-5 w-5 text-slate-600 dark:text-slate-200" />
                      ) : (
                        <EyeOff className="h-5 w-5 text-slate-600 dark:text-slate-200" />
                      )}
                    </div>
                    <Input
                      {...field}
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Password Confirmation"
                      className="bg-transparent"
                      disabled={form.formState.isSubmitting}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-5">
            <Button
              type="submit"
              className="w-full rounded-lg"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <div className="gap-x-2 flex-center-center">
                  <Loader2 className="animate-spin w-4 h-4" />
                  <span>Processing...</span>
                </div>
              ) : (
                "Reset Password"
              )}
            </Button>
          </div>
        </form>
      </Form>
      <div className="mt-4 text-center">
        <Link href="/login" className="text-sm text-brand hover:underline">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
