"use server";
import { revalidatePath } from "next/cache";
import dbConnect from "../lib/db";
import NumberModel from "../models/number.model";

export async function getNumber(){
    try {

        await dbConnect();
        const numberData=await NumberModel.findOne({}).lean();
        return{data:numberData} 
    } catch (error) {
        return{success:false,message:error.message}
        
    }
};

export async function updateandCreateNumber(formData){
    try {
        await dbConnect();
        const numberData = await NumberModel.findOne({});
        if(numberData){
            await numberData.updateOne(formData);
            revalidatePath('/life-backend/number');
         
        }else{
            await NumberModel.create(formData);
            revalidatePath('/life-backend/number');
        }

        return{success:true,message:'Operation completed successfully'}

        
    } catch (error) {
        return{success:false,message:error.message}
        
    }
}