import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, Extension, useEditor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Paragraph from "@tiptap/extension-paragraph";
import History from "@tiptap/extension-history";
import { useTasks } from "@/store/tasks";
import { cn } from "@/lib/utils";
import { useAddTaskValue } from "@/store/add-task-value";
import { useEffect } from "react";
import { json, useParams } from "react-router-dom";

// Custom extension to handle Enter key
const EnterExtension = Extension.create({
  name: "enterToAdd",

  addKeyboardShortcuts() {
    return {
      Enter: () => {
        this.editor.commands.focus();

        return true; // Prevent default behavior
      },
    };
  },
});

interface AddTaskInputProps {
  className?: string;
}

// # Component
export default function AddTaskInput({ className }: AddTaskInputProps) {
  const addTask = useTasks((state) => state.addTask);

  const duration = useAddTaskValue((state) => state.duration);
  const setDuration = useAddTaskValue((state) => state.setDuration);
  const setEditor = useAddTaskValue((state) => state.setEditor);

  const { slug } = useParams();

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
      History,
      Placeholder.configure({
        placeholder: "+ Add task",
        emptyEditorClass: "",
      }),
      EnterExtension,
    ],
  });

  useEffect(() => {
    if (!editor) return;

    setEditor(editor);
  }, [editor, setEditor]);

  if (!editor) return <div className={className} />;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (!slug) return;

      if (editor.getText().trim() === "") return;

      const formattedContent = editor.getHTML().replace("<p></p>", "").trim();

      addTask(formattedContent, slug, duration);

      editor.commands.clearContent();
      setDuration(0);
    }
  };

  if (!slug) throw json({ message: "Page not found" }, { status: 404 });

  return (
    <EditorContent
      id="add-task-input"
      editor={editor}
      onKeyDown={handleKeyDown}
      className={cn(className)}
    />
  );
}
