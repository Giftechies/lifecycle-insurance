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
  createSubInsurance,
  updateSubInsurance,
} from "@/actions/subInsurance.actions";

export default function SubInsuranceForm({ initialData,orderLength }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    heading: initialData?.heading || "",
    content: initialData?.content || "",
    content1: initialData?.content1 || "",
    shortContent: initialData?.shortContent || "",
    // category: initialData?.category || "",
    image: initialData?.image || "",
    imageAlt: initialData?.imageAlt || "",
    slug: initialData?.slug || "",
    order: initialData?.order || "",
    metaTitle: initialData?.metaTitle || "",
    metaDescription: initialData?.metaDescription || "",
    metaKeywords: initialData?.metaKeywords || "",
    // pdf: initialData?.pdf || "",
    // pdfAlt: initialData?.pdfAlt || "",
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
      router.push("/life-backend/subinsurance");
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
          value={formData?.heading}
          onChange={(e) => handleChange("heading", e.target.value)}
          placeholder="Enter heading"
        />
        <SlugInput
          heading={formData?.heading}
          value={formData?.slug}
          onChange={(value) => handleChange("slug", value)}
        />

        <label htmlFor="shortContent">Short Content</label>
        <textarea type="text" value={formData?.shortContent} onChange={(e) => handleChange("shortContent", e.target.value)} placeholder="Enter short content" />
        <label>Content</label>
        <RichTextEditor
          onChange={(value) => handleChange("content", value)}
          value={formData?.content}
        />
        <label className="mt-6">Content 2</label>
        <RichTextEditor
          onChange={(value) => handleChange("content1", value)}
          value={formData?.content1}
        />
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
       <div className="my-4" >
        <label>Order</label>
         <select
          value={formData?.order}
          onChange={(e) => handleChange("order", e.target.value)}
          className="border rounded-lg p-2 "
        >
          {
            Array.from({length:orderLength}).map((_,index)=>(<option key={index} value={index+1} selected={formData?.order==index}>{index+1}</option>))
          }

        </select>
       </div>
        <button type="submit">
          {initialData ? "Update Sub Insurance" : "Create Sub Insurance"}
        </button>
      </div>
    </form>
  );
}
