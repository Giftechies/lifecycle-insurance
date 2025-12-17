"use client"

import { updateBusinessFundingIndex } from "@/actions/businessFundingIndex.actions";
import MetaTags from "@/lib/MetaInput";
import RichTextEditor from "@/lib/TextEditor"
import { useState } from "react"
import toast from "react-hot-toast";

export default function BusinnesFundingIndexForm({initialData}){
    const [formData,setFormData] = useState({
        content:initialData?.content || "",
        metaTitle:initialData?.metaTitle || "",
        metaDescription:initialData?.metaDescription || "",
        metaKeywords:initialData?.metaKeywords || "",
    })

    const handleChange = (field, value) => {
        setFormData((formData) => ({ ...formData, [field]: value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateBusinessFundingIndex(formData);
            toast.success("Business Funding updated successfully!");
        } catch (error) {
            toast.error("Something went wrong!");
        }
      }

    return (
            <form className="form-container grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <div>
                <label>Content</label>
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