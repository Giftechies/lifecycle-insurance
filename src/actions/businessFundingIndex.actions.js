"use server"

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import BusinessFundingIndex from "@/models/businessFunding.model";

export async function getBusinessFundingIndex() {
    try {
        await dbConnect();
        const index = await BusinessFundingIndex.findOne({}).lean();
        const serializedIndex = {
            ...index,
            _id: index?._id?.toString(),
        }
        if (!index) {
            return { success: false, error: "Index not found" };
        }
        return { success: true, data: serializedIndex };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function updateBusinessFundingIndex(data){
    try{
        await dbConnect();
        const index = await BusinessFundingIndex.findOne({}).lean();
        if(!index) {
            await BusinessFundingIndex.create(data);
        }else{
            await BusinessFundingIndex.findByIdAndUpdate(index._id, data);
        }
        const serializedIndex = {
            ...data,
            _id: index?._id?.toString(),
        }
        revalidatePath("/life-backend/business-funding-index");
        revalidatePath("/business-funding");
        return { success: true, index: serializedIndex };
    } catch (error) {
        return { success: false, error: error.message };
    }
}