"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import SubInsurance from "@/models/subInsurance.model";

export async function getSubInsurance() {
  try {
    await dbConnect();
    const data = await SubInsurance.find().lean();
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

export async function createSubInsurance(formData) {
  try {
    await dbConnect();
    await SubInsurance.create(formData);
    revalidatePath("/life-backend/subinsurance");
    revalidatePath("/","layout");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateSubInsurance(id, data) {
  try {
    await dbConnect();
    await SubInsurance.findByIdAndUpdate(id, data);
    revalidatePath("/life-backend/subinsurance");
    revalidatePath("/","layout");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteSubInsurance(id) {
  try {
    await dbConnect();
    await SubInsurance.findByIdAndDelete(id);
    revalidatePath("/life-backend/subinsurance");
    revalidatePath("/","layout");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getSubInsuranceById(id) {
  try {
    await dbConnect();
    const subInsurance = await SubInsurance.findById(id).lean();
    if (!subInsurance) {
      return { success: false, error: "SubInsurance not found" };
    }
    const serializedSubInsurance = {
      ...subInsurance,
      _id: subInsurance?._id?.toString(),
    };
    return { success: true, data: serializedSubInsurance };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getSubInsuranceBySlug(slug) {
  try {
    await dbConnect();
    const subInsurance = await SubInsurance.find({ category: slug }).lean();
    if (!subInsurance) {
      return { success: false, error: "SubInsurance not found" };
    }
    const serializedSubInsurance = subInsurance.map((item) => {
      return {
        ...item,
        _id: item?._id?.toString(),
      };
    });
    return { success: true, data: serializedSubInsurance };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getEachSubInsurance(slug){
  try{
    await dbConnect();
    const subInsurance = await SubInsurance.findOne({slug}).lean();
    if(!subInsurance){
      return {success: false, error: "SubInsurance not found"}
    }
    const serializedSubInsurance = {
      ...subInsurance,
      _id: subInsurance?._id?.toString(),
    }
    return {success: true, data: serializedSubInsurance}
  }catch(error){
    return {success: false, error: error.message}
  }
} 