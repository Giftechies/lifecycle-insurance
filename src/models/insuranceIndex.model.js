import mongoose from "mongoose";

const insuranceIndexSchema = new mongoose.Schema({
  heading:{
    type:String,
    required:[true,"Heading is required"]
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  slug:{
    type:String,
    required:[true,"Slug is required"]
  },
  image:{
    type:String,
    required: [true, "Image is required"],
  },
  metaTitle: {
    type: String,
    required: [true, "Meta Title is required"],
  },
  metaDescription: {
    type: String,
    required: [true, "Meta Description is required"],
  },
  metaKeywords: {
    type: String,
    required: [true, "Meta Keywords is required"],
  },
});

const InsuranceIndex =
  mongoose.models.InsuranceIndex ||
  mongoose.model("InsuranceIndex", insuranceIndexSchema);

export default InsuranceIndex;
