import mongoose from "mongoose";

const caseStudyIndexSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  heading: {
    type: String,
  },
  image: {
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

const CaseStudyIndex =
  mongoose.models.CaseStudyIndex ||
  mongoose.model("CaseStudyIndex", caseStudyIndexSchema);

export default CaseStudyIndex;
