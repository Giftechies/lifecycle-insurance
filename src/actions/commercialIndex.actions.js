"use server"

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import CommercialFinanceIndex from "@/models/commercialFinanceIndex.model";

export async function getCommercialIndex() {
    try {
        await dbConnect();
        const index = await CommercialFinanceIndex.findOne({}).lean();
        const serializedIndex = {
            ...index,
            _id: index?._id?.toString(),
        };
        return { success: true, data: serializedIndex };
        
    } catch (error) {
        return { error: error.message || "An unexpected error occurred" };
}
}

export async function updateCommercialIndex(data){
    try {
        await dbConnect();
        const index = await CommercialFinanceIndex.findOne({}).lean();
        if(!index) {
            await CommercialFinanceIndex.create(data);
        }else{
            await CommercialFinanceIndex.findByIdAndUpdate(index._id, data);
        }
        const serializedIndex = {
            ...data,
            _id: index?._id?.toString(),
        };
        revalidatePath("/life-backend/commercial-index");
        revalidatePath("/commercial-finance");
        return { success: true, index: serializedIndex };
    } catch (error) {
        
    }
}