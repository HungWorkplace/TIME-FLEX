import { Editor } from "@tiptap/react";
import { create } from "zustand";

type AddTaskValueState = {
  duration: number;
  editor: Editor | null;
  setDuration: (duration: number) => void;
  setEditor: (editor: Editor) => void;
};

export const useAddTaskValue = create<AddTaskValueState>((set) => ({
  duration: 0,
  editor: null,
  setDuration: (duration) => set(() => ({ duration })),
  setEditor: (editor) => set(() => ({ editor })),
}));
