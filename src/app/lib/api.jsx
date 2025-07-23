import axios from "axios";

const BASE_URL = "http://192.168.1.6/ramanlaravel/public/api";

/** Get Category Listing by Slug (insurance, mortgage, case-study) */
export const getCategoryPages = async (categorySlug) => {
  const res = await axios.get(`${BASE_URL}/pages/${categorySlug}`);
  return res.data || [];
};

/** Get Detail Page by Slug (like life-insurance, refinance-mortgage, etc.) */
export const getDetailPageBySlug = async (slug) => {
  const res = await axios.get(`${BASE_URL}/pages/${slug}`);
  return res.data || null;
};

export const HomeData = async (slug) => {
  const res = await axios.get(`${BASE_URL}/${slug}`);
  return res.data || null;
};
