import mongoose from "mongoose";

const teamIndexSchema = new mongoose.Schema({
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

const TeamIndex =
  mongoose.models.TeamIndex || mongoose.model("TeamIndex", teamIndexSchema);

export default TeamIndex;
