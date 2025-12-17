"use server";

import dbConnect from "@/lib/db";
import BusinessCategories from "@/models/business-categories.model";
import { revalidatePath } from "next/cache";

export async function getBusinessCategory() {
  try {
    await dbConnect();
    const businessCategory = await BusinessCategories.find({}).lean();
    return { success: true, data: businessCategory };
  } catch {
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function createBusinessCategory(formData) {
  try {
    await dbConnect();
    await BusinessCategories.create(formData);
    revalidatePath("/", "layout");
    return { success: true };
  } catch {
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function updateBusinessCategory(id, formData) {
  try {
    await dbConnect();
    await BusinessCategories.findByIdAndUpdate(id, formData);
    revalidatePath("/", "layout");
    return { success: true };
  } catch {
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function deleteBusinessCategory(id) {
  try {
    await dbConnect();
    await BusinessCategories.findByIdAndDelete(id);
    revalidatePath("/", "layout");
    return { success: true };
  } catch {
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function getBusinessCategoryById(id) {
  try {
    await dbConnect();
    const data = await BusinessCategories.findById(id).lean();
    return { success: true, data };
  } catch {
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function getBusinessCategoryBySlug(slug) {
  try {
    await dbConnect();
    const category = await BusinessCategories.findOne({ slug }).lean();

    if (!category) {
      return { success: false, error: "Category not found" };
    }

    const serializedCategory = {
      ...category,
      _id: category._id.toString(),
    };

    return { success: true, data: serializedCategory };
  } catch (error) {
    return { success: false, error: "An unexpected error occurred" };
  }
}
