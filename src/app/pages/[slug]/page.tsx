import AddTaskInput from "@/modules/add-task/AddTaskInput";
import Duration from "@/modules/add-task/Duration";
import Header from "@/modules/main-area/header/Header";
import TaskList from "@/modules/task-list/TaskList";
import { Box, Stack } from "@mui/material";

// # Component
export default function PageIdRoot() {
  return (
    <Stack sx={{ height: "100vh" }}>
      <Box>
        <Header sx={{ my: "0.9375rem" }} />
        <Stack
          direction={"row"}
          spacing={1}
          sx={{ px: "1.25rem", mb: "1rem", width: "100%" }}
        >
          <AddTaskInput className="flex-1" />
          <Duration />
        </Stack>
      </Box>
      <TaskList sx={{ flex: 1, mx: "1.25rem" }} />
    </Stack>
  );
}
