import mongoose from "mongoose";

const newsStudySchema = new mongoose.Schema(
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
    },
    shortTitle: {
      type: String,
      required: [true, "Short title is required"],
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

const NewsStudy =
  mongoose.models.NewsStudy || mongoose.model("NewsStudy", newsStudySchema);

export default NewsStudy;
