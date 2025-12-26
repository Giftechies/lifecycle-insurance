"use client"

import { useState } from "react";
import {uploadPageFile} from "../../../../lib/uploadPageFile"
import ImageInput from "../../../../lib/ImageUpload";
import { getUpdateandCreateOneMore } from "../../../../actions/oneMore.action";
import toast from "react-hot-toast";


export default function OneMoreForm({initialData}) {
    const [formData, setFormData] = useState({
        heading: initialData?.heading || "",
        content: initialData?.content || "",
        buttonText: initialData?.buttonText || "",
        buttonLink: initialData?.buttonLink || "",
        boxheading: initialData?.boxheading || "",
        boxcontent: initialData?.boxcontent || "",
        contact: initialData?.contact || "",
        image: initialData?.image || null,
        imageAlt: initialData?.imageAlt || "",
        image2: initialData?.image2 || null,
        image2Alt: initialData?.image2Alt || "",

    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await getUpdateandCreateOneMore(formData);
        if (response.success) {
            toast.success("One More section updated successfully");
        }
    }
  return (
    <form onSubmit={handleSubmit}  className=" form-container grid grid-cols-2 gap-4  " >
        <div className="">
            <label>Heading</label>
            <input
                type="text"
                value={formData.heading}
                onChange={(e) => setFormData({...formData, heading: e.target.value})}
            />
              <label>Content</label>
            <textarea
                type="text"
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                className="min-h-10"
            />
            <label className='mt-6' >Button Text</label>
            <input
                type="text"
                value={formData.buttonText}
                onChange={(e) => setFormData({...formData, buttonText: e.target.value})}
            />

             <label>Button Link</label>
            <input
                type="text"
                value={formData.buttonLink}
                onChange={(e) => setFormData({...formData, buttonLink: e.target.value})}
            />

           
           
            <label>Image</label>
            <ImageInput
                initialImage={formData.image}
                onChange={(e) => setFormData({...formData, image: e})}
                uploadAction={uploadPageFile}

            />
            <label>Image Alt Text</label>
            <input
                type="text"
                value={formData.imageAlt}
                onChange={(e) => setFormData({...formData, imageAlt: e.target.value})}
            />

        </div>
        <div>
          

           

             <label className='' >Box Heading</label>
            <input
                type="text" 
                value={formData.boxheading}
                onChange={(e) => setFormData({...formData, boxheading: e.target.value})}
            />

            <label className='' >Box Content</label>
            <textarea
                type="text"
                value={formData.boxcontent}
                onChange={(e) => setFormData({...formData, boxcontent: e.target.value})}
                className="min-h-10"
            />
             <label className='mt-6' >Contact</label>
            <input
                type="text"
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
            />


            <label>Second Image</label>
            <ImageInput
                initialImage={formData.image2}
                onChange={(e) => setFormData({...formData, image2: e})}
                uploadAction={uploadPageFile}
            />
            <label>Second Image Alt Text</label>
            <input
                type="text"
                value={formData.image2Alt}
                onChange={(e) => setFormData({...formData, image2Alt: e.target.value})}
            />



      <button type="submit">Submit</button>
        </div>

    
    </form>
  );
}