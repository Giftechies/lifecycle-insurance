import mongoose from "mongoose";

const businessFundingIndexSchema = new mongoose.Schema({
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

const BusinessFundingIndex =
  mongoose.models.BusinessFundingIndex ||
  mongoose.model("BusinessFundingIndex", businessFundingIndexSchema);

export default BusinessFundingIndex;
