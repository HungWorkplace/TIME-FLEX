import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

// # Component
export default function App() {
  return <RouterProvider router={router} />;
}
