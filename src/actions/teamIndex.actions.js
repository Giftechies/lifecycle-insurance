"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import TeamIndex from "@/models/teamIndex";

export async function getTeamIndex() {
  try {
    await dbConnect();
    const index = await TeamIndex.findOne({}).lean();
    const serializedIndex = {
      ...index,
      _id: index?._id?.toString(),
    };
    return { success: true, data: serializedIndex };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateTeamIndex(data) {
  try {
    await dbConnect();
    const index = await TeamIndex.findOne({}).lean();
    if (!index) {
      await TeamIndex.create(data);
    } else {
      await TeamIndex.findByIdAndUpdate(index._id, data);
    }
    const serializedIndex = {
      ...data,
      _id: index?._id?.toString(),
    };
    revalidatePath("/life-backend/about-index");
    revalidatePath("/about-us");
    return { success: true, index: serializedIndex };
  } catch (error) {
    return { error: error.message || "An unexpected error occurred" };
  }
}

