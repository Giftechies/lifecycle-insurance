"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import ImageInput from "@/lib/ImageUpload";
import { uploadPageFile } from "@/lib/uploadPageFile";
import { createTeamMember, updateTeamMember } from "@/actions/team.actions";
import toast from "react-hot-toast";

export default function TeamForm({initialData}){
    const router = useRouter();
    const [formData, setFormData] = useState({
    name: initialData?.name || "",
    designation: initialData?.designation || "",
    contact: initialData?.contact || "",
    image: initialData?.image || "",
    imageAlt: initialData?.imageAlt || "",  
    })

    const handleChange = (field, value) => {
        setFormData((formData) => ({ ...formData, [field]: value }));
      };
    
      const handleImageChange = (url) => {
        setFormData((formData) => ({ ...formData, image: url }));
      };    

    const handleSubmit = async(e) => {
        e.preventDefault()  
       try {
         if(initialData){
          await updateTeamMember(initialData._id,formData); 
          toast.success("Team member updated successfully!");
         } else{
             await createTeamMember(formData);
             toast.success("Team member created successfully!");
         }
         router.push("/life-backend/team");
       } catch (error) {
        console.error(error);
        toast.error(error.message || "Something went wrong!");
       }
    }

    return (
        <form className="form-container grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={formData?.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="Enter Name" />

                <label htmlFor="designation">Designation</label>
                <input type="text" id="designation" value={formData?.designation} onChange={(e) => handleChange('designation', e.target.value)} placeholder="Enter Designation" />

                <label htmlFor="contact">Contact Number</label>
                <input type="text" id="contact" value={formData?.contact} onChange={(e) => handleChange('contact', e.target.value)} placeholder="Enter phoen number" />
            </div>
            <div>
                <ImageInput
          uploadAction={(file) => uploadPageFile(file, "image")}
          onChange={handleImageChange}
          initialImage={formData?.image || ""}
        />
                <label htmlFor="imageAlt">Image Alt</label>
                <input type="text" id="imageAlt" value={formData?.imageAlt} onChange={(e) => handleChange('imageAlt', e.target.value)} placeholder="Enter Image Alt" />
            <button type="submit">Submit</button>
            </div>
        </form>
    )
}