import { Stack, SxProps, Theme } from "@mui/material";
import Task from "./Task";

interface TaskListProps {
  sx?: SxProps<Theme>;
}

// # Component
export default function TaskList({ sx }: TaskListProps) {
  return (
    <Stack sx={{ ...sx }}>
      <Task />
      <Task />
    </Stack>
  );
}
