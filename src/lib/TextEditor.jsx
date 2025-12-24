"use client";

import dynamic from "next/dynamic";
import { defaultEditorConfig} from "@/utils/editorConfig";

const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-96 bg-gray-50 rounded-lg border flex items-center justify-center">
        Loading editor...
      </div>
    ),
  }
);

export default function RichTextEditor({
  value,
  onChange,
  config = {},
  className = "",
}) {
  return (
    <div className={className}>
      <Editor
        apiKey={process.env.EDITOR_API_KEY}
        value={value}
        init={{
          ...defaultEditorConfig,
          ...config,
        }}
        onEditorChange={onChange}
      />
    </div>
  );
}
