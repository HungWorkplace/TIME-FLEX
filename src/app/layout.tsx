import { usePages } from "@/store/pages";
import { useTasks } from "@/store/tasks";
import { useUser } from "@/store/user";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { pages } from "@/dummy-data/pages";
import { tasks } from "@/dummy-data/tasks";
import { useNavigate } from "react-router-dom";

// # Component
export default function HomeLayout() {
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);
  const setPages = usePages((state) => state.setPages);
  const setTasks = useTasks((state) => state.setTasks);

  const navigate = useNavigate();

  useEffect(() => {
    if (user.isNewUser) {
      setPages(pages);
      setTasks(tasks);
      setUser({ isNewUser: false });
      navigate(`/pages/${pages[0].slug}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (user.isNewUser) {
    return null;
  }

  return (
    <>
      <Outlet />
    </>
  );
}
