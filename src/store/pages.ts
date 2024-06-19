import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { produce } from "immer";

export type Page = {
  id: string;
  title: string;
  slug: string;
};

type PagesState = {
  pages: Page[];
  setPages: (pages: Page[]) => void;
  createPage: (title: string, slug?: string) => void;
  updatePage: (slug: string, page: Page) => void;
  deletePage: (slug: string) => void;
  updateSlug: (oldSlug: string, newSlug: string) => void;
};

export const usePages = create<PagesState>((set) => ({
  pages: [],
  setPages: (pages) => set({ pages }),
  createPage: (title, slug) =>
    set((state) =>
      produce(state, (draft) => {
        draft.pages.push({
          id: uuidv4(),
          title,
          slug: slug
            ? slug
            : title.toLowerCase().replace(/ /g, "-") + "-" + Date.now(),
        });
      })
    ),
  updatePage: (slug, page) => {
    set((state) =>
      produce(state, (draft) => {
        const index = draft.pages.findIndex((page) => page.slug === slug);
        draft.pages[index] = page;
      })
    );
  },
  deletePage: (slug) =>
    set((state) => ({
      pages: state.pages.filter((page) => page.slug !== slug),
    })),
  updateSlug: (oldSlug, newSlug) =>
    set((state) =>
      produce(state, (draft) => {
        const index = draft.pages.findIndex((page) => page.slug === oldSlug);
        draft.pages[index].slug = newSlug;
      })
    ),
}));
