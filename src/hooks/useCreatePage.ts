import { usePageTitleEditorStore } from "@/store/pageTitleEditor";
import { usePages } from "@/store/pages";
import { useNavigate } from "react-router-dom";

export const useCreatePage = () => {
  const createPage = usePages((state) => state.createPage);
  const editor = usePageTitleEditorStore((state) => state.editor);
  const navigate = useNavigate();

  const createPageAction = () => {
    const slug = "untitled-" + Date.now();

    createPage("Untitled", slug);
    navigate(`/pages/${slug}`);

    editor?.commands.focus();
  };

  return createPageAction;
};
