"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import Mortgage from "@/models/mortgage.model";

export async function getMortage() {
  try {
    await dbConnect();
    const mortgages = await Mortgage.find({}).lean();
    const serializedMortgages = mortgages.map((mortgage) => {
      return {
        ...mortgage,
        _id: mortgage?._id?.toString(),
      };
    });
    return { success: true, data: serializedMortgages };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function createMortgage(formData) {
  try {
    await dbConnect();
    await Mortgage.create(formData);
    revalidatePath("/aws-backend/mortgage");
    revalidatePath("/","layout");
    revalidatePath("/aws-backend/submortgage")
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateMortgage(id, data) {
  try {
    await dbConnect();
    await Mortgage.findByIdAndUpdate(id, data);
    revalidatePath("/aws-backend/mortgage");
    revalidatePath("/","layout");
    revalidatePath("/aws-backend/submortgage")
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteMortgage(id) {
  try {
    await dbConnect();
    await Mortgage.findByIdAndDelete(id);
    revalidatePath("/aws-backend/mortgage");
    revalidatePath("/","layout");
    revalidatePath("/aws-backend/submortgage")
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getMortgageById(id) {
  try {
    await dbConnect();
    const mortgage = await Mortgage.findById(id).lean();
    if (!mortgage) {
      return { success: false, error: "Mortgage not found" };
    }
    const serializedMortgage = {
      ...mortgage,
      _id: mortgage?._id?.toString(),
    };
    return { success: true, data: serializedMortgage };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getMortgageNames() {
  try {
    await dbConnect();
    const mortgages = await Mortgage.find({}).select("slug heading").lean();
    const serializedMortgages = mortgages.map((mortgage) => {
      return {
        ...mortgage,
        _id: mortgage?._id?.toString(),
      };
    });
    return { success: true, data: serializedMortgages };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getMortgageBySlug(slug){
  try{
    await dbConnect();
    const mortgage = await Mortgage.findOne({slug}).lean();
    if(!mortgage){
      return {success: false, error: "Mortgage not found"}
    }
    const serializedMortgage = {
      ...mortgage,
      _id: mortgage?._id?.toString(),
    }
    return {success: true, data: serializedMortgage}
  }catch(error){
    return {success: false, error: error.message}
  }
}