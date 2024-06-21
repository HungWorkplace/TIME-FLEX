import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./app/page";
import PagesRoot from "./app/pages/page";
import PageIdRoot from "./app/pages/[slug]/page";
import HomeLayout from "./app/layout";
import ErrorBoundary from "./app/pages/[slug]/error";
import HomeErrorBoundary from "./app/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <HomeErrorBoundary />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            path: "/pages",
            element: <PagesRoot />,
          },
          {
            path: "/pages/:slug",
            element: <PageIdRoot />,
            errorElement: <ErrorBoundary />,
          },
        ],
      },
    ],
  },
]);

// # Component
export default function App() {
  return <RouterProvider router={router} />;
}
