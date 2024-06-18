import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import { cn } from "@/lib/utils";
import { Task, useTasks } from "@/store/tasks";

interface TaskContentProps {
  className?: string;
  task: Task;
}

// # Component
export default function TaskContent({ className, task }: TaskContentProps) {
  const updateTask = useTasks((state) => state.updateTask);

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "text-[#191919] py-2 outline-none text-sm w-full", // className of the input field,
      },
    },
    extensions: [
      Document,
      Text,
      Paragraph,
      Bold,
      Placeholder.configure({
        placeholder: "No Title",
        emptyEditorClass: "",
      }),
    ],
    content: task.title,
    onUpdate({ editor }) {
      if (editor.getHTML() === "<p></p>") return;

      updateTask(task.id, { ...task, title: editor.getHTML() });
    },
  });

  return <EditorContent editor={editor} className={cn(className)} />;
}
