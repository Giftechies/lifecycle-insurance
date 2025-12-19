"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import NewsStudy from "@/models/newsStudy.model";

export async function createNewsStudy(formData) {
  try {
    await dbConnect();
    await NewsStudy.create(formData);
    revalidatePath("/life-backend/news-study");
    revalidatePath("/");
    revalidatePath("/news");
    revalidatePath("/news/[slug]");
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unexpected error occurred" };
  }
}

export async function getNewsStudies(limit) {
  try {
    await dbConnect();
    let studies;
    if (limit) {
      studies = await NewsStudy.find({})
        .lean()
        .sort({ createdAt: -1 })
        .limit(limit);
    } else {
      studies = await NewsStudy.find({}).lean().sort({ createdAt: -1 });
    }
    const serializedStudies = studies.map((study) => {
      return {
        ...study,
        _id: study?._id?.toString(),
        createdAt: study?.createdAt?.toISOString(),
        updatedAt: study?.updatedAt?.toISOString(),
      };
    });
    return { success: true, studies: serializedStudies };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unexpected error occurred" };
  }
}

export async function deleteNewsStudy(id) {
  try {
    await dbConnect();
    await NewsStudy.findByIdAndDelete(id);
    revalidatePath("/life-backend/news-study");
    revalidatePath("/");
    revalidatePath("/news");
    revalidatePath("/news/[slug]");
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unexpected error occurred" };
  }
}

export async function updateNewsStudy(id, data) {
  try {
    await dbConnect();
    await NewsStudy.findByIdAndUpdate(id, data);
    revalidatePath("/life-backend/news-study");
    revalidatePath("/");
    revalidatePath("/news");
    revalidatePath("/news/[slug]");
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unexpected error occurred" };
  }
}

export async function getNewsStudyById(id) {
  try {
    await dbConnect();
    const study = await NewsStudy.findById(id).lean();
    if (!study) {
      return { error: "News study not found" };
    }
    const serializedStudy = {
      ...study,
      _id: study?._id?.toString(),
      createdAt: study?.createdAt?.toISOString(),
      updatedAt: study?.updatedAt?.toISOString(),
    };
    return { success: true, study: serializedStudy };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unexpected error occurred" };
  }
}

export async function getNewsStudyBySlug(slug) {
  try {
    await dbConnect();
    const study = await NewsStudy.findOne({ slug }).lean();
    if (!study) {
      return { error: "News study not found" };
    }
    const serializedStudy = {
      ...study,
      _id: study?._id?.toString(),
      createdAt: study?.createdAt?.toISOString(),
      updatedAt: study?.updatedAt?.toISOString(),
    };
    return { success: true, study: serializedStudy };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unexpected error occurred" };
  }
}

export async function getOtherPosts(slug, limit) {
  try {
    await dbConnect();
    const studies = await NewsStudy.find(
      { slug: { $ne: slug } },
      { heading: 1, slug: 1, image: 1, imageAlt: 1, _id: 0 }
    )
      .limit(limit)
      .lean();
    if (!studies) {
      return { error: "Studies not found" };
    }
    const serializedStudies = studies.map((study) => {
      return {
        ...study,
        _id: study?._id?.toString(),
        createdAt: study?.createdAt?.toISOString(),
        updatedAt: study?.updatedAt?.toISOString(),
      };
    });
    return { success: true, otherPosts: serializedStudies };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "An unexpected error occurred" };
  }
}
