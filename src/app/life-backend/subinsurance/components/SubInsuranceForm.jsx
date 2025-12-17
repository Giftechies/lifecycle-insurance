"use client";

import SlugInput from "@/components/SlugInput";
import ImageInput from "@/lib/ImageUpload";
import MetaTags from "@/lib/MetaInput";
import RichTextEditor from "@/lib/TextEditor";
import { uploadPageFile } from "@/lib/uploadPageFile";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import PdfInput from "@/lib/PdfInput";
import {
  createSubInsurance,
  updateSubInsurance,
} from "@/actions/subInsurance.actions";

export default function SubInsuranceForm({ initialData, categories }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    heading: initialData?.heading || "",
    content: initialData?.content || "",
    shortContent: initialData?.shortContent || "",
    category: initialData?.category || "",
    image: initialData?.image || "",
    imageAlt: initialData?.imageAlt || "",
    slug: initialData?.slug || "",
    metaTitle: initialData?.metaTitle || "",
    metaDescription: initialData?.metaDescription || "",
    metaKeywords: initialData?.metaKeywords || "",
    pdf: initialData?.pdf || "",
    pdfAlt: initialData?.pdfAlt || "",
  });

  const handleChange = (field, value) => {
    setFormData((formData) => ({ ...formData, [field]: value }));
  };

  const handleImageChange = (url) => {
    setFormData((formData) => ({ ...formData, image: url }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      if (initialData) {
        await updateSubInsurance(initialData._id, formData);
        toast.success("Subinsurance updated successfully!");
      } else {
        await createSubInsurance(formData);
        toast.success("Subinsurance created successfully!");
      }
      router.push("/aws-backend/subinsurance");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-container grid grid-cols-2 gap-6"
    >
      <div>
        <label htmlFor="heading">Heading</label>
        <input
          type="text"
          id="heading"
          value={formData.heading}
          onChange={(e) => handleChange("heading", e.target.value)}
          placeholder="Enter heading"
        />
        <SlugInput
          heading={formData.heading}
          value={formData.slug}
          onChange={(value) => handleChange("slug", value)}
        />

        <label htmlFor="category">Select Mortgage Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={(e) => handleChange("category", e.target.value)}
          className="w-full text-sm mb-6 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        >
          <option value="">Select category</option>
          {categories?.map((category) => (
            <option key={category._id} value={category.slug}>
              {category.heading}
            </option>
          ))}
        </select>

        <label htmlFor="shortContent">Short Content</label>
        <textarea type="text" value={formData.shortContent} onChange={(e) => handleChange("shortContent", e.target.value)} placeholder="Enter short content" />

        <label>Content</label>
        <RichTextEditor
          onChange={(value) => handleChange("content", value)}
          value={formData.content}
        />
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
          {initialData ? "Update Sub Insurance" : "Create Sub Insurance"}
        </button>
      </div>
    </form>
  );
}
