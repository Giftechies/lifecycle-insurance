import { Contact } from "lucide-react";
import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  designation: {
    type: String,
    required: [true, "Designation is required"],
  },
  contact: {
    type: String,
    required: [true, "Phone number is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  imageAlt: {
    type: String,
    required: [true, "Image alt is required"],
  },
});

const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);
export default Team;
