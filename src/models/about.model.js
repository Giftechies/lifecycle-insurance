import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  imageAlt: {
    type: String,
    required: [true, "Image alt is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  points: [
    {
      text: {
        type: String,
        required: true,
      },
      order: {
        type: Number,
        required: true,
      },
    },
  ],
});

const About = mongoose.models.About || mongoose.model("About", AboutSchema);
export default About;
