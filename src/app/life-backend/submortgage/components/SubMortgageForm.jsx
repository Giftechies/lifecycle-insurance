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

export default function SubMortgageForm({ initialData, OrderLenght }) {
  const router = useRouter();
  // console.log('categories',categories)
  const [formData, setFormData] = useState({
    heading: initialData?.heading || "",
    content: initialData?.content || "",
    content1: initialData?.content1 || "",
    shortContent: initialData?.shortContent || "",
    image: initialData?.image || "",
    imageAlt: initialData?.imageAlt || "",
    slug: initialData?.slug || "",
    order: initialData?.order || "",
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
        <div className="mt-6" >
          <label>Content 2</label>
        <RichTextEditor
          onChange={(value) => handleChange("content1", value)}
          value={formData?.content1}
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
        <div>
        <label className="my-4" >Order</label>
        <select onChange={(e) => handleChange("order", parseInt(e.target.value))}
        value={formData?.order} 
         className="border rounded-lg p-2 "
         >
          {
            Array.from({length:OrderLenght}).map((_,index)=>{

              return(
                <option key={index} value={index+1} selected={formData?.order==index+1} >{index+1}</option>
              )
            })
          }
          
        </select>
        </div>
      
        <button type="submit">
          {initialData ? "Update Submortgage" : "Create Submortgage"}
        </button>
      </div>
    </form>
  );
}
