import { useState, useEffect, useCallback } from "react";

export default function SlugInput({ heading, value, onChange }) {
  const [isCustomized, setIsCustomized] = useState(false);

  const generateSlug = useCallback((text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  }, []);

  useEffect(() => {
    if (!isCustomized && heading) {
      const newSlug = generateSlug(heading);
      if (newSlug !== value) {
        onChange(newSlug);
      }
    }
  }, [heading, isCustomized, onChange, generateSlug, value]);

  const handleChange = (e) => {
    setIsCustomized(true);
    onChange(e.target.value);
  };

  return (
    <div className="form-container">
      <label htmlFor="slug">URL Slug</label>
      <div className="relative">
        <input
          type="text"
          id="slug"
          value={value}
          onChange={handleChange}
          placeholder="Enter URL slug"
        />
      </div>
    </div>
  );
}
