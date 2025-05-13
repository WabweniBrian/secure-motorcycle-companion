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
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const userLoginSchema = z.object({
  email: z
    .string({ required_error: "Email address is required" })
    .email("Invalid email address"),
  password: z.string({ required_error: "Password is required" }),
});

type UserLoginSchemaType = z.infer<typeof userLoginSchema>;

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const message = searchParams.get("message");
  const callbackUrl = searchParams?.get("callbackUrl");

  const form = useForm<UserLoginSchemaType>({
    resolver: zodResolver(userLoginSchema),
  });

  const onSubmit = async (values: UserLoginSchemaType) => {
    try {
      const res = await axios.post("/api/auth/sign-in", {
        email: values.email,
        password: values.password,
        callbackUrl,
      });
      setError(null);
      toast.success("Login success, redirecting...");
      location.assign(res.data.callbackUrl);
    } catch (error: any) {
      setError(error.response.data);
    }
  };

  return (
    <div>
      {error && (
        <div className="my-2 rounded-lg bg-red-500/20 p-2">
          <span className="text-red-500">{error}</span>
        </div>
      )}
      {message && (
        <div className="my-2 rounded-lg bg-green-500/20 p-2">
          <span className="text-green-500">{message}</span>
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Email"
                    className="bg-transparent"
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
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
          <div className="mt-2 flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-brand underline"
            >
              Forgot Password?
            </Link>
          </div>
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
                "Sign In"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
