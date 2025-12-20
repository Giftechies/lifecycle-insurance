"use client"

import { updateCaseStudyIndex } from "@/actions/caseStudyIndex.actions";
import MetaTags from "@/lib/MetaInput";
import RichTextEditor from "@/lib/TextEditor";
import { useState } from "react";
import toast from "react-hot-toast";
import ImageInput from "../../../../lib/ImageUpload";
import { uploadPageFile } from "../../../../lib/uploadPageFile";

export default function CaseStudyIndexForm({ initialData }) {
    const [formData, setFormData] = useState({
        heading: initialData?.heading || "",
        image: initialData?.image || "",
        content: initialData?.content || "",
        metaTitle: initialData?.metaTitle || "",
        metaDescription: initialData?.metaDescription || "",
        metaKeywords: initialData?.metaKeywords || "",
    })

    const handleChange = (field, value) => {
        setFormData((formData) => ({ ...formData, [field]: value }));
    };

    const handleImage = (value)=>{
        setFormData(prev=>({
            ...prev,
            'image':value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await updateCaseStudyIndex(formData);
            if (result.success) {
                toast.success("Case Study index updated successfully!");
            } else {
                toast.error("Error updating Case Study index")
            }
        } catch (error) {
            console.log("error occured", error)
            toast.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container grid md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="content">Heading</label>
                <input
                    id="heading"
                    value={formData?.heading}
                    placeholder="Enter heading"
                    onChange={(e) => handleChange('heading', e.target.value)}
                />

                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    value={formData?.content}
                    onChange={(e) => handleChange('content', e.target.value)}
                    className="min-h-20"
                />
                <MetaTags
                    metaTitle={formData.metaTitle}
                    metaDescription={formData.metaDescription}
                    metaKeywords={formData.metaKeywords}
                    onChange={(field, value) => handleChange(field, value)}
                />
            </div>
            <div>
                <ImageInput
                initialImage={formData?.image}
                onChange={handleImage}
                uploadAction={uploadPageFile}
                />

                <button type="submit">Update Data</button>
            </div>
        </form>
    )
}