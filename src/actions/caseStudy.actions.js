"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import CaseStudy from "@/models/caseStudies.model";

export async function createCaseStudy(formData) {
  try {
    await dbConnect();
    await CaseStudy.create(formData);
   revalidatePath("/");
    revalidatePath("/life-backend/case-study")
    revalidatePath("/case-study");
    revalidatePath(`/case-study/${slug}`);
    return { success: true };
  } catch (error) {
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function getCaseStudies(limit) {
  try {
    await dbConnect();
    let studies;
    if (limit) {
      studies = await CaseStudy.find({})
        .lean()
        .sort({ createdAt: -1 })
        .limit(limit);
    } else {
      studies = await CaseStudy.find({}).lean().sort({ createdAt: -1 });
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
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function getCaseStudyById(id) {
  try {
    await dbConnect();
    const study = await CaseStudy.findById(id).lean();
    if (!study) {
      return { success: false, error: "Case study not found" };
    }
    return {
      success: true,
      study: {
        ...study,
        _id: study?._id?.toString(),
        createdAt: study?.createdAt?.toISOString(),
        updatedAt: study?.updatedAt?.toISOString(),
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function updateCaseStudy(id, data) {
  try {
    await dbConnect();
    await CaseStudy.findByIdAndUpdate(id, data);
    revalidatePath("/");
    revalidatePath("/life-backend/case-study");
    revalidatePath("/life-backend/case-study/edit/${id}");
    revalidatePath("/case-study");
    revalidatePath(`/case-study/${slug}`);
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function deleteCaseStudy(id) {
  try {
    await dbConnect();
    await CaseStudy.findByIdAndDelete(id);
  revalidatePath("/");
    revalidatePath("/life-backend/case-study");
    revalidatePath("/life-backend/case-study/edit/${id}");
    revalidatePath("/case-study");
    revalidatePath(`/case-study/${slug}`);
    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    } else {
      return { success: false, error: "An unexpected error occurred" };
    }
  }
}

export async function getCaseStudyBySlug(slug) {
  try {
    await dbConnect();
    const study = await CaseStudy.findOne({ slug }).lean();
    const serializedStudy = {
      ...study,
      _id: study?._id?.toString(),
      createdAt: study?.createdAt?.toISOString(),
      updatedAt: study?.updatedAt?.toISOString(),
    };
    return { success: true, study: serializedStudy };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function getOtherCaseStudies(slug, limit) {
  try {
    await dbConnect();
    const studies = await CaseStudy.find(
      { slug: { $ne: slug } },
      { heading: 1, slug: 1, image: 1, imageAlt: 1, _id: 0 }
    )
      .limit(limit)
      .lean();
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
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}
