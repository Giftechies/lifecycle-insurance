import dbConnect from "../lib/db";
import testimonialModel from "../models/testimonial.model";

export async function getTestimonial(){
    try {
        await dbConnect();
        const res = await testimonialModel.find({}).lean();
        return{
            success:true,
            data:res
        }
        
    } catch (error) {
        return {
            success:false,
            message:error.message || 'something went worng while getting gettestimonial.'
        }
        
    }
}

export async function createTestimonial(formdata){
    try {

         await dbConnect();

         const res = await testimonialModel.create({formdata}).lean();
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

export async function updateTestimonial(id,formdata){
    try {
        await dbConnect();
        const res = await testimonialModel.findByIdAndUpdate({_id:id},{formdata});
        return {
            success:true,
            data:res
        }
        
    } catch (error) {
        return{
            success:false,
            message:error.message || 'updation failed!!'
        }
        
    }
}