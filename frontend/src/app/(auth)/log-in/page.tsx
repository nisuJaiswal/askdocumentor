"use client";
import LoginForm from "@/components/Forms/LoginForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
//import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) router.push("/");
  return (
    <>
      <LoginForm />
    </>
  );
}
