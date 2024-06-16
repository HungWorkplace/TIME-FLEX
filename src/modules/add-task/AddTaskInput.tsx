import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Paragraph from "@tiptap/extension-paragraph";
import { useTasks } from "@/store/tasks";
import { cn } from "@/lib/utils";

interface AddTaskInputProps {
  className?: string;
}

// # Component
export default function AddTaskInput({ className }: AddTaskInputProps) {
  const addTask = useTasks((state) => state.addTask);

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
      Bold,
      Placeholder.configure({
        placeholder: "+ Add task",
        emptyEditorClass: "",
      }),
    ],
    content: "",
  });

  if (!editor) return null;

  const text = editor.getHTML();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!text) return;

    if (event.key === "Enter") {
      addTask(text);
      editor.commands.clearContent();
    }
  };

  return (
    <EditorContent
      editor={editor}
      onKeyDown={handleKeyDown}
      className={cn(className)}
    />
  );
}
