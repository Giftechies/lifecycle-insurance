"use server"

import dbConnect from "@/lib/db";
import CommercialFinance from "@/models/commercialFinance.model";
import { revalidatePath } from "next/cache";

export async function getCommercialFinances() {
    try {
        await dbConnect();
        const finances = await CommercialFinance.find({}).lean();
        const serializedFinances = finances.map((finance) => {
            return {
                ...finance,
                _id: finance?._id?.toString(),
            }
        })
        return { success: true, data: serializedFinances };
    } catch (error) {
          return { success: false, error: error.message || "An unexpected error occurred" };
    }
}

export async function createCommercialFinance(formData) {
    try {
        await dbConnect();
        await CommercialFinance.create(formData);
        revalidatePath("/life-backend/commercial-finance");
        revalidatePath(`/`,"layout");
        return { success: true };
    } catch (error) {
          return { success: false, error: error.message || "An unexpected error occurred" };
    }
}

export async function updateCommercialFinance(id, formData) {
    try {
        await dbConnect();
        await CommercialFinance.findByIdAndUpdate(id, formData);
        revalidatePath("/life-backend/commercial-finance");
        revalidatePath(`/`,"layout");
        return { success: true };
    } catch (error) {
          return { success: false, error: error.message || "An unexpected error occurred" };
    }
}

export async function deleteCommercialFinance(id) {
    try {
        await dbConnect();
        await CommercialFinance.findByIdAndDelete(id);
        revalidatePath("/life-backend/commercial-finance");
        revalidatePath(`/`,"layout");
        return { success: true };
    } catch (error) {
          return { success: false, error: error.message || "An unexpected error occurred" };
    }
}

export async function getCommercialFinanceById(id) {
    try {
        await dbConnect();
        const finance = await CommercialFinance.findById(id).lean();
        if (!finance) {
            return { success: false, error: "Commercial finance not found" };
        }
        const serializedFinance = {
            ...finance,
            _id: finance?._id?.toString(),
        }
        return {
            success: true,
            finance: serializedFinance
        }
    } catch (error) {
          return { success: false, error: error.message || "An unexpected error occurred" };
    }
}

export async function getEachCommercialFinance(slug) {
    try {
        await dbConnect();
        const finance = await CommercialFinance.findOne({ slug }).lean();
        if (!finance) {
            return { success: false, error: "Commercial finance not found" };
        }
        const serializedFinance = {
            ...finance,
            _id: finance?._id?.toString(),
        }
        return {
            success: true,
            finance: serializedFinance
        }
    } catch (error) {
          return { success: false, error: error.message || "An unexpected error occurred" };
    }
}