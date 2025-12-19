"use client";

import { useFileUpload } from "@/hooks/useFileUpload";
import { BiUpload, BiX } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";
import { RiLoader2Fill } from "react-icons/ri";

export default function PdfInput({ uploadAction, onChange, className = "" }) {
  const {
    url: pdfUrl,
    status: uploadStatus,
    upload,
    remove,
  } = useFileUpload(uploadAction);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const result = await upload(file);
    if (result.success) {
      onChange?.(result.url);
    }
  };

  const handleRemove = () => {
    remove();
    onChange?.(null);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <label className="dashboard-label">PDF File</label>

      {!pdfUrl && !uploadStatus?.loading && (
        <div className="w-fit border-2 border-dashed rounded-lg p-10">
          <label className="flex flex-col items-center justify-center gap-2 cursor-pointer">
            <BiUpload className="w-8 h-8 text-gray-400" />
            <span className="text-sm text-gray-500">Upload PDF</span>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>
      )}

      {uploadStatus?.loading && (
        <div className="border-2 rounded-lg p-4">
          <div className="flex items-center justify-center gap-2">
            <RiLoader2Fill className="w-5 h-5 animate-spin" />
            <span className="text-sm">Uploading...</span>
            <span className="sr-only" >hello</span>
          </div>
        </div>
      )}

      {pdfUrl && !uploadStatus?.loading && (
        <div className="relative border rounded-lg p-4">
          <div className="flex items-center gap-3">
            <FiFileText className="w-8 h-8 text-blue-500" />
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline flex-1 truncate"
            >
              View PDF
            </a>
            <button
              onClick={handleRemove}
              className="p-1 bg-red-100 rounded-full hover:bg-red-200 transition-colors"
            >
              <BiX className="w-4 h-4 text-red-600" />
            </button>
          </div>
        </div>
      )}

      {uploadStatus?.error && (
        <p className="text-sm text-red-600">{uploadStatus.error}</p>
      )}

      {uploadStatus?.success && uploadStatus.report && (
        <div className="mt-2 p-3 bg-gray-50 rounded-lg text-sm space-y-1">
          <p>Size: {uploadStatus.report.originalSize}</p>
          <p>Type: {uploadStatus.report.format || "PDF"}</p>
        </div>
      )}
    </div>
  );
}
