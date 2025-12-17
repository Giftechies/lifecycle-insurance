"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import About from "@/models/about.model";

export async function getAboutData() {
  try {
    await dbConnect();
    const result = await About.findOne().lean();
    if (!result) {
      return { success: true, data: null };
    }

    let migratedResult = { ...result };
    if (result.points && result.points.length > 0) {
      const needsMigration = result.points.some(
        (point) => typeof point === "string"
      );

      if (needsMigration) {
        migratedResult.points = result.points.map((point, index) => ({
          text: typeof point === "string" ? point : point.text,
          order: typeof point === "string" ? index : point.order,
        }));

        await About.findByIdAndUpdate(result._id, {
          points: migratedResult.points,
        });
      }
    }

    const serializedResult = {
      ...migratedResult,
      _id: migratedResult._id.toString(),
    };
    return { success: true, data: serializedResult };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateAboutData(data) {
  try {
    await dbConnect();

    const existingAbout = await About.findOne();

    if (existingAbout) {
      await About.findByIdAndUpdate(existingAbout._id, data);
    } else {
      await About.create(data);
    }

    revalidatePath("/aws-backend/about");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
