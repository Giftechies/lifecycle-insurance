import 'server-only'
import InsuranceIndex from "@/models/insuranceIndex.model";
import SubMortgage from "@/models/subMortgage.model";
import dbConnect from "@/lib/db";
import SubInsurance from "../models/subInsurance.model";
import MortgageIndex from "@/models/mortgageIndex.model";

export async function getSubInsurance() {
  try {
    await dbConnect();
    const data = await SubInsurance.find().sort({ heading:1 }).lean();
    const serializedData = data.map((item) => {
      return {
        ...item,
        _id: item?._id?.toString(),
      };
    });
    return { success: true, data: serializedData };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getSubMortgage() {
  try {
    await dbConnect();
    const subMortgages = await SubMortgage.find({}).lean();
    const serializedSubMortgages = subMortgages.map((subMortgage) => {
      return {
        ...subMortgage,
        _id: subMortgage?._id?.toString(),
      };
    });
    return { success: true, data: serializedSubMortgages };
  } catch (error) {
    return { success: false, error: error.message };
  }
}



export async function getMortgageIndex() {
    try {
        await dbConnect();
        const mortgageIndex = await MortgageIndex.findOne().lean();
        const serializedMortgageIndex = {
            ...mortgageIndex,
            _id: mortgageIndex?._id?.toString(),
        };
        return { success: true, mortgageIndex: serializedMortgageIndex };
    } catch (error) {
            return { error: error.message || "An unexpected error occurred" };
    }
}


export async function getInsuranceIndex() {
  try {
    await dbConnect();

    const indexData = await InsuranceIndex
      .findOne()
      .lean();

    // ✅ FIX: handle empty collection safely
    if (!indexData) {
      return { success: false, data: null };
    }

    const serializedIndex = {
      ...indexData,
      _id: indexData._id.toString(),
    };

    return { success: true, data: serializedIndex };

  } catch (error) {
    return {
      success: false,
      error: error?.message || "An unexpected error occurred",
    };
  }
}


export async function getSubMortgageBySlug(slug) {
  try {
    await dbConnect();
    const bannerImage = await MortgageIndex.findOne().select('bannerImage').lean();
    const subMortgage = await SubMortgage.findOne({ slug:slug }).lean();
    if (!subMortgage) {
      return { success: false, error: "SubMortgage not found" };
    }
 
    return { success: true, data: {...subMortgage,bannerImage:bannerImage.bannerImage} };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getSubInsuranceBySlug(slug) {
  try {
    await dbConnect();
    const bannerImage = await InsuranceIndex.findOne().select('bannerImage').lean();
    const subInsurance = await SubInsurance.findOne({ slug: slug }).lean();
    if (!subInsurance) {
      return { success: false, error: "SubInsurance not found" };
    }
    console.log('subInn',{...subInsurance,bannerImage:bannerImage.bannerImage});
    return { success: true, data: {...subInsurance,bannerImage:bannerImage.bannerImage} };
  } catch (error) {
    return { success: false, error: error.message };
  }
}