import { Stack, SxProps, Theme } from "@mui/material";
import { useTasks } from "@/store/tasks";
import Task from "./Task";

interface TaskListProps {
  sx?: SxProps<Theme>;
}

// # Component
export default function TaskList({ sx }: TaskListProps) {
  const tasks = useTasks((state) => state.tasks);

  return (
    <Stack sx={{ ...sx }}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </Stack>
  );
}
