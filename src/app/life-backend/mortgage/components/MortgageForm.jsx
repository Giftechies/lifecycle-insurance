"use client";

import { createMortgage, updateMortgage } from "@/actions/mortgage.actions";
import SlugInput from "../../../../components/Backend/SlugInput";
import ImageInput from "@/lib/ImageUpload";
import MetaTags from "@/lib/MetaInput";
import RichTextEditor from "@/lib/TextEditor";
import { uploadPageFile } from "@/lib/uploadPageFile";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Page({ initialData }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    heading: initialData?.heading || "",
    description: initialData?.description || "",
    image: initialData?.image || "",
    imageAlt: initialData?.imageAlt || "",
    slug: initialData?.slug || "",
    content: initialData?.content || "",
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
      await updateMortgage(initialData._id, formData);
      toast.success("Mortgage updated successfully!");
    } else {
      await createMortgage(formData);
      toast.success("Mortgage created successfully!");
    }
    router.push("/life-backend/mortgage");
  };

  return (
    <form
      className="form-container grid grid-cols-1 md:grid-cols-2 gap-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="heading">Heading</label>
        <input
          type="text"
          id="heading"
          name="heading"
          value={formData.heading}
          onChange={(e) => handleChange("heading", e.target.value)}
          placeholder="Enter Heading"
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
          {initialData ? "Update Case Study" : "Create Case Study"}
        </button>
      </div>
    </form>
  );
}
