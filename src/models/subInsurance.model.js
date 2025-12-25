import mongoose from "mongoose";

const subInsuranceSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, "Heading is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  imageAlt: {
    type: String,
    required: [true, "Image alt is required"],
  },
  content: {
    type: String,
  },
  content1: {
    type: String,
  },
  shortContent: {
    type: String,
    required: [true, "Short content is required"],
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
  // pdf: {
  //   type: String,
  // },
  // pdfAlt: {
  //   type: String,
  // },
  // category: {
  //   type: String,
  // },
});

const SubInsurance =
  mongoose.models.SubInsurance ||
  mongoose.model("SubInsurance", subInsuranceSchema);

export default SubInsurance;
