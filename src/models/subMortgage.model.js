import mongoose from "mongoose";

const subMortgageSchema = new mongoose.Schema(
  {
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
    
  },
  { timestamps: true }
);

const SubMortgage =
  mongoose.models.SubMortgage ||
  mongoose.model("SubMortgage", subMortgageSchema);
export default SubMortgage;
