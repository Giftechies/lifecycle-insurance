"use server"

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import CaseStudyIndex from "@/models/caseStudyIndex.model";

export async function getCaseStudyIndex(){
    try {
        await dbConnect();
        const result = await CaseStudyIndex.findOne().lean();
        const serializedResult = {
            ...result,
            _id: result?._id?.toString(),
        }
        return { success: true, data: serializedResult };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function updateCaseStudyIndex(data){
    console.log("updateCaseStudyIndex");
    try {
        await dbConnect();
        const index = await CaseStudyIndex.findOne({}).lean();
        if(!index){
            await CaseStudyIndex.create(data);
        }else{
            await CaseStudyIndex.findByIdAndUpdate(index._id, data);
        }
        revalidatePath("/case-studies");
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }   
}