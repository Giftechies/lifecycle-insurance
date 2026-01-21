import mongoose from "mongoose";

const LogoSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false
    }
}, { timestamps: true });

export const Logo = mongoose.models.Logo || mongoose.model("Logo", LogoSchema);
