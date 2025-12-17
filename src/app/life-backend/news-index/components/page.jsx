"use client"

import { updateNewsIndex } from "@/actions/newsIndex.actions";
import MetaTags from "@/lib/MetaInput";
import RichTextEditor from "@/lib/TextEditor";
import { useState } from "react";
import toast from "react-hot-toast";

export default function NewsIndexForm({initialData}){
    const [formData,setFormData] = useState({
        content:initialData?.content || "",
        metaTitle:initialData?.metaTitle || "",
        metaDescription:initialData?.metaDescription || "",
        metaKeywords:initialData?.metaKeywords || "",
    })

    const handleChange = (field, value) => {
        setFormData((formData) => ({ ...formData, [field]: value }));
      };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const result = await updateNewsIndex(formData); 
            if(result.success){
                toast.success("News index updated successfully!");
            }else{
                toast.error("Error updating news index")
            }           
        } catch (error) {
            console.log("error occured",error)
            toast.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container grid md:grid-cols-2 gap-6">
            <div>
            <label htmlFor="content">Content</label>
            <RichTextEditor
          onChange={(value) => handleChange("content", value)}
          value={formData.content}
          
        />
        </div>
        <div>
        <MetaTags
          metaTitle={formData.metaTitle}
          metaDescription={formData.metaDescription}
          metaKeywords={formData.metaKeywords}
          onChange={(field, value) => handleChange(field, value)}
        />
        <button type="submit">Update Data</button>
        </div>
        </form>       
    )
}