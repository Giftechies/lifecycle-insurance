import { User } from "../../../models/User";
import DBConnect from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await DBConnect();

    const body = await req.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const user = await User.create({ username, password });

    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          id: user._id,
          username: user.username,
          createdAt: user.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return NextResponse.json(
      { message: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
