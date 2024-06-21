import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import History from "@tiptap/extension-history";
import { cn } from "@/lib/utils";
import { Task, useTasks } from "@/store/tasks";
import { useState } from "react";

interface TaskContentProps {
  className?: string;
  task: Task;
}

// # Component
export default function TaskContent({ className, task }: TaskContentProps) {
  const updateTask = useTasks((state) => state.updateTask);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "py-2 outline-none text-sm w-full", // className of the input field,
      },
    },
    extensions: [
      Document,
      Text,
      Paragraph,
      Bold,
      History,
      Placeholder.configure({
        placeholder: "No Title",
        emptyEditorClass: "",
      }),
    ],
    content: task.title,
    onUpdate({ editor }) {
      if (editor.getText() === "") return;

      if (timeoutId) clearTimeout(timeoutId);

      const id = setTimeout(() => {
        updateTask(task.id, { ...task, title: editor.getHTML() });
      }, 300);

      setTimeoutId(id);
    },
  });

  return <EditorContent editor={editor} className={cn(className)} />;
}
