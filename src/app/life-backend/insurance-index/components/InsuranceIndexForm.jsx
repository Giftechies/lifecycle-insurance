"use client"

import { updateInsuranceIndex } from "@/actions/insuranceIndex.model";
import MetaTags from "@/lib/MetaInput";

import { useState } from "react"
import toast from "react-hot-toast";
import ImageInput from '../../../../lib/ImageUpload'
import {uploadPageFile} from "../../../../lib/uploadPageFile"
import SlugInput from "../../../../components/Backend/SlugInput";

export default function InsuranceIndexForm({ initialData }) {
  const [formData, setFormData] = useState({
    image: initialData?.image || "",
    heading: initialData?.heading || "",
    slug: initialData?.slig || "",
    content: initialData?.content || "",
    metaTitle: initialData?.metaTitle || "",
    metaDescription: initialData?.metaDescription || "",
    metaKeywords: initialData?.metaKeywords || "",
  })


  const handleChange = (field, value) => {
    setFormData((formData) => ({ ...formData, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData,'insurnce');
      await updateInsuranceIndex(formData);
      toast.success("Insurance Data updated successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  }
  const handleImageSet = (field,value)=>{
    setFormData(prev=>({
      ...prev,
      [field]:value
    }))
  }

  return (
    <form className="form-container grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Heading</label>
        <input
          type="text"
          id="heading"
          value={formData?.heading}
          onChange={(e) => handleChange("heading", e.target.value)}
          placeholder="Enter heading"
        />
         {/* <SlugInput
          heading={formData?.heading}
          value={formData?.slug}
          onChange={(value) => handleChange("slug", value)}
        /> */}
        <label>Content</label>
        <textarea 
           id="content"
          value={formData?.content}
          onChange={(e) => handleChange("content", e.target.value)}
          placeholder="Enter content"
          maxLength={150}
          className="min-h-24"
         />
           <MetaTags
          metaTitle={formData?.metaTitle}
          metaDescription={formData?.metaDescription}
          metaKeywords={formData?.metaKeywords}
          onChange={(field, value) => handleChange(field, value)}
        />
      </div>
      <div>
      <ImageInput
      uploadAction={uploadPageFile}
    onChange={(value)=>handleImageSet('image',value)} 
      initialImage={initialData?.image || ''}
      text='Thumbnail Image'
       />

         <ImageInput
                  uploadAction={uploadPageFile}
                  onChange={(value)=>handleImageSet('bannerImage',value)} 
                  initialImage={initialData?.bannerImage || ''}
                  text="Banner Image"
                   />
      
        <button type="submit">Update Data</button>
      </div>
    </form>
  )
}