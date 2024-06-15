import { create } from "zustand";

type SidebarState = {
  isOpen: boolean;
  inSideOpen: boolean;
  closeModal: (value: boolean) => void;
  closeInSide: (value: boolean) => void;
};

export const useSidebar = create<SidebarState>((set) => ({
  isOpen: false,
  inSideOpen: true,
  closeModal: (value) => set(() => ({ isOpen: value })),
  closeInSide: (value) => set(() => ({ inSideOpen: value })),
}));
