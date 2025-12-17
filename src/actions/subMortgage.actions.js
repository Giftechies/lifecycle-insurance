"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import SubMortgage from "@/models/subMortgage.model";

export async function getSubMortgage() {
  try {
    await dbConnect();
    const subMortgages = await SubMortgage.find({}).lean();
    const serializedSubMortgages = subMortgages.map((subMortgage) => {
      return {
        ...subMortgage,
        _id: subMortgage?._id?.toString(),
      };
    });
    return { success: true, data: serializedSubMortgages };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function createSubMortgage(formData) {
  console.log("data coming",formData)
  try {
    await dbConnect();
    const datacreated = await SubMortgage.create(formData);
    console.log("data created",datacreated)
    revalidatePath("/aws-backend","layout");
    revalidatePath("/","layout");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateSubMortgage(id, data) {
  try {
    await dbConnect();
    await SubMortgage.findByIdAndUpdate(id, data);
    revalidatePath("/aws-backend","layout");
    revalidatePath("/","layout");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteSubMortgage(id) {
  try {
    await dbConnect();
    await SubMortgage.findByIdAndDelete(id);
    revalidatePath("/aws-backend","layout");
    revalidatePath("/","layout");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getSubMortgageById(id) {
  try {
    await dbConnect();
    const subMortgage = await SubMortgage.findById(id).lean();
    if (!subMortgage) {
      return { success: false, error: "SubMortgage not found" };
    }
    const serializedSubMortgage = {
      ...subMortgage,
      _id: subMortgage?._id?.toString(),
    };
    return { success: true, data: serializedSubMortgage };
  } catch (error) {
    return { success: false, error: error.message };
  }
}


export async function getSubMortgageBySlug(slug) {
  try {
    await dbConnect();
    const subMortgage = await SubMortgage.find({ category:slug }).lean();
    if (!subMortgage) {
      return { success: false, error: "SubMortgage not found" };
    }
   const serializedSubMortgage = subMortgage.map((subMortgage) => {
     return {
       ...subMortgage,
       _id: subMortgage?._id?.toString(),
     };
   })
    return { success: true, data: serializedSubMortgage };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getEachSubMortgage(slug){
  try{
    await dbConnect();
    const subMortgage = await SubMortgage.findOne({slug}).lean();
    if(!subMortgage){
      return {success: false, error: "SubMortgage not found"}
    }
    const serializedSubMortgage = {
      ...subMortgage,
      _id: subMortgage?._id?.toString(),
    }
    return {success: true, data: serializedSubMortgage}
  }catch(error){
    return {success: false, error: error.message}
  }
}