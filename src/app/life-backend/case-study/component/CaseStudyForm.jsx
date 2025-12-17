"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createCaseStudy, updateCaseStudy } from "@/actions/caseStudy.actions";
import { uploadPageFile } from "@/lib/uploadPageFile";
import ImageInput from "@/lib/ImageUpload";
import SlugInput from "@/components/SlugInput";
import RichTextEditor from "@/lib/TextEditor";
import MetaTags from "@/lib/MetaInput";
import toast from "react-hot-toast";

export default function CaseStudyForm({ studies }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    heading: studies?.heading || "",
    description: studies?.description || "",
    image: studies?.image || "",
    imageAlt: studies?.imageAlt || "",
    date: studies?.date || new Date().toISOString().split("T")[0],
    slug: studies?.slug || "",
    metaTitle: studies?.metaTitle || "",
    metaDescription: studies?.metaDescription || "",
    metaKeywords: studies?.metaKeywords || "",
  });

  const handleChange = (field, value) => {
    setFormData((formData) => ({ ...formData, [field]: value }));
  };

  const handleImageChange = (url) => {
    setFormData((formData) => ({ ...formData, image: url }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const action = studies?._id
      ? () => updateCaseStudy(studies._id, formData)
      : () => createCaseStudy(formData);

    const result = await action();

    if (result.error) {
      toast.error(result.error);
      return;
    }
    toast.success(
      studies
        ? "Case study updated successfully!"
        : "Case study created successfully!"
    );
    router.push("/aws-backend/case-study");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form-container grid grid-cols-2 gap-6"
    >
      <div>
        <div>
          <label htmlFor="heading">Heading</label>
          <input
            type="text"
            id="heading"
            value={formData.heading}
            placeholder="Enter heading"
            onChange={(e) => handleChange("heading", e.target.value)}
          />
        </div>

        <SlugInput
          heading={formData.heading}
          value={formData.slug}
          onChange={(value) => handleChange("slug", value)}
        />

        <div>
          <label>Description</label>
          <RichTextEditor
            value={formData.description}
            onChange={(value) => handleChange("description",value)}
          />
        </div>
      </div>

      <div>
        <ImageInput
          uploadAction={(file) => uploadPageFile(file, "image")}
          onChange={handleImageChange}
          initialImage={studies?.image || ""}
        />
        <div>
          <label htmlFor="imageAlt">Image Alt</label>
          <input
            type="text"
            id="imageAlt"
            value={formData.imageAlt}
            onChange={(e) => handleChange("imageAlt",e.target.value)}
            placeholder="Enter image alt"
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => handleChange('date', e.target.value)}
          />
        </div>

        <MetaTags
          metaTitle={formData.metaTitle}
          metaDescription={formData.metaDescription}
          metaKeywords={formData.metaKeywords}
          onChange={(field, value) =>
            setFormData((formData) => ({ ...formData, [field]: value }))
          }
        />
      </div>

      <div className="flex justify-end col-span-2">
        <button type="submit">
          {studies?._id ? "Update" : "Create"} Case Study
        </button>
      </div>
    </form>
  );
}
