import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import { Box, SxProps } from "@mui/material";
import { Theme } from "@mui/system";

interface AddTaskProps {
  sx?: SxProps<Theme>;
}

// # Component
export default function AddTask({ sx }: AddTaskProps) {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "bg-[#f8f8f8] text-[#191919] focus:border-[#4772fa] border border-transparent pl-3 py-2.5 rounded-md outline-none text-sm", // className of the input field,
      },
    },
    extensions: [
      Document,
      Text,
      Paragraph,
      Placeholder.configure({
        placeholder: "+ Add task",
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
