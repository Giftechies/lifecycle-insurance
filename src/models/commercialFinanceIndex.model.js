import mongoose from "mongoose";

const commercialFinanceIndexSchema = new mongoose.Schema({
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

const CommercialFinanceIndex =
  mongoose.models.CommercialFinanceIndex ||
  mongoose.model("CommercialFinanceIndex", commercialFinanceIndexSchema);

export default CommercialFinanceIndex;
