import { put } from "@vercel/blob";

export async function uploadToBlob(
  file,
  options
) {
  if (!file) throw new Error("No file provided");

  if (!file.type.startsWith("image/")) {
    throw new Error("Only image uploads allowed");
  }

  const safeName = file.name.replace(/\s+/g, "-").toLowerCase();
  const folder = options?.folder ?? "uploads";

  const pathname = `${folder}/${Date.now()}-${safeName}`;

  const blob = await put(pathname, file, {
    access: "public",
    contentType: file.type,
  });

  return {
    url: blob.url,
    pathname: blob.pathname,
    size: file.size,
    format: file.type,
  };
}
