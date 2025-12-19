import { NextResponse } from "next/server";
import { uploadToBlob } from "@/lib/uploadToBlob";

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get("file") ;

  if (!file) {
    return NextResponse.json(
      { success: false, error: "File missing" },
      { status: 400 }
    );
  }

  try {
    const result = await uploadToBlob(file, {
      folder: "life",
    });

    return NextResponse.json({
      success: true,
      url: result.url,
      report: {
        format: result.format,
        size: result.size,
      },
      type: "image",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
