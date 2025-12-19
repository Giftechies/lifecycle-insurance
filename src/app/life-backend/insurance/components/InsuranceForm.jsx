"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { createInsurance, updateInsurance } from "@/actions/insurance.actions";
import RichTextEditor from "@/lib/TextEditor";
import SlugInput from "@/components/SlugInput";
import ImageInput from "@/lib/ImageUpload";
import { uploadPageFile } from "@/lib/uploadPageFile";
import MetaTags from "@/lib/MetaInput";

export default function InsuranceForm({ initialData }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    heading: initialData?.heading || "",
    content: initialData?.content || "",
    image: initialData?.image || "",
    imageAlt: initialData?.imageAlt || "",
    slug: initialData?.slug || "",
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
    try {
      if (initialData) {
        await updateInsurance(initialData._id, formData);
        toast.success("Insurance updated successfully!");
      } else {
        await createInsurance(formData);
        toast.success("Insurance created successfully!");
      }
      router.push("/life-backend/insurance");
    } catch (error) {
      console.error(error);
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

        <button type="submit">
          {initialData
            ? "Update Insurance Category"
            : "Create Insurance Category"}
        </button>
      </div>
    </form>
  );
}
