import { usePages } from "@/store/pages";
import PageTitle from "./PageTitle";
import { PageItemProvider } from "./context/page-item";

// # Component
export default function PageList() {
  const pages = usePages((state) => state.pages);

  return (
    <>
      {pages.map((page) => (
        <PageItemProvider key={page.id} page={page}>
          <PageTitle />
        </PageItemProvider>
      ))}
    </>
  );
}
