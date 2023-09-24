"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .refine((value) => !/\s/.test(value), {
      message: "Username cannot contain spaces",
      path: ["username"],
    }),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});
const LoginForm = () => {
  const router = useRouter();
  const { data: session } = useSession();
  if (session && session.user) router.push("/");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
      //   confirmPassword: ''
    },
  });
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log(values);
    const signInData = await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
    });
    // console.log(signInData);
    if (signInData?.error) console.log(signInData.error);
    else router.push("/");
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
        </div>
        <div className="form">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              {/* <div className={styles.input_group}> */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    {/* <FormLabel>Email</FormLabel> */}
                    <FormControl>
                      <Input placeholder="username" {...field} />
                      {/* <FormMessage /> */}
                    </FormControl>
                    <span className="icon flex items-center px-4">
                      <HiAtSymbol size={25} />
                    </span>
                  </FormItem>
                )}
              />
              {/* <Input
                  {...field}
                  placeholder="demo@gmail.com"
                  className={styles.inputfield}
                /> */}
              {/* </div> */}
              {/* <div className={styles.input_group}> */}

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between">
                    {/* <FormLabel>Email</FormLabel> */}
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} />
                      {/* <FormMessage /> */}
                    </FormControl>
                    <span className="icon flex items-center px-4">
                      <HiFingerPrint size={25} />
                    </span>
                  </FormItem>
                )}
              />

              {/* </div> */}
              <div className="input-button">
                <Button type="submit">Login</Button>
              </div>
              <div className="input-button">
                <button
                  onClick={() => signIn("google")}
                  type="button"
                  className={styles.button_custom}
                >
                  Sign in with Google
                  <Image
                    src={"/google.jpg"}
                    alt="Google Imagae"
                    width="20"
                    height={20}
                  ></Image>
                </button>
              </div>
              <div className="input-button">
                <button type="button" className={styles.button_custom}>
                  Sign in with Github
                  <Image
                    src="/github.jpg"
                    alt="git image"
                    width="20"
                    height={20}
                  ></Image>
                </button>
              </div>
            </form>
          </Form>
        </div>
        <div className="bottom">
          <p className="text-center text-gray-400">
            dont have an account yet?{" "}
            <Link href={"/register"}>
              <p className="text-blue-700">Click here</p>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
