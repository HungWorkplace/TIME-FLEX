import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import { Box, SxProps } from "@mui/material";
import { Theme } from "@mui/system";

interface TaskContentProps {
  sx?: SxProps<Theme>;
}

// # Component
export default function TaskContent({ sx }: TaskContentProps) {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "text-[#191919] py-2 outline-none text-sm w-full border-b border-[#f8f8f8]", // className of the input field,
      },
    },
    extensions: [
      Document,
      Text,
      Paragraph,
      Placeholder.configure({
        placeholder: "No Title",
        emptyEditorClass: "",
      }),
    ],
    content: "",
  });

  return (
    <Box sx={{ ...sx }}>
      <EditorContent editor={editor} />
    </Box>
  );
}
