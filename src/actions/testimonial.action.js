'use server'
import dbConnect from "../lib/db";
import testimonialModel from "../models/testimonial.model";
import { revalidatePath } from "next/cache";

export async function getTestimonial() {
    try {
        await dbConnect();
        const res = await testimonialModel.find({}).lean();
        
        // Convert Mongoose types (ObjectId, Dates) to plain strings
        const sanitizedData = res.map(doc => ({
            ...doc,
            id: doc._id.toString(), // Convert Buffer/ObjectId to string
            createdAt: doc.createdAt?.toISOString(),
            updatedAt: doc.updatedAt?.toISOString(),
        }));

        return {
            success: true,
            data: sanitizedData
        };
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Something went wrong while getting testimonials.'
        };
    }
}

export async function createTestimonial(formdata){
    try {

         await dbConnect();

         const res = await testimonialModel.create(formdata);
         revalidatePath('/life-backend/testimonial')
         revalidatePath('/','layout')
         return{
            success:true,
            data:res
         }
        
    } catch (error) {
        return{
            success:false,
            message:error.message || "Testimonial creation fail!!"
        }
        
    }
}

export async function deleteTestimonial(id){
    try {
       await dbConnect();
       await testimonialModel.findByIdAndDelete({_id:id})
        revalidatePath('/life-backend/testimonial')
         revalidatePath('/','layout')
       return{
        success:true,
        message:'Testimonial delete successfully!'
       }
        
    } catch (error) {
        return {
            success:false,
            message:error.message || "Testimonial deletation fail!!"
        }
        
    }
}

export async function updateTestimonial(id, formdata) {
    try {
        await dbConnect();
        const res = await testimonialModel.findByIdAndUpdate(
            id, 
            formdata, 
            { new: true, runValidators: true }
        ).lean();

        if (!res) {
            throw new Error("Testimonial not found");
        }
         revalidatePath('/life-backend/testimonial')
         revalidatePath('/','layout')

        return {
            success: true,
            data: JSON.parse(JSON.stringify(res)) // Clean for Client Components
        };
        
    } catch (error) {
        return {
            success: false,
            message: error.message || 'Updation failed!!'
        };
    }
}