"use client";

import { useFileUpload } from "../hooks/useFileUpload";
import Image from "next/image";
import { BiUpload, BiX } from "react-icons/bi";
import { RiLoader2Fill } from "react-icons/ri";
import { useState, useEffect } from "react";

export default function ImageInput({
  uploadAction,
  onChange,
  className = "",
  initialImage = "",
}) {
  const [imageUrl, setImageUrl] = useState(initialImage);
  const { status: uploadStatus, upload, remove } = useFileUpload(uploadAction);

  useEffect(() => {
    if (initialImage) {
      setImageUrl(initialImage);
    }
  }, [initialImage]);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const result = await upload(file);
    if (result.success) {
      setImageUrl(result.url);
      onChange(result.url);
    }
  };

  const handleRemove = () => {
    setImageUrl("");
    onChange("");
    remove();
  };

  return (
    <div className={`space-y-2 mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700">Image</label>

      {!imageUrl && !uploadStatus?.loading && (
        <div className="border-2 border-dashed w-fit rounded-lg p-10">
          <label className="flex flex-col items-center justify-center gap-2 cursor-pointer">
            <BiUpload className="w-8 h-8 text-gray-400" />
            <span className="text-sm text-gray-500">Upload image</span>
            <input
              type="file"
              className="hidden"
           accept=".png, .jpg, .jpeg, .svg, .webp, image/png, image/jpeg, image/svg+xml, image/webp"
              onChange={handleFileChange}
            />
          </label>
        </div>
      )}

      {uploadStatus?.loading && (
        <div className="border-2 rounded-lg p-4">
          <div className="flex items-center justify-center gap-2">
            <RiLoader2Fill className="w-5 h-5 animate-spin" />
            <span className="text-sm">Uploading...</span>
          </div>
        </div>
      )}

      {imageUrl && !uploadStatus?.loading && (
        <div className="relative border rounded-lg overflow-hidden">
          <div className="aspect-video min-w-40 min-h-40  relative">
            <Image
              src={imageUrl}
              alt="Uploaded image"
              fill
              className="object-container w-full h-full "
            />
          </div>
          <button
            onClick={handleRemove}
            className="absolute top-2 right-2 p-1 bg-red-100 rounded-full hover:bg-red-200 transition-colors"
          >
            <BiX className="w-4 h-4 text-red-600" />
          </button>
        </div>
      )}

      {uploadStatus?.error && (
        <p className="text-sm text-red-600">{uploadStatus.error}</p>
      )}
    </div>
  );
}
