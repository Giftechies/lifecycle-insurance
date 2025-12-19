"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import Product from "@/models/product.model";

export async function getProductData() {
  try {
    await dbConnect();
    const result = await Product.findOne().lean();
    if (!result) {
      return { success: true, data: null };
    }

    let migratedResult = { ...result };
    if (result.services && result.services.length > 0) {
      const needsMigration = result.services.some(
        (service) => typeof service.order === "undefined"
      );

      if (needsMigration) {
        migratedResult.services = result.services.map((service, index) => ({
          ...service,
          order: service.order !== undefined ? service.order : index,
        }));

        await Product.findByIdAndUpdate(result._id, {
          services: migratedResult.services,
        });
      }

      migratedResult.services.sort((a, b) => a.order - b.order);
    }

    const serializedResult = {
      ...migratedResult,
      _id: migratedResult._id.toString(),
    };
    return { success: true, data: serializedResult };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateProductData(data) {
  try {
    await dbConnect();

    const existingProduct = await Product.findOne();

    if (existingProduct) {
      await Product.findByIdAndUpdate(existingProduct._id, data);
    } else {
      await Product.create(data);
    }

    revalidatePath("/life-backend/products");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
