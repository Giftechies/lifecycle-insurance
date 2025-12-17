"use server";

import { SignJWT } from "jose";
import { cookies } from "next/headers";
import dbConnect from "../lib/db";
import { User } from "@/models/User";

export async function login(formData) {
  try {
    await dbConnect();

    const { username, password } = formData;

    if (!username || !password) {
      return { error: "Username and password are required" };
    }

    const user = await User.findOne({ username });
    if (!user) {
      return { error: "Invalid credentials" };
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return { error: "Invalid credentials" };
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    if (!secret) {
      throw new Error("JWT_SECRET environment variable is not set");
    }

    const token = await new SignJWT({ userId: user._id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")
      .sign(secret);

    const cookieStore = await cookies();
    cookieStore.set("accessToken423798", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
    });

    return { success: true };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}

export async function logout() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("accessToken423798");
    return { success: true };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}

export async function warmUpDatabase() {
  try {
    await dbConnect();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function register() {
  console.log("register");
  const username = "awsadmin";
  const password = "awsaccess02";

  try {
    await dbConnect();
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return { success: false, error: "Username already exists" };
    }
    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
