
import mongoose from "mongoose";


const testimonailSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    review:{
        type:String,
        required:[true,"Review is required"]
    },
    rate:{
        type:String,
    }
},{timestamps:true})

const testimonialModel = mongoose.models.testimonial || mongoose.model("testimonial",testimonailSchema)

export  default testimonialModel;