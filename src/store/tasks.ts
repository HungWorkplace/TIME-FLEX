import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { produce } from "immer";

export type Task = {
  id: string;
  title: string;
  completed: boolean;
  duration: number;
  pageSlug: string;
};

type TasksState = {
  tasks: Task[];
  selectedTaskId: string | null;
  setTasks: (tasks: Task[]) => void;
  addTask: (title: string, pageSlug: string, duration?: number) => void;
  deleteTask: (id: string) => void;
  setSelectedTaskId: (id: string | null) => void;
  updateTask: (id: string, task: Task) => void;
};

export const useTasks = create<TasksState>((set) => ({
  tasks: [],
  selectedTaskId: null,
  setSelectedTaskId: (id) => set({ selectedTaskId: id }),
  setTasks: (tasks) => set({ tasks }),
  addTask: (title, pageSlug, duration) =>
    set((state) =>
      produce(state, (draft) => {
        draft.tasks.push({
          id: uuidv4(),
          title,
          completed: false,
          duration: duration || 0,
          pageSlug,
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
