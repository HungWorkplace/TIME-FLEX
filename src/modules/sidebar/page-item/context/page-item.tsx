import { Page } from "@/store/pages";
import React, { createContext, useContext, ReactNode } from "react";

interface PageItemProviderProps {
  children: ReactNode;
  page: Page;
}

// Create the context
const PageItemContext = createContext<Page | null>(null);

// # Provider
export const PageItemProvider: React.FC<PageItemProviderProps> = ({
  children,
  page,
}) => {
  return (
    <PageItemContext.Provider value={page}>{children}</PageItemContext.Provider>
  );
};

// Custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const usePageItemContext = (): Page => {
  const context = useContext(PageItemContext);
  if (context === null) {
    throw new Error(
      "usePageItemContext must be used within a PageItemProvider"
    );
  }
  return context;
};
