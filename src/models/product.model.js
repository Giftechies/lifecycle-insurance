import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  services: [
    {
      image: {
        type: String,
        required: true,
      },
      imageAlt: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
      order: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  ],
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
