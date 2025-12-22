"use client";

import SlugInput from "../../../../components/Backend/SlugInput";
import ImageInput from "@/lib/ImageUpload";
import MetaTags from "@/lib/MetaInput";
import RichTextEditor from "@/lib/TextEditor";
import { uploadPageFile } from "@/lib/uploadPageFile";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  createSubMortgage,
  updateSubMortgage,
} from "@/actions/subMortgage.actions";
import PdfInput from "@/lib/PdfInput";

export default function SubMortgageForm({ initialData,  }) {
  const router = useRouter();
  // console.log('categories',categories)
  const [formData, setFormData] = useState({
    heading: initialData?.heading || "",
    content: initialData?.content || "",
    shortContent: initialData?.shortContent || "",
    image: initialData?.image || "",
    imageAlt: initialData?.imageAlt || "",
    slug: initialData?.slug || "",
    // pdf: initialData?.pdf || "",
    // pdfAlt: initialData?.pdfAlt || "",
    metaTitle: initialData?.metaTitle || "",
    metaDescription: initialData?.metaDescription || "",
    metaKeywords: initialData?.metaKeywords || "",
  });

  const handleChange = (field, value) => {
    setFormData((formData) => ({ ...formData, [field]: value }));
  };

  const handleImageChange = (url) => {
    setFormData((formData) => ({ ...formData, image: url }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (initialData) {
      const result = await updateSubMortgage(initialData._id, formData);
      if (result.success) {
        toast.success("Submortgage updated successfully!");
      } else {
        toast.error(result.error);
      }
    } else {
      const result = await createSubMortgage(formData);
      if (result.success) {
        toast.success("Submortgage created successfully!");
      } else {
        toast.error(result.error);
      }
    }
    router.push("/life-backend/submortgage");
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
          value={formData?.heading}
          onChange={(e) =>
            setFormData({ ...formData, heading: e.target.value })
          }
          placeholder="Enter Heading"
        />
        <SlugInput
          heading={formData?.heading}
          value={formData?.slug}
          onChange={(value) => handleChange("slug", value)}
        />
        {/* <label htmlFor="category">Select Mortgage Category</label> */}
        {/* <select
          id="category"
          name="category"
          value={formData?.category}
          onChange={(e) => handleChange("category", e.target.value)}
        >
          <option value="">Select category</option>
          {categories.map((category) => (
            <option key={category._id} value={category.slug}>
              {category.heading}
            </option>
          ))}
        </select> */}
        <div>
          <label htmlFor="shortContent">Short Content</label>
          <textarea
            id="shortContent"
            value={formData?.shortContent}
            onChange={(e) => handleChange("shortContent", e.target.value)}
            placeholder="Enter Short Content"
          />
        </div>
        <div>
          <label>Content</label>
        <RichTextEditor
          onChange={(value) => handleChange("content", value)}
          value={formData?.content}
        />
        </div>
      </div>
      <div>
        <ImageInput
          uploadAction={(file) => uploadPageFile(file, "image")}
          onChange={handleImageChange}
          initialImage={formData?.image || ""}
        />
        <label htmlFor="imageAlt">Image Alt</label>
        <input
          type="text"
          id="imageAlt"
          name="imageAlt"
          value={formData?.imageAlt}
          onChange={(e) => handleChange("imageAlt", e.target.value)}
          placeholder="Enter Image Alt"
        />

        <MetaTags
          metaTitle={formData?.metaTitle}
          metaDescription={formData?.metaDescription}
          metaKeywords={formData?.metaKeywords}
          onChange={(field, value) => handleChange(field, value)}
        />
        {/* <PdfInput
          uploadAction={(file) => uploadPageFile(file, "pdf")}
          onChange={(value) => handleChange("pdf", value)}
        />
        <label htmlFor="pdfAlt">Pdf Alt</label>
        <input
          type="text"
          id="pdfAlt"
          name="pdfAlt"
          value={formData?.pdfAlt}
          onChange={(e) => handleChange("pdfAlt", e.target.value)}
          placeholder="Enter Pdf Alt"
        /> */}

        <button type="submit">
          {initialData ? "Update Submortgage" : "Create Submortgage"}
        </button>
      </div>
    </form>
  );
}
