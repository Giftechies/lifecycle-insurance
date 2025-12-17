"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  createHeroBanner,
  updateHeroBanner,
} from "@/actions/heroSection.actions";
import ImageInput from "@/lib/ImageUpload";
import { uploadPageFile } from "@/lib/uploadPageFile";

export default function HeroForm({ initialData }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    subTitle: initialData?.subTitle || "",
    content: initialData?.content || "",
    image: initialData?.image || "",
    imageAlt: initialData?.imageAlt || "",
    knowMoreText: initialData?.knowMoreText || "Know More",
    knowMoreLink: initialData?.knowMoreLink || "",
    order: initialData?.order || 0,
    isActive: initialData?.isActive ?? true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (url) => {
    setFormData((prev) => ({ ...prev, image: url }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (initialData) {
        const result = await updateHeroBanner(initialData._id, formData);
        if (result.success) {
          toast.success("Hero banner updated successfully!");
          router.push("/aws-backend/hero");
        } else {
          toast.error(result.error || "Failed to update hero banner");
        }
      } else {
        const result = await createHeroBanner(formData);
        if (result.success) {
          toast.success("Hero banner created successfully!");
          router.push("/aws-backend/hero");
        } else {
          toast.error(result.error || "Failed to create hero banner");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sub Title *
            </label>
            <input
              type="text"
              value={formData.subTitle}
              onChange={(e) => handleChange("subTitle", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content *
          </label>
          <textarea
            value={formData.content}
            onChange={(e) => handleChange("content", e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Know More Text *
            </label>
            <input
              type="text"
              value={formData.knowMoreText}
              onChange={(e) => handleChange("knowMoreText", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Know More Link *
            </label>
            <input
              type="text"
              value={formData.knowMoreLink}
              onChange={(e) => handleChange("knowMoreLink", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="/example-page"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image Alt Text *
            </label>
            <input
              type="text"
              value={formData.imageAlt}
              onChange={(e) => handleChange("imageAlt", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Order
            </label>
            <input
              type="number"
              value={formData.order}
              onChange={(e) =>
                handleChange("order", parseInt(e.target.value) || 0)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={formData.isActive}
              onChange={(e) =>
                handleChange("isActive", e.target.value === "true")
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={true}>Active</option>
              <option value={false}>Inactive</option>
            </select>
          </div>
        </div>

        <div>
          <ImageInput
            uploadAction={(file) => uploadPageFile(file, "image")}
            onChange={handleImageChange}
            initialImage={formData.image || ""}
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {isSubmitting
              ? "Saving..."
              : initialData
              ? "Update Banner"
              : "Create Banner"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/aws-backend/hero")}
            className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
