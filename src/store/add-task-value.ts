import { Editor } from "@tiptap/react";
import { create } from "zustand";

type AddTaskValueState = {
  content: string;
  duration: number;
  editor: Editor | null;
  setContent: (content: string) => void;
  setDuration: (duration: number) => void;
  setEditor: (editor: Editor) => void;
};

export const useAddTaskValue = create<AddTaskValueState>((set) => ({
  content: "",
  duration: 0,
  editor: null,
  setContent: (content) => set(() => ({ content })),
  setDuration: (duration) => set(() => ({ duration })),
  setEditor: (editor) => set(() => ({ editor })),
}));
