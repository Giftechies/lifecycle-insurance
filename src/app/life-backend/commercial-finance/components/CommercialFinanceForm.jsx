"use client";

import { createCommercialFinance, updateCommercialFinance } from "@/actions/commercialFinance.actions";
import SlugInput from "../../../../components/Backend/SlugInput";
import ImageInput from "@/lib/ImageUpload";
import MetaTags from "@/lib/MetaInput";
import RichTextEditor from "@/lib/TextEditor";
import { uploadPageFile } from "@/lib/uploadPageFile";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CommercialFinanceForm({ initialData }) {
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
    })

    const handleChange = (field, value) => {
        setFormData((formData) => ({ ...formData, [field]: value }));
      };
    
      const handleImageChange = (url) => {
        setFormData((formData) => ({ ...formData, image: url }));
      };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            if(initialData){
                await updateCommercialFinance(initialData._id, formData);
                toast.success("Commercial Finance updated successfully!");
            }else{
                await createCommercialFinance(formData);
                toast.success("Commercial Finance created successfully!");
            }
            router.push("/life-backend/commercial-finance");
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
            
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="heading"> Heading </label>
                    <input type="text" id="heading" value={formData.heading} onChange={(e) => handleChange("heading", e.target.value)} placeholder="Enter heading"/>

                    <SlugInput
          heading={formData.heading}
          value={formData.slug}
          onChange={(value) => handleChange("slug", value)}
        />

        <div>
          <label htmlFor="shortContent">Short Content</label>          
          <textarea type="text" id="shortContent" value={formData.shortContent} onChange={(e) => handleChange("shortContent", e.target.value)} placeholder="Enter short content"/>
        </div>

        <div>
          <label>Content</label>
          <RichTextEditor
            value={formData.content}
            onChange={(value) => handleChange("content",value)}
          />
        </div>
            </div>
            <div>
        <ImageInput
          uploadAction={(file) => uploadPageFile(file, "image")}
          onChange={handleImageChange}
          initialImage={initialData?.image || ""}
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
        <MetaTags
          metaTitle={formData.metaTitle}
          metaDescription={formData.metaDescription}
          metaKeywords={formData.metaKeywords}
          onChange={(field, value) =>
            setFormData((formData) => ({ ...formData, [field]: value }))
          }
        />
      <button type="submit">
        {initialData ? "Update Commercial Finance" : "Create Commercial Finance"}
      </button>
      </div>
        </form>
    );
}  