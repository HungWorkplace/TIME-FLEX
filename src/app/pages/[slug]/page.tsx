import AddTaskInput from "@/modules/add-task/AddTaskInput";
import Duration from "@/modules/add-task/Duration";
import Header from "@/modules/main-area/header/Header";
import TaskList from "@/modules/task-list/TaskList";
import { usePages } from "@/store/pages";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// # Component
export default function PageIdRoot() {
  const { slug } = useParams();
  const setLastVisitedPageSlug = usePages(
    (state) => state.setLastVisitedPageSlug
  );

  useEffect(() => {
    setLastVisitedPageSlug(slug);
  }, [slug, setLastVisitedPageSlug]);

  return (
    <Stack sx={{ height: "100vh" }}>
      <div>
        <Header sx={{ my: "0.9375rem" }} />
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ px: "1.25rem", mb: "1rem", width: "100%" }}
        >
          <AddTaskInput className="flex-1" />
          <Duration />
        </Stack>
      </div>
      <TaskList sx={{ flex: 1, mx: "1.25rem" }} />
    </Stack>
  );
}
