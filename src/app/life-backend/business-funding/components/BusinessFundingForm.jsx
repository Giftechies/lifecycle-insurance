"use client";

import {
  createBusinessFunding,
  updateBusinessFunding,
} from "@/actions/businessFunding.actions";
import SlugInput from "../../../../components/Backend/SlugInput";
import ImageInput from "@/lib/ImageUpload";
import MetaTags from "@/lib/MetaInput";
import PdfInput from "@/lib/PdfInput";
import RichTextEditor from "@/lib/TextEditor";
import { uploadPageFile } from "@/lib/uploadPageFile";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function BusinessFundingForm({ initialData, categories }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    heading: initialData?.heading || "",
    content: initialData?.content || "",
    shortContent: initialData?.shortContent || "",
    image: initialData?.image || "",
    imageAlt: initialData?.imageAlt || "",
    slug: initialData?.slug || "",
    metaTitle: initialData?.metaTitle || "",
    metaDescription: initialData?.metaDescription || "",
    metaKeywords: initialData?.metaKeywords || "",
    pdf: initialData?.pdf || "",
    pdfAlt: initialData?.pdfAlt || "",
    category: initialData?.category || "",
  });

  const handleChange = (field, value) => {
    setFormData((formData) => ({ ...formData, [field]: value }));
  };

  const handleImageChange = (url) => {
    setFormData((formData) => ({ ...formData, image: url }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialData) {
        await updateBusinessFunding(initialData._id, formData);
        toast.success("Business Funding updated successfully!");
      } else {
        await createBusinessFunding(formData);
        toast.success("Business Funding created successfully!");
      }
      router.push("/life-backend/business-funding");
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-container grid md:grid-cols-2 gap-6"
    >
      <div>
        <label htmlFor="heading">Heading</label>
        <input
          type="text"
          id="heading"
          value={formData.heading}
          onChange={(e) => handleChange("heading", e.target.value)}
          placeholder="Enter Heading"
        />
        <SlugInput
          heading={formData.heading}
          value={formData.slug}
          onChange={(value) => handleChange("slug", value)}
        />

        <label htmlFor="shortContent">Short Content</label>
        <textarea
          type="text"
          id="shortContent"
          value={formData.shortContent}
          onChange={(e) => handleChange("shortContent", e.target.value)}
          placeholder="Enter Short Content"
        />

        <label htmlFor="Content">Content</label>
        <RichTextEditor
          onChange={(value) => handleChange("content", value)}
          value={formData.content}
        />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={formData.category}
          onChange={(e) => handleChange("category", e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select a category</option>
          {categories?.map((category) => (
            <option key={category._id} value={category._id}>
              {category.heading}
            </option>
          ))}
        </select>
      </div>
      <div>
        <ImageInput
          uploadAction={(file) => uploadPageFile(file, "image")}
          onChange={handleImageChange}
          initialImage={formData.image || ""}
        />
        <label htmlFor="imageAlt">Image Alt</label>
        <input
          type="text"
          id="imageAlt"
          name="imageAlt"
          value={formData.imageAlt}
          onChange={(e) => handleChange("imageAlt", e.target.value)}
          placeholder="Enter Image Alt"
        />

        <MetaTags
          metaTitle={formData.metaTitle}
          metaDescription={formData.metaDescription}
          metaKeywords={formData.metaKeywords}
          onChange={(field, value) => handleChange(field, value)}
        />

        <PdfInput
          uploadAction={(file) => uploadPageFile(file, "pdf")}
          onChange={(value) => handleChange("pdf", value)}
        />
        <label htmlFor="pdfAlt" className="mt-4">
          Pdf Alt
        </label>
        <input
          type="text"
          id="pdfAlt"
          name="pdfAlt"
          value={formData.pdfAlt}
          onChange={(e) => handleChange("pdfAlt", e.target.value)}
          placeholder="Enter Pdf Alt"
        />

        <button type="submit">
          {initialData ? "Update Business Funding" : "Create Business Funding"}
        </button>
      </div>
    </form>
  );
}
