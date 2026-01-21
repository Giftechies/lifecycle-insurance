"use server"

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import InsuranceIndex from "@/models/insuranceIndex.model";

export async function getInsuranceIndex() {
  try {
    await dbConnect();

    const indexData = await InsuranceIndex
      .findOne()
      .lean();

    // ✅ FIX: handle empty collection safely
    if (!indexData) {
      return { success: false, data: null };
    }

    const serializedIndex = {
      ...indexData,
      _id: indexData._id.toString(),
    };

    return { success: true, data: serializedIndex };

  } catch (error) {
    return {
      success: false,
      error: error?.message || "An unexpected error occurred",
    };
  }
}


// export async function updateInsuranceIndex(data){
//     try{
//         await dbConnect();
//         const index = await InsuranceIndex.findOne({}).lean();
//         if(!index){
//             await InsuranceIndex.create(data);
//         }else{
//             await InsuranceIndex.findByIdAndUpdate(index._id, data);
//         }
//         const serializedIndex = {
//             ...data,
//             _id: index?._id?.toString(),
//         }
//         revalidatePath("/life-backend/insurance-index");
//         revalidatePath("/insurance");
//         revalidatePath("/insurance/child pages");
//         revalidatePath("/");
//         return { success: true, index: serializedIndex };
//     }catch(error){
//         return { error: error.message || "An unexpected error occurred" };
//     }
// }



export async function updateInsuranceIndex(data) {
    try {
        await dbConnect();
        const index = await InsuranceIndex.findOne({}).lean();
        
        if (!index) {
            await InsuranceIndex.create(data);
        } else {
            await InsuranceIndex.findByIdAndUpdate(index._id, data);
        }

        const serializedIndex = {
            ...data,
            _id: index?._id?.toString(),
        };

        // 1. Revalidate the index management page
        revalidatePath("/life-backend/insurance-index");

        // 2. Revalidate the main category listing page (/insurance)
        revalidatePath("/insurance");

        // 3. Revalidate ALL subpages under insurance (e.g., /insurance/life-insurance)
        // By using the 'page' type on a dynamic segment, it clears the cache for those routes
        revalidatePath("/insurance/[subpage]", "page");

        // 4. Revalidate the Home page
        revalidatePath("/");

        return { success: true, index: serializedIndex };
    } catch (error) {
        return { error: error.message || "An unexpected error occurred" };
    }
}