"use client";

import * as React from "react";
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

import { cn } from "@/lib/utils/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { register } from "@/lib/api/authAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useErrorNotification } from "@/hooks/useErrorNotification";
import LoadingLine from "@/components/ui/loadingLine";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import useLocalStorage from "@/hooks/useLocalStorage";
import Image from "next/image";

interface RegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formLoginSchema = z.object({
  email: z.string().min(3, {
    message: "email ít nhất 3 ký tự",
  }),
  password: z.string().min(3, {
    message: "Password ít nhất 3 ký tự",
  }),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to our terms of services in order to register",
  }),
});

export function RegisterForm({ className, ...props }: RegisterFormProps) {
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const router = useRouter();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formLoginSchema>) {
    handleRegister({
      email: values.email,
      password: values.password,
    });
  }

  const {
    mutate: handleRegister,
    status,
    error: mutateError,
  } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["authenticatedUser"] });
      router.push("/login");
    },
  });

  useErrorNotification({
    isError: status === "error",
    title: mutateError?.message ?? "Tạo tài khoản thất bại",
  });

  const isLoading = status === "pending";

  return (
    <div className={cn("grid gap-4 space-y-4", className)} {...props}>
      <Form {...form}>
        <form
          method="POST"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel className="flex flex-row justify-between">
                  Password
                  {passwordVisible ? (
                    <span
                      className="flex flex-row gap-2 items-center cursor-pointer pr-2"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      <EyeOffIcon className="w-5 h-5 cursor-pointer" />
                      Hide
                    </span>
                  ) : (
                    <span
                      className="flex flex-row gap-2 items-center cursor-pointer pr-1"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      <EyeIcon className="w-5 h-5 cursor-pointer" />
                      Show
                    </span>
                  )}
                </FormLabel>
                <FormControl>
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }: any) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-row gap-2">
                    <Input
                      type={"checkbox"}
                      {...field}
                      className="w-5 h-5 mt-[2px]"
                    />
                    <span>
                      By creating an account, I agree to our
                      <Link
                        href={"/term-of-use"}
                        className="inline px-1 underline"
                      >
                        Terms of use
                      </Link>
                      and
                      <Link
                        href={"/privacy-policy"}
                        className="inline pl-1 underline"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isLoading}
            variant={"outline"}
            className="w-full text-shade-1-100% hover:text-shade-1-100% bg-neutral-4 rounded-full hover:bg-primary py-6"
          >
            {isLoading ? <LoadingLine /> : "Create Account"}
          </Button>
        </form>
      </Form>
      <div className="flex flex-row items-center justify-between gap-4 text-neutral-8">
        <span className="w-full h-[2px] bg-neutral-4"></span>OR
        <span className="w-full h-[2px] bg-neutral-4"></span>
      </div>
      <div className="flex flex-col gap-4">
        <Button
          variant={"outline"}
          className="w-full text-neutral-7 flex flex-row gap-2 rounded-full py-5"
        >
          <Image
            src={"/register/google-logo.svg"}
            alt="Google logo"
            width={22}
            height={22}
          />
          Continue with Google
        </Button>
        <Button
          variant={"outline"}
          className="w-full text-neutral-7 flex flex-row gap-2 rounded-full py-5"
        >
          <Image
            src={"/register/apple-logo.svg"}
            alt="Apple logo"
            width={22}
            height={22}
          />
          Continue with Apple
        </Button>
      </div>
    </div>
  );
}
