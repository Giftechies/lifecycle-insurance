"use server";

import dbConnect from "@/lib/db";
import BusinessFunding from "@/models/business-funding.model";
import { revalidatePath } from "next/cache";

export async function getBusinessFunding() {
  try {
    await dbConnect();
    const businessFunding = await BusinessFunding.find({})
      .populate("category")
      .lean();
    const serializedBusinessFunding = businessFunding.map((item) => {
      return {
        ...item,
        _id: item?._id?.toString(),
        category: item?.category ? item.category._id.toString() : "",
        categoryName: item?.category ? item.category.heading : "",
      };
    });
    return { success: true, data: serializedBusinessFunding };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getBusinessFundingById(id) {
  try {
    await dbConnect();
    const businessFunding = await BusinessFunding.findById(id)
      .populate("category")
      .lean();
    if (!businessFunding) {
      return { success: false, error: "Business Funding not found" };
    }
    const serializedBusinessFunding = {
      ...businessFunding,
      _id: businessFunding?._id?.toString(),
      category: businessFunding?.category
        ? businessFunding.category._id.toString()
        : "",
      categoryName: businessFunding?.category
        ? businessFunding.category.heading
        : "",
    };
    return { success: true, data: serializedBusinessFunding };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function createBusinessFunding(formData) {
  try {
    await dbConnect();
    const businessFunding = await BusinessFunding.create(formData);
    revalidatePath("/aws-backend/business-funding");
    revalidatePath("/", "layout");
    return { success: true, data: businessFunding };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateBusinessFunding(id, data) {
  try {
    await dbConnect();
    const businessFunding = await BusinessFunding.findByIdAndUpdate(id, data);
    revalidatePath("/aws-backend/business-funding");
    revalidatePath("/", "layout");
    return { success: true, data: businessFunding };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteBusinessFunding(id) {
  try {
    await dbConnect();
    const businessFunding = await BusinessFunding.findByIdAndDelete(id);
    revalidatePath("/aws-backend/business-funding");
    revalidatePath("/", "layout");
    return { success: true, data: businessFunding };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// export async function getBusinessFundingBySlug(slug) {
//   try {
//     await dbConnect();
//     const businessFunding = await BusinessFunding.findOne({ slug })
//       .populate("category")
//       .lean();

//     if (!businessFunding) {
//       return { success: false, error: "Business Funding not found" };
//     }

//     const serializedBusinessFunding = {
//       ...businessFunding,
//       _id: businessFunding?._id?.toString(),
//       category: businessFunding?.category
//         ? businessFunding.category._id.toString()
//         : "",
//       categoryName: businessFunding?.category
//         ? businessFunding.category.heading
//         : "",
//       categorySlug: businessFunding?.category
//         ? businessFunding.category.slug
//         : "",
//     };

//     return { success: true, data: serializedBusinessFunding };
//   } catch (error) {
//     return { success: false, error: error.message };
//   }
// }

export async function getBusinessFundingBySlug(slug) {
  try {
    const data = await BusinessFunding.findOne({ slug }).lean();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getBusinessFundingByCategory(categorySlug) {
  try {
    await dbConnect();
    // First get the category by slug
    const { default: BusinessCategories } = await import(
      "@/models/business-categories.model"
    );
    const category = await BusinessCategories.findOne({
      slug: categorySlug,
    }).lean();

    if (!category) {
      return { success: false, error: "Category not found" };
    }

    // Then find all business fundings with that category ID
    const businessFundings = await BusinessFunding.find({
      category: category._id,
    }).lean();

    const serializedBusinessFundings = businessFundings.map((item) => {
      return {
        ...item,
        _id: item?._id?.toString(),
        category: item?.category?.toString(),
      };
    });

    return { success: true, data: serializedBusinessFundings };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
