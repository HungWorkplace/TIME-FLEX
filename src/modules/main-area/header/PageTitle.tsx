import { cn } from "@/lib/utils";
import { EditorContent } from "@tiptap/react";
import { usePages } from "@/store/pages";
import { useParams } from "react-router-dom";
import usePageTitleEditor from "@/hooks/usePageTitleEditor";
import { usePageTitleEditorStore } from "@/store/pageTitleEditor";
import { useEffect } from "react";

interface PageTitleProps {
  className?: string;
}

// # Component
export default function PageTitle({ className }: PageTitleProps) {
  const setEditor = usePageTitleEditorStore((state) => state.setEditor);
  const { slug } = useParams();
  const page = usePages((state) =>
    state.pages.find((page) => page.slug === slug)
  );

  const editor = usePageTitleEditor({
    page,
    editable: true,
    inputClass: "text-xl font-medium",
  });

  useEffect(() => {
    if (editor) {
      setEditor(editor);
    }
  }, [editor, setEditor]);

  return <EditorContent editor={editor} className={cn(className)} />;
}
