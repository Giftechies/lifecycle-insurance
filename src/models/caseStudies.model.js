import mongoose from "mongoose";

const CaseStudySchema = new mongoose.Schema(
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
    date: {
      type: String,
      required: [true, "Date is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
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

const CaseStudy =
  mongoose.models.CaseStudy || mongoose.model("CaseStudy", CaseStudySchema);

export default CaseStudy;
