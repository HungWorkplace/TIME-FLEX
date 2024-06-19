import { Editor } from "@tiptap/react";
import { create } from "zustand";

type PageTitleEditorState = {
  editor: Editor | null;
  setEditor: (editor: Editor) => void;
};

export const usePageTitleEditorStore = create<PageTitleEditorState>((set) => ({
  editor: null,
  setEditor: (editor) => set({ editor }),
}));
