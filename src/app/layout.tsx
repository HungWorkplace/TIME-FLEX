import { usePages } from "@/store/pages";
import { useTasks } from "@/store/tasks";
import { useUser } from "@/store/user";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { pages } from "@/dummy-data/pages";
import { tasks } from "@/dummy-data/tasks";
import { useNavigate } from "react-router-dom";

// # Component
export default function HomeLayout() {
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);
  const setTasks = useTasks((state) => state.setTasks);
  const setPages = usePages((state) => state.setPages);
  const lastVisitedPageSlug = usePages((state) => state.lastVisitedPageSlug);
  const pageIndex = usePages((state) =>
    state.pages.findIndex((page) => page.slug === lastVisitedPageSlug)
  );

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle new users immediately
    if (user.isNewUser) {
      setPages(pages);
      setTasks(tasks);
      setUser({ isNewUser: false });
      navigate(`/pages/${pages[0].slug}`);
      return;
    }

    // Function to determine the correct navigation target
    const getNavigationTarget = () => {
      if (location.pathname === "/") {
        if (pageIndex === -1) {
          return pages.length > 0 ? `/pages/${pages[0].slug}` : "/pages";
        }
        return `/pages/${lastVisitedPageSlug}`;
      }
      return null; // No navigation needed for other paths
    };

    // Get the target and navigate if necessary
    const target = getNavigationTarget();
    if (target) {
      navigate(target);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <Outlet />
    </>
  );
}
