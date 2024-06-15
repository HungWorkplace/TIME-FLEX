import { Box, SxProps, Theme } from "@mui/material";
import Header from "./Header";
import AddTask from "./AddTask";
import TaskList from "../task-list/TaskList";

interface MainAreaProps {
  sx?: SxProps<Theme>;
}

// # Component
export default function MainArea({ sx }: MainAreaProps) {
  return (
    <Box sx={{ ...sx }}>
      <Header sx={{ my: "0.9375rem" }} />
      <AddTask sx={{ mx: "1.25rem", mb: "1rem" }} />
      <TaskList sx={{ mx: "1.25rem" }} />
    </Box>
  );
}
