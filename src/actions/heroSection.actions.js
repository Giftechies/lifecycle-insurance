"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import Hero from "@/models/hero.model";

export async function getHeroBanners() {
  try {
    await dbConnect();
    const result = await Hero.find({ isActive: true })
      .sort({ order: 1 })
      .lean();
    const serializedResult = result.map((banner) => ({
      ...banner,
      _id: banner._id.toString(),
    }));
    return { success: true, data: serializedResult };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getAllHeroBanners() {
  try {
    await dbConnect();
    const result = await Hero.find().sort({ order: 1 }).lean();
    const serializedResult = result.map((banner) => ({
      ...banner,
      _id: banner._id.toString(),
    }));
    return { success: true, data: serializedResult };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getHeroBannerById(id) {
  try {
    await dbConnect();
    const result = await Hero.findById(id).lean();
    if (!result) {
      return { success: false, error: "Hero banner not found" };
    }
    const serializedResult = {
      ...result,
      _id: result._id.toString(),
    };
    return { success: true, data: serializedResult };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function createHeroBanner(data) {
  try {
    await dbConnect();
    await Hero.create(data);
    revalidatePath("/life-backend/hero");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateHeroBanner(id, data) {
  try {
    await dbConnect();
    await Hero.findByIdAndUpdate(id, data);
    revalidatePath("/life-backend/hero");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteHeroBanner(id) {
  try {
    await dbConnect();
    await Hero.findByIdAndDelete(id);
    revalidatePath("/life-backend/hero");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function toggleHeroBannerStatus(id) {
  try {
    await dbConnect();
    const banner = await Hero.findById(id);
    if (!banner) {
      return { success: false, error: "Hero banner not found" };
    }
    banner.isActive = !banner.isActive;
    await banner.save();
    revalidatePath("/life-backend/hero");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateHeroBannersOrder(banners) {
  try {
    await dbConnect();

    const updatePromises = banners.map((banner, index) =>
      Hero.findByIdAndUpdate(banner._id, { order: index })
    );

    await Promise.all(updatePromises);

    revalidatePath("/life-backend/hero");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
