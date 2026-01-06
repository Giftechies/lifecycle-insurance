"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import SubMortgage from "@/models/subMortgage.model";

export async function getSubMortgage() {
  try {
    await dbConnect();

    const subMortgages = await SubMortgage.find().sort({ order:1 }).lean();
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
 
  try {
    await dbConnect();
    const maxOrder = await SubMortgage.findOne().sort({order:-1}).select("order").lean();
    const nextOrder = maxOrder ? maxOrder.order + 1 : 0;

    const datacreated = await SubMortgage.create({...formData,order:nextOrder});
    console.log("data created",datacreated)
    revalidatePath("/life-backend","layout");
    revalidatePath("/","layout");
    return { success: true };
  } catch (error) {
    console.log('creating ',error);
    
    return { success: false, error: error.message };
  }
}

export async function updateSubMortgage(id, data) {
  try {
    await dbConnect();
  
    await SubMortgage.findByIdAndUpdate(id, data);
    revalidatePath("/life-backend","layout");
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
    revalidatePath("/life-backend","layout");
    revalidatePath("/","layout");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getSubMortgageById(id) {
  try {
    await dbConnect();
    const [total,subMortgage] = await Promise.all([
      SubMortgage.find().countDocuments(),
       SubMortgage.findById(id).lean()
    ])
    if (!subMortgage) {
      return { success: false, error: "SubMortgage not found" };
    }
    // order
    const serializedSubMortgage = {
      ...subMortgage,
      _id: subMortgage?._id?.toString(),
    };
    return { success: true, data: serializedSubMortgage,total };
  } catch (error) {
    return { success: false, error: error.message };
  }
}


export async function getSubMortgageBySlug(slug) {
  try {
    await dbConnect();
    const subMortgage = await SubMortgage.find({ slug:slug }).lean();
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