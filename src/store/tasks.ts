import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { produce } from "immer";

export type Task = {
  id: string;
  title: string;
  completed: boolean;
  duration: number;
};

type TasksState = {
  tasks: Task[];
  selectedTaskId: string | null;
  addTask: (title: string, duration?: number) => void;
  deleteTask: (id: string) => void;
  setSelectedTask: (id: string) => void;
  updateTask: (id: string, task: Task) => void;
};

export const useTasks = create<TasksState>((set) => ({
  tasks: [],
  selectedTaskId: null,
  setSelectedTask: (id) => set({ selectedTaskId: id }),
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
  updateTask: (id, task) => {
    set((state) =>
      produce(state, (draft) => {
        const index = draft.tasks.findIndex((task) => task.id === id);
        draft.tasks[index] = task;
      })
    );
  },
  deleteTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
}));
