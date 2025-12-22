export async function uploadPageFile(file, type) {
  try {
    const formData = new FormData();
    formData?.append("file", file);

    const res = await fetch("/api/upload/page-file", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.error || "Upload failed");
    }

    return data;
  } catch (error) {
    console.error("Upload Error:", error);
    return { success: false, error: error.message };
  }
}
