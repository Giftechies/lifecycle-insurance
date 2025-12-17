import mongoose from "mongoose";

const mortgageSchema = new mongoose.Schema({
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

const Mortgage =
  mongoose.models.Mortgage || mongoose.model("Mortgage", mortgageSchema);

export default Mortgage;
