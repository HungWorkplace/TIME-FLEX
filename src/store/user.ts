import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  isNewUser: boolean;
};

type UserState = {
  user: User;
  setUser: (user: User) => void;
};

const store: StateCreator<UserState> = (set) => ({
  user: { isNewUser: true },
  setUser: (user) => set({ user }),
});

export const useUser = create<UserState, [["zustand/persist", UserState]]>(
  persist(store, { name: "user" })
);
