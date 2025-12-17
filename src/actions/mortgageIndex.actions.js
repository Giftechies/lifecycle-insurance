"use server"

import dbConnect from "@/lib/db";
import MortgageIndex from "@/models/mortgageIndex.model";
import { revalidatePath } from "next/cache";

export async function getMortgageIndex() {
    try {
        await dbConnect();
        const mortgageIndex = await MortgageIndex.findOne().lean();
        const serializedMortgageIndex = {
            ...mortgageIndex,
            _id: mortgageIndex?._id?.toString(),
        };
        return { success: true, mortgageIndex: serializedMortgageIndex };
    } catch (error) {
            return { error: error.message || "An unexpected error occurred" };
    }
}

export async function updateMortgageIndex(data) {
    try {
        await dbConnect();
        const mortgageIndexContent = await MortgageIndex.findOne({}).lean();
        if(!mortgageIndexContent) {
            await MortgageIndex.create(data);
        }else{
            await MortgageIndex.findByIdAndUpdate(mortgageIndexContent._id, data);
        }   
        const serializedMortgageIndex = {
            ...data,
            _id: mortgageIndexContent?._id?.toString(),
        };
        revalidatePath("/aws-backend/mortgage-index");
        revalidatePath("/mortgages");
        return { success: true, mortgageIndex: serializedMortgageIndex };
    } catch (error) {
            return { error: error.message };
    }
}