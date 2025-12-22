import mongoose from "mongoose";

const teamIndexSchema = new mongoose.Schema({
  heading: {
    type: String,
  },
  boxheading: {
    type: String,
  },
  boxcontent: {
    type: String,
  },
  image: {
    type: String,
  },
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
