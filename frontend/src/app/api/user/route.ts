import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { z } from "zod";

const userSchema = z.object({
  username: z
    .string()
    .min(1, "Please Provide Username")
    .max(20, "Max limit for username: 20"),
  email: z.string().min(1, "Please Provide Email").email("Invalid Email"),
  password: z
    .string()
    .min(1, "Enter password")
    .max(12, "Max Password length: 12 Characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, username, password } = userSchema.parse(body);
    console.log(email);

    const existingUser = await db.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      return NextResponse.json(
        { user: null, msg: "Already Existing Email" },
        { status: 409 }
      );
    }

    const existingUsername = await db.user.findUnique({
      where: { username: username },
    });

    if (existingUsername) {
      return NextResponse.json(
        { user: null, msg: "Already Existing Username" },
        { status: 409 }
      );
    }

    const hashed = await hash(password, 10);
    const createdUser = await db.user.create({
      data: {
        email,
        username,
        password: hashed,
      },
    });

    const { password: newPass, ...rest } = createdUser;

    return NextResponse.json(
      { user: rest, msg: "User Created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Sorry, Something went wrong in backend", error },
      { status: 500 }
    );
  }
}
