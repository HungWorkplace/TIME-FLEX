import { Box, Stack, SxProps, Theme } from "@mui/material";
import Header from "./Header";
import AddTaskInput from "../add-task/AddTaskInput";
import TaskList from "../task-list/TaskList";
import Duration from "../add-task/Duration";

interface MainAreaProps {
  sx?: SxProps<Theme>;
}

// # Component
export default function MainArea({ sx }: MainAreaProps) {
  return (
    <Box sx={{ ...sx }}>
      <Header sx={{ my: "0.9375rem" }} />
      <Stack
        direction={"row"}
        spacing={1}
        sx={{ px: "1.25rem", mb: "1rem", width: "100%" }}
      >
        <AddTaskInput className="flex-1" />
        <Duration />
      </Stack>
      <TaskList sx={{ mx: "1.25rem" }} />
    </Box>
  );
}
