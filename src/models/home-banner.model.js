import mongoose from "mongoose";

const HomeBannerSchema = new mongoose.Schema({
    title: { 
        type: String,
         required:[ true, "Title is required"]
         },
    boxtitle1: { 
        type: String,
         required:[ true, "Box Title 1 is required"]
    },
    boxtitle2: { 
        type: String,
         required:[ true, "Box Title 2 is required"]
    },
    boxtitle3: { 
        type: String,
         required:[ true, "Box Title 3 is required"]  
    },
    boximage1: { 
        type: String,
        required:[ true, "Box Image 1 is required"]  
    },
    boximage2: {  
        type: String,
        required:[ true, "Box Image 2 is required"]  
    },  
    boximage3: {  
        type: String,
        required:[ true, "Box Image 3 is required"]  
    },  
}, { timestamps: true });

export const HomeBanner = mongoose.models.HomeBanner || mongoose.model("HomeBanner", HomeBannerSchema);