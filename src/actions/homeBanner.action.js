'use server'
import dbConnect from "../lib/db"
import { HomeBanner } from "../models/home-banner.model"

// Helper to sanitize data for Next.js Client Components
const stringifyData = (obj) => JSON.parse(JSON.stringify(obj));

export async function getHomeBanner() {
    try {
        await dbConnect()
        const res = await HomeBanner.findOne().lean()
        
        if (!res) {
            return { 
                data: null, // Changed from [] to null since findOne returns an object
                success: true, 
                message: "No Home Banner data found" 
            }
        }
        
        return {
            data: stringifyData(res), // ✅ Convert ObjectId and Dates to strings
            success: true,
            message: "Home Banner data fetched successfully"
        }
    } catch (error) {
        return { error: "Failed to fetch home banner data", success: false };
    }
};

export async function createOrUpdateHomeBanner(data) {
    try {
        await dbConnect();
        const existingBanner = await HomeBanner.findOne();
        
        let result;
        if (existingBanner) {
            result = await HomeBanner.findByIdAndUpdate(
                existingBanner._id, 
                data, 
                { new: true }
            ).lean();
        } else {
            const newBanner = new HomeBanner(data);
            const savedBanner = await newBanner.save();
            result = savedBanner.toObject(); 
        }

        return {
            data: stringifyData(result),
            success: true,
            message: existingBanner ? "Home Banner updated successfully" : "Home Banner created successfully"
        };
    } catch (error) {
        console.error(error);
        return { error: "Failed to create or update home banner", success: false };
    }
}