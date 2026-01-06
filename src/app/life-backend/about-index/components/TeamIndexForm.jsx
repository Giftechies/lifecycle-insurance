"use client"

import { updateTeamIndex } from "@/actions/teamIndex.actions";
import MetaTags from "@/lib/MetaInput";
import RichTextEditor from "@/lib/TextEditor";
import { useState } from "react";
import ImageInput from "../../../../lib/ImageUpload"
import toast from "react-hot-toast";
import { uploadPageFile } from '../../../../lib/uploadPageFile'

export default function TeamIndexForm({initialData}){
    console.log(initialData,"ddk>>");
    
    const [formData,setFormData] = useState({
        heading:initialData?.heading || '',
        boxheading:initialData?.boxheading || '',
        boxcontent:initialData?.boxcontent || '',
        content:initialData?.content || "",
        image:initialData?.image || "",
        metaTitle:initialData?.metaTitle || "",
        metaDescription:initialData?.metaDescription || "",
        metaKeywords:initialData?.metaKeywords || "",
    })

    const handleChange = (field, value) => {
        setFormData((formData) => ({ ...formData, [field]: value }));
      };
    
    const handleImage= (value)=>{
        setFormData(prev=>({
            ...prev,
            'image':value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const result = await updateTeamIndex(formData); 
            if(result.success){
                toast.success("Team index updated successfully!");
            }else{
                toast.error("Error updating team index")
                
            }           
        } catch (error) {
            console.log("error occured",error)
            toast.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container grid md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="heading">Heading </label>
                <input 
                id="heading"
                value={formData?.heading}
                onChange={(e)=>handleChange('heading',e.target.value)}
                />
                <label htmlFor="boxheading">Box Heading </label>
                <input 
                id="boxheading"
                value={formData?.boxheading}
                onChange={(e)=>handleChange('boxheading',e.target.value)}
                />
                <label htmlFor="boxContent">Box Content </label>
                <textarea 
                id="shortContent"
                value={formData?.boxcontent}
                onChange={(e)=>handleChange('boxcontent',e.target.value)}
                className="min-h-26"
                />
            <label htmlFor="content">Content</label>
            <RichTextEditor
          onChange={(value) => handleChange("content", value)}
          value={formData?.content}
          
        />
        </div>
        <div>
            <ImageInput
            initialImage={formData?.image}
            uploadAction={uploadPageFile}
            onChange={(value)=>handleImage(value)}
            />
        <MetaTags
          metaTitle={formData?.metaTitle}
          metaDescription={formData?.metaDescription}
          metaKeywords={formData?.metaKeywords}
          onChange={(field, value) => handleChange(field, value)}
        />
        <button type="submit">Update Data</button>
        </div>
        </form>       
    )
}