"use server";

import dbConnect from "@/lib/db";
import SubInsurance from '../models/subInsurance.model'
import subMortgage from '../models/subMortgage.model'
import CaseStudy from "../models/caseStudies.model"
export async function getNavData(){
    try {
        await dbConnect();
        const [subInsuranceData,subMortgageData,caseStudyData] = await Promise.all([
            SubInsurance.find().sort({ order: 1 }).lean(),
            subMortgage.find().sort({ order: 1 }).lean(),
            CaseStudy.find().sort({ heading: 1 }).lean()
        ]);
        const serializeData = (data) => {
            return data.map((item) => ({
                ...item,
                _id: item?._id?.toString(),
            }));
        };
        return {
            success: true,
            subMortgage: serializeData(subMortgageData),
            subInsurance: serializeData(subInsuranceData),
            caseStudies: serializeData(caseStudyData)
        };
      

        
    } catch (error) {
        return { success: false, error: error.message };
    }
}