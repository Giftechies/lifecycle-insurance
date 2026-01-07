import mongoose from "mongoose";

const InsuranceSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, "Heading is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  bannerImage: {
    type: String,
    required: [true, "Banner Image is required"],
  },
  imageAlt: {
    type: String,
    required: [true, "Image alt is required"],
  },
  content: {
    type: String,
  },
  slug: {
    type: String,
    required: [true, "Slug is required"],
    unique: true,
    trim: true,
    lowercase: true,
  },
  metaTitle: {
    type: String,
  },
  metaDescription: {
    type: String,
  },
  metaKeywords: {
    type: String,
  },
});

const Insurance =
  mongoose.models.Insurance || mongoose.model("Insurance", InsuranceSchema);

export default Insurance;
