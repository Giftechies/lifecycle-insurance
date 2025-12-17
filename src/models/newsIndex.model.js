import mongoose from "mongoose";

const newsIndexSchema = new mongoose.Schema({
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

const NewsIndex =
  mongoose.models.NewsIndex || mongoose.model("NewsIndex", newsIndexSchema);

export default NewsIndex;
