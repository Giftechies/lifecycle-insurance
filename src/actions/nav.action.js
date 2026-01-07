"use server";

import dbConnect from "@/lib/db";
import SubInsurance from "../models/subInsurance.model";
import SubMortgage from "../models/subMortgage.model";
import CaseStudy from "../models/caseStudies.model";

export async function getNavData() {
  try {
    await dbConnect();

    const [subInsuranceData, subMortgageData, caseStudyData] =
      await Promise.all([
        SubInsurance.find()
          .select("heading slug")
          .sort({ order: 1 })
          .lean(),

        SubMortgage.find()
          .select("heading slug")
          .sort({ order: 1 })
          .lean(),

        CaseStudy.find()
          .select("heading slug")
          .sort({ heading: 1 })
          .lean(),
      ]);

    const serialize = (data) =>
      data.map((item) => ({
        id: item._id.toString(),
        heading: item.heading,
        slug: item.slug,
      }));

    return {
      success: true,
      subInsurance: serialize(subInsuranceData),
      subMortgage: serialize(subMortgageData),
      caseStudies: serialize(caseStudyData),
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
