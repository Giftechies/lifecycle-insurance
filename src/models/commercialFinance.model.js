import mongoose from "mongoose";

const commercialFinanceSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, "Heading is required"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  shortContent: {
    type: String,
    required: [true, "Short content is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  imageAlt: {
    type: String,
    required: [true, "Image alt is required"],
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

const CommercialFinance =
  mongoose.models.CommercialFinance ||
  mongoose.model("CommercialFinance", commercialFinanceSchema);
export default CommercialFinance;
