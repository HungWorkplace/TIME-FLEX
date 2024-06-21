import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { produce } from "immer";

export type Page = {
  id: string;
  title: string;
  slug: string;
};

type PagesState = {
  pages: Page[];
  lastVisitedPageSlug: string | undefined;
  setPages: (pages: Page[]) => void;
  setLastVisitedPageSlug: (slug: string | undefined) => void;
  createPage: (title: string, slug?: string) => void;
  updatePage: (slug: string, page: Page) => void;
  deletePage: (slug: string) => void;
  updateSlug: (oldSlug: string, newSlug: string) => void;
};

const store: StateCreator<PagesState> = (set) => ({
  pages: [],
  lastVisitedPageSlug: undefined,
  setPages: (pages) => set({ pages }),
  setLastVisitedPageSlug: (slug) => set({ lastVisitedPageSlug: slug }),
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
});

export const usePages = create<PagesState, [["zustand/persist", PagesState]]>(
  persist(store, { name: "pages" })
);
