import mongoose from "mongoose";

const mortgageIndexSchema = new mongoose.Schema({
  heading:{
    type:String,
  },
  image:{
    type:String,
  },
  bannerImage:{
    type:String,
  },
  slug:{
    type:String
  },
  content: {
    type: String,
    required: [true, "Content is required"],
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

const MortgageIndex =
  mongoose.models.MortgageIndex ||
  mongoose.model("MortgageIndex", mortgageIndexSchema);

export default MortgageIndex;
