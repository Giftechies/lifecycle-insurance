"use client";

import { useState } from "react";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const validateFileSize = (file) => {
  if (file.size > MAX_FILE_SIZE) {
    throw new Error(
      `File size must be less than 10MB. Current size: ${(
        file.size /
        (1024 * 1024)
      ).toFixed(2)}MB`
    );
  }
  return true;
};

export const useFileUpload = (uploadAction) => {
  const [uploadState, setUploadState] = useState({
    url: null,
    status: null,
    pathname:null
  });

  const handleUpload = async (file) => {
    try {

      if (!file) return;

      validateFileSize(file);

      setUploadState((prev) => ({
        ...prev,
        status: { loading: true },
      }));

      const result = await uploadAction(file);

      if (result.success) {
        setUploadState({
          url: result.url,
          status: {
            success: true,
            report: result.report,
          },
        });
        return result;
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      setUploadState((prev) => ({
        ...prev,
        status: { error: error.message },
      }));
      return { success: false, error: error.message };
    }
  };

  const handleRemove = () => {
    setUploadState({
      url: null,
      status: null,
    });
  };

  return {
    url: uploadState.url,
    status: uploadState.status,
    upload: handleUpload,
    remove: handleRemove,
  };
};
