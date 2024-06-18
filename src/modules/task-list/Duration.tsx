import { Box, SxProps, Theme } from "@mui/material";
import { NumberInput } from "./NumberInput";
import { Task, useTasks } from "@/store/tasks";

interface DurationProps {
  sx?: SxProps<Theme>;
  task: Task;
}

// # Component
export default function Duration({ sx, task }: DurationProps) {
  const updateTask = useTasks((state) => state.updateTask);

  return (
    <Box sx={{ ...sx }}>
      <NumberInput
        min={0}
        value={task.duration}
        onInputChange={(event) =>
          updateTask(task.id, {
            ...task,
            duration: parseInt(event.target.value) || 0,
          })
        }
      />
    </Box>
  );
}
