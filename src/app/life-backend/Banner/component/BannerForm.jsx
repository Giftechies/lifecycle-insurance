'use client'
import { useEffect, useRef, useState } from "react"
import ImageUpload from "@/lib/ImageUpload"
import { createOrUpdateHomeBanner } from "../../../../actions/homeBanner.action"
import { uploadPageFile } from "@/lib/uploadPageFile";
import toast from "react-hot-toast";




export default function BannerForm({ initialData }) {
    const [formData, setFormData] = useState({
        title: "",
        boxtitle1: "",
        boxtitle2: "",
        boxtitle3: "",
        boximage1: null,
        boximage2: null,
        boximage3: null,
        // ... rest of your state
    })

    useEffect(() => {
        setFormData({
            title: initialData?.title ?? "",
            boxtitle1: initialData?.boxtitle1 ?? "",
            boxtitle2: initialData?.boxtitle2 ?? "",
            boxtitle3: initialData?.boxtitle3 ?? "",
            boximage1: initialData?.boximage1 ?? null,
            boximage2: initialData?.boximage2 ?? null,
            boximage3: initialData?.boximage3 ?? null,
        })
    }, [initialData])

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await createOrUpdateHomeBanner(formData)
        console.log(result);
        // toast.success("Banner data saved successfully!")
    }

    const handleImageChange = (field, url) => {
        setFormData(prev => ({ ...prev, [field]: url }))
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
             <TextInput
                label="Title "
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
            />
           <div className=" flex gap-4 " >
             <TextInput
                label="box Title 1 "
                name="boxtitle1"
                value={formData.boxtitle1}
                onChange={handleChange}
                required
            />
             <TextInput
                label="box Title 2 "
                name="boxtitle2"
                value={formData.boxtitle2}
                onChange={handleChange}
                required
            />
             <TextInput
                label="box Title 2 "
                name="boxtitle3"
                value={formData.boxtitle3}
                onChange={handleChange}
                required
            />
           </div>
           <div className=" flex gap-4 justify-between " >
        <ImageUpload
        onChange={(url) => handleImageChange('boximage1', url)}
        uploadAction={uploadPageFile}
        initialImage = {formData.boximage1}
        />
        <ImageUpload
        onChange={(url) => handleImageChange('boximage2', url)}
        uploadAction={uploadPageFile}
        initialImage = {formData.boximage2}
        />
        <ImageUpload
        onChange={(url) => handleImageChange('boximage3', url)}
        uploadAction={uploadPageFile}
        initialImage = {formData.boximage3}
        />
           </div>
           <div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{initialData ? "Update Banner" : "Create Banner"}</button>
           </div>
        </form>
    )
}

// ✅ 1. Move this OUTSIDE the main component
const TextInput = ({ label, value, required, name, onChange }) => (
    <div className="flex flex-col flex-1 gap-2 ">
        <label htmlFor={name}>
            {label} {required && '*'}
        </label>
        <input
            id={name}
            name={name}
            type="text"
            className="border border-black p-1 rounded-[2px] "
            value={value}
            onChange={(e) => onChange(name, e.target.value)} // Pass name and value
            required={required}
        />
    </div>
)