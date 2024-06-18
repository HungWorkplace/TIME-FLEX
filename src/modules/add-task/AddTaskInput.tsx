import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Paragraph from "@tiptap/extension-paragraph";
import { useTasks } from "@/store/tasks";
import { cn } from "@/lib/utils";
import { useAddTaskValue } from "@/store/add-task-value";
import { useEffect } from "react";

interface AddTaskInputProps {
  className?: string;
}

// # Component
export default function AddTaskInput({ className }: AddTaskInputProps) {
  const addTask = useTasks((state) => state.addTask);

  const content = useAddTaskValue((state) => state.content);
  const setContent = useAddTaskValue((state) => state.setContent);
  const duration = useAddTaskValue((state) => state.duration);
  const setDuration = useAddTaskValue((state) => state.setDuration);
  const setEditor = useAddTaskValue((state) => state.setEditor);

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
    content,
    onUpdate({ editor }) {
      if (editor.getHTML() === "<p></p>") return setContent("");

      setContent(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;

    setEditor(editor);
  }, [editor, setEditor]);

  if (!editor) return <div className={className} />;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!content) return;

    const formattedContent = content.replace("<p></p>", "").trim();

    if (event.key === "Enter") {
      addTask(formattedContent, duration);
      editor.commands.clearContent();
      editor.commands.focus();
      setDuration(0);
    }
  };

  return (
    <EditorContent
      id="add-task-input"
      editor={editor}
      onKeyDown={handleKeyDown}
      className={cn(className)}
    />
  );
}
