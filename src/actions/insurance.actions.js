"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import Insurance from "@/models/insurance.model";

export async function getInsurance() {
  try {
    await dbConnect();
    const data = await Insurance.find({}).lean();
    const serializedData = data.map((item) => {
      return {
        ...item,
        _id: item?._id?.toString(),
      };
    });
    return { success: true, data: serializedData };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function createInsurance(formData) {
  try {
    await dbConnect();
    await Insurance.create(formData);
    revalidatePath("/life-backend/insurance");
    revalidatePath("/","layout");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateInsurance(id, data) {
  try {
    await dbConnect();
    await Insurance.findByIdAndUpdate(id, data);
    revalidatePath("/life-backend/insurance");
    revalidatePath("/","layout");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteInsurance(id) {
  try {
    await dbConnect();
    await Insurance.findByIdAndDelete(id);
    revalidatePath("/life-backend/insurance");
    revalidatePath("/","layout");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getInsuranceNames() {
  try {
    await dbConnect();
    const data = await Insurance.find({}).select("heading slug").lean();
    const serializedData = data.map((item) => {
      return {
        ...item,
        _id: item?._id?.toString(),
      };
    });
    return { success: true, data: serializedData };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getInsuranceById(id) {
  try {
    await dbConnect();
    const insurance = await Insurance.findById(id).lean();
    if (!insurance) {
      return { success: false, error: "Insurance not found" };
    }
    const serializedInsurance = {
      ...insurance,
      _id: insurance?._id?.toString(),
    };
    return { success: true, data: serializedInsurance };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getInsuranceBySlug(slug) {
  try {
    await dbConnect();
    const insurance = await Insurance.findOne({ slug }).lean();
    if (!insurance) {
      return { success: false, error: "Insurance not found" };
    }
    const serializedInsurance = {
      ...insurance,
      _id: insurance?._id?.toString(),
    };
    return { success: true, data: serializedInsurance };
  } catch (error) {
    return { success: false, error: error.message };
  }
}