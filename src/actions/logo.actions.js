'use server'
import { revalidatePath } from "next/cache";
import dbConnect from "../lib/db"
import { Logo } from "../models/logo.model"

// Helper to sanitize data for Next.js Client Components
const stringifyData = (obj) => JSON.parse(JSON.stringify(obj));

export async function getLogos() {
    try {
        await dbConnect()
        const res = await Logo.find().sort({ createdAt: -1 }).lean()
        
        return {
            data: stringifyData(res),
            success: true,
            message: "Logos fetched successfully"
        }
    } catch (error) {
        return { error: "Failed to fetch logos", success: false };
    }
};

export async function createLogo(data) {
    try {
        await dbConnect();
        const newLogo = new Logo(data);
        const savedLogo = await newLogo.save();
        
        revalidatePath("/life-backend/logo")
        revalidatePath("/")

        return {
            data: stringifyData(savedLogo),
            success: true,
            message: "Logo created successfully"
        };
    } catch (error) {
        console.error(error);
        return { error: "Failed to create logo", success: false };
    }
}


export async function createManyLogos(logosArray) {
    try {
        await dbConnect();
        // logosArray should be [{ imageUrl: '...', title: '...' }, ...]
        const savedLogos = await Logo.insertMany(logosArray);
        
        revalidatePath("/life-backend/logo")
        revalidatePath("/")

        return {
            data: stringifyData(savedLogos),
            success: true,
            message: `${savedLogos.length} logos added successfully`
        };
    } catch (error) {
        console.error(error);
        return { error: "Failed to add multiple logos", success: false };
    }
}


export async function deleteLogo(id) {
    try {
        await dbConnect();
        await Logo.findByIdAndDelete(id);
        
        revalidatePath("/life-backend/logo")
        revalidatePath("/")

        return {
            success: true,
            message: "Logo deleted successfully"
        };
    } catch (error) {
        return { error: "Failed to delete logo", success: false };
    }
}
