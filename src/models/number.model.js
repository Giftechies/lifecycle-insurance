import mongoose from "mongoose";

const NumberSchema = new mongoose.Schema({
    box1content: { type: String, required:[true,'Box 1 Content is required'] },
    box2content: { type: String, required:[true,'Box 2 Content is required'] },
    box3content: { type: String, required:[true,'Box 3 Content is required'] },
    box4content: { type: String, required:[true,'Box 4 Content is required'] },
    box1number: { type: String, required:[true,'Box 1 Number is required'] },
    box2number: { type: String, required:[true,'Box 2 Number is required'] },
    box3number: { type: String, required:[true,'Box 3 Number is required'] },
    box4number: { type: String, required:[true,'Box 4 Number is required'] },
    box1image: { type: String, required:[true,'Box 1 Image is required'] },
    box2image: { type: String, required:[true,'Box 2 Image is required'] },
    box3image: { type: String, required:[true,'Box 3 Image is required'] },
    box4image: { type: String, required:[true,'Box 4 Image is required'] },
    heading: { type: String, required:[true,'Heading is required'] },
    image:{type:String,required:[true,"Image is required"]},
}, { timestamps: true });

const NumberModel = mongoose.models.Number || mongoose.model("Number", NumberSchema);
export default NumberModel;
