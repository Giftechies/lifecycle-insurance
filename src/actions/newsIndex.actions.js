"use server"

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import NewsIndex from "@/models/newsIndex.model";

export async function getNewsIndex(){
    try {
        await dbConnect();
        const news = await NewsIndex.findOne().lean();
        const serializedNews = {
            ...news,
            _id: news?._id?.toString(),
        }
        return { success: true, data: serializedNews };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function updateNewsIndex(data){
    try {
        await dbConnect();
        const news = await NewsIndex.findOne({}).lean();
        if(!news){
            await NewsIndex.create(data);
        }else{
            await NewsIndex.findByIdAndUpdate(news._id, data);
        }
        revalidatePath("/aws-backend/news-index");
        revalidatePath("/news");
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}