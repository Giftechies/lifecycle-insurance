'use server'
import  dbConnect  from "../lib/db"
import OneMore from "../models/oneMore.model"


export  async function getOneMore() {
    try {
        await dbConnect();
        const oneMoreData = await OneMore.findOne({}).lean();
        return { data:JSON.parse(JSON.stringify(oneMoreData)) };
        
    } catch (error) {
        return { error: error.meggage || 'Error fetching One More section data' };
        
    }
    
}

export async function getUpdateandCreateOneMore(formData) {
    try {
        await dbConnect();
        let oneMoreData = await OneMore.findOne({}).lean();
        if (oneMoreData) {
            await OneMore.updateOne({}, formData);
        } else {
            await OneMore.create(formData);
        }
        return { success: true };
    } catch (error) {
        return { error: error.meggage || 'Error updating One More section data' };
        
    }
}