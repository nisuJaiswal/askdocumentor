"use client";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./layout.module.css";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";

const FormSchema = z.object({
  email: z.string().min(1, "Email is Required").email("Email is Invalid"),
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
  confirmPassword: z.string().min(1, "Confirm Password is required"),
});

const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      //   confirmPassword: ''
    },
  });
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      const { data } = await axios.post("/api/user", {
        username: values.username,
        password: values.password,
        email: values.email,
      });
      console.log(data);
      if (data) {
        router.push("/");
      }
    } catch (error) {
      if (error instanceof AxiosError) console.log(error.response?.data.msg);
    }
  };
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>

        {/* form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  {/* <FormLabel>Email</FormLabel> */}
                  <FormControl>
                    <Input placeholder="email" {...field} />
                    {/* <FormMessage /> */}
                  </FormControl>
                  <span className="icon flex items-center px-4">
                    <HiAtSymbol size={25} />
                  </span>
                </FormItem>
              )}
            />
            {/* <div className={styles.input_group}>
              <input
                type="text"
                name="Username"
                placeholder="Username"
                className={styles.inputfield}
              />
              <span className="icon flex items-center px-4">
                <HiOutlineUser size={25} />
              </span>
            </div> */}
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
                    <HiFingerPrint size={25} />
                  </span>
                </FormItem>
              )}
            />
            {/* <div className={styles.input_group}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.inputfield}
              />
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={25} />
              </span>
            </div> */}
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
            {/* <div className={styles.input_group}>
              <input
                type="password"
                //type={`${show.password ? "text" : "password"}`}
                name="password"
                placeholder="password"
                className={styles.inputfield}
              />
              <span
                className="icon flex items-center px-4"
                //</div>onClick={() => setShow({ ...show, password: !show.password})}
              >
                <HiFingerPrint size={25} />
              </span>
            </div> */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  {/* <FormLabel>Email</FormLabel> */}
                  <FormControl>
                    <Input
                      type="confirmPassword"
                      placeholder="******"
                      {...field}
                    />
                    {/* <FormMessage /> */}
                  </FormControl>
                  <span className="icon flex items-center px-4">
                    <HiFingerPrint size={25} />
                  </span>
                </FormItem>
              )}
            />
            {/* <div className={styles.input_group}>
              <input
                type="password"
                // type={`${show.cpassword ? "text" : "password"}`}
                name="cpassword"
                placeholder="Confirm Password"
                className={styles.inputfield}
              />
              <span
                className="icon flex items-center px-4"
                //</div>onClick={() => setShow({ ...show, cpassword: !show.cpassword})}
              >
                <HiFingerPrint size={25} />
              </span>
            </div> */}

            {/* login buttons */}
            <div className="input-button">
              <Button type="submit" className={styles.button}>
                Signup
              </Button>
            </div>
          </form>
        </Form>

        {/* bottom */}
        <p className="text-center text-gray-400 ">
          Have an account?{" "}
          <Link href={"/log-in"}>
            <p className="text-blue-700">Sign In</p>
          </Link>
        </p>
      </section>
    </>
  );
};

export default SignUpForm;
