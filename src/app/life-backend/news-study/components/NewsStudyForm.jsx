"use client";

import RichTextEditor from "@/lib/TextEditor";
import { useState } from "react";
import MetaTags from "@/lib/MetaInput";
import SlugInput from "@/components/SlugInput";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { uploadPageFile } from "@/lib/uploadPageFile";
import ImageInput from "@/lib/ImageUpload";
import { createNewsStudy, updateNewsStudy } from "@/actions/newStudy.actions";

export default function NewsStudyForm({ studies }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    heading: studies?.heading || "",
    shortTitle: studies?.shortTitle || "",
    description: studies?.description || "",
    image: studies?.image || "",
    imageAlt: studies?.imageAlt || "",
    slug: studies?.slug || "",
    metaTitle: studies?.metaTitle || "",
    metaDescription: studies?.metaDescription || "",
    metaKeywords: studies?.metaKeywords || "",
  });

  const handleChange = (field, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
  };

  const handleImageChange = (url) => {
    setFormData((prevFormData) => ({ ...prevFormData, image: url }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (studies?._id) {
        const result = await updateNewsStudy(studies._id, formData);
        if (!result.success) {
          toast.error(result.error);
          return;
        }
        toast.success("News study updated successfully!");
        router.push("/aws-backend/news-study");
      } else {
        const result = await createNewsStudy(formData);
        if (!result.success) {
          toast.error(result.error);
          return;
        }
        toast.success("News study created successfully!");
        router.push("/aws-backend/news-study");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div>
            <label>Heading</label>
            <input
              type="text"
              value={formData.heading}
              onChange={(e) => handleChange("heading", e.target.value)}
              placeholder="Enter heading"
            />
          </div>

          <SlugInput
            heading={formData.heading}
            value={formData.slug}
            onChange={(value) => handleChange("slug", value)}
          />

          <label htmlFor="shortTitle">Short Title</label>
          <textarea type="text" value={formData.shortTitle} onChange={(e) => handleChange("shortTitle", e.target.value)} placeholder="Enter short title" />

          <div>
            <label>Description</label>
            <RichTextEditor
              value={formData.description}
              onChange={(value) => handleChange("description", value)}
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
              onChange={(e) => handleChange("imageAlt", e.target.value)}
              placeholder="Enter image alt"
            />
          </div>

          <MetaTags
            metaTitle={formData.metaTitle}
            metaDescription={formData.metaDescription}
            metaKeywords={formData.metaKeywords}
            onChange={(field, value) => handleChange(field, value)}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {studies ? "Update" : "Create"} News Study
        </button>
      </div>
    </form>
  );
}
