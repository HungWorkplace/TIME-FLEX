import { Page, usePages } from "@/store/pages";
import { Extension, useEditor } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import History from "@tiptap/extension-history";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { json } from "react-router-dom";

// Custom extension to handle Enter key
const EnterBlurExtension = Extension.create({
  name: "enterBlur",

  addKeyboardShortcuts() {
    return {
      Enter: () => {
        this.editor.commands.blur();
        return true; // Prevent default behavior
      },
    };
  },
});

interface UsePageTitleEditorProps {
  inputClass?: string;
  page: Page | undefined;
  editable: boolean;
}

// #Hook
export default function usePageTitleEditor({
  inputClass,
  page,
  editable,
}: UsePageTitleEditorProps) {
  const updatePage = usePages((state) => state.updatePage);

  const editor = useEditor({
    editable,
    editorProps: {
      attributes: {
        class: cn("outline-none", inputClass), // className of the input field,
      },
    },
    extensions: [
      Document,
      Text,
      Paragraph,
      History,
      Placeholder.configure({
        placeholder: "Untitled",
        emptyEditorClass: "",
      }),
      EnterBlurExtension,
    ],
    onBlur({ editor }) {
      if (!page) return;
      if (editor.getText().trim() === "") {
        updatePage(page.slug, { ...page, title: "Untitled" });
      } else {
        updatePage(page.slug, { ...page, title: editor.getText() });
      }

      !editable && editor.setEditable(false);
    },
  });

  useEffect(() => {
    if (!editor || !page) return;

    editor.commands.setContent(page.title);
  }, [page, editor]);

  if (!page) {
    throw json({ message: "Page not found" }, { status: 404 });
  }

  return editor;
}
