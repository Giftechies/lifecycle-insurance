import mongoose from "mongoose";

const insuranceIndexSchema = new mongoose.Schema({
  content: {
    type: String,
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

const InsuranceIndex =
  mongoose.models.InsuranceIndex ||
  mongoose.model("InsuranceIndex", insuranceIndexSchema);

export default InsuranceIndex;
