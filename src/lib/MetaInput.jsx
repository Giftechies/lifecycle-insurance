"use client";

import React from "react";
import { BiX } from "react-icons/bi";

export default function MetaTags({
  metaTitle,
  metaDescription,
  metaKeywords,
  onChange,
}) {
  const keywords = metaKeywords
    ? Array.isArray(metaKeywords)
      ? metaKeywords
      : metaKeywords.split(",").filter((k) => k.trim())
    : [];

  const handleKeywordAdd = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const value = e.target?.value.trim();
      if (value && !keywords.includes(value)) {
        const newKeywords = [...keywords, value];
        onChange("metaKeywords", newKeywords.join(","));
        e.target.value = "";
      }
    }
  };

  const removeKeyword = (indexToRemove) => {
    const newKeywords = keywords.filter((_, index) => index !== indexToRemove);
    onChange("metaKeywords", newKeywords.join(","));
  };

  return (
    <div className="form-container">
      <div>
        <label htmlFor="metaTitle">Meta Title</label>
        <input
          type="text"
          id="metaTitle"
          value={metaTitle}
          placeholder="Enter meta title"
          onChange={(e) => onChange("metaTitle", e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="metaDescription">Meta Description</label>
        <textarea
          id="metaDescription"
          value={metaDescription}
          onChange={(e) => onChange("metaDescription", e.target.value)}
          rows={3}
          placeholder="Enter meta description"
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="metaKeywords">Meta Keywords</label>
        <div className="">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="inline-flex w-fit px-3 py-1 mb-2 bg-blue-100 text-blue-800 rounded-full text-[13px] items-center gap-2"
            >
              {keyword}
              <button
                type="button"
                onClick={() => removeKeyword(index)}
                className="text-blue-600 hover:text-blue-800"
              >
                <BiX size={10} />
              </button>
            </span>
          ))}
          <input
            type="text"
            id="metaKeywords"
            placeholder="Type keyword and press Enter or comma to add..."
            onKeyDown={handleKeywordAdd}
          />
        </div>
      </div>
    </div>
  );
}
