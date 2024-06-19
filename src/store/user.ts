import { create } from "zustand";

export type User = {
  isNewUser: boolean;
};

type UserState = {
  user: User;
  setUser: (user: User) => void;
};

export const useUser = create<UserState>((set) => ({
  user: { isNewUser: true },
  setUser: (user) => set({ user }),
}));
