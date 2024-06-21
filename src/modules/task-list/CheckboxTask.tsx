import { Task, useTasks } from "@/store/tasks";
import { Checkbox } from "@mui/material";

interface CheckboxTaskProps {
  task: Task;
}

// # Component
export default function CheckboxTask({ task }: CheckboxTaskProps) {
  const updateTask = useTasks((state) => state.updateTask);
  const setSelectedTaskId = useTasks((state) => state.setSelectedTaskId);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTask(task.id, { ...task, completed: e.target.checked });
    setSelectedTaskId(null);
  };

  return (
    <Checkbox
      size="small"
      checked={task.completed}
      onChange={handleCheckbox}
      sx={{
        "&.Mui-checked": {
          color: "#c2c6d0",
        },
        "&.Mui-checked:hover": {
          color: "#6e7075",
        },
      }}
    />
  );
}
