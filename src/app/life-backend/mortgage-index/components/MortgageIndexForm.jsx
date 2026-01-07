"use client"

import { updateMortgageIndex } from "@/actions/mortgageIndex.actions";
import MetaTags from "@/lib/MetaInput";
import RichTextEditor from "@/lib/TextEditor";
import { useState } from "react";
import toast from "react-hot-toast";
import SlugInput from "../../../../components/Backend/SlugInput";
import ImageInput from '../../../../lib/ImageUpload'
import {uploadPageFile} from "../../../../lib/uploadPageFile"




export default function MortgageIndexForm({initialData}){
    const [formData,setFormData] = useState({
        heading:initialData?.heading || "",
        image:initialData?.image || "" ,
        bannerImage:initialData?.bannerImage || "" ,
        slug:initialData?.slug || "",
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
            const result = await updateMortgageIndex(formData); 
            if(result.success){
                toast.success("Mortgage index updated successfully!");
            }else{
                toast.error("Error updating mortgage index")
            }           
        } catch (error) {
            console.log("error occured",error)
            toast.error(error)
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