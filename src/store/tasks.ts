import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { produce } from "immer";

type Task = {
  id: string;
  title: string;
  completed: boolean;
  duration: number;
};

type TasksState = {
  tasks: Task[];
  addTask: (title: string, duration?: number) => void;
};

export const useTasks = create<TasksState>((set) => ({
  tasks: [],
  addTask: (title, duration) =>
    set((state) =>
      produce(state, (draft) => {
        draft.tasks.push({
          id: uuidv4(),
          title,
          completed: false,
          duration: duration || 0,
        });
      })
    ),
}));
