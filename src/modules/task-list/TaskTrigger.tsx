import { Checkbox, Stack } from "@mui/material";
import { RxDragHandleDots2 } from "react-icons/rx";
import TaskContent from "./TaskContent";
import Duration from "./Duration";
import { Task, useTasks } from "@/store/tasks";
import { cn } from "@/lib/utils";

interface TaskTriggerProps {
  task: Task;
}

// # Component
export default function TaskTrigger({ task }: TaskTriggerProps) {
  const setSelectedTask = useTasks((state) => state.setSelectedTask);
  const selectedTaskId = useTasks((state) => state.selectedTaskId);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      onClick={() => setSelectedTask(task.id)}
      aria-label="Task trigger"
      className={cn(
        "group group-data-[state=open]:bg-[#ecf1fe] border-b border-[#f8f8f8]",
        {
          "bg-[#ecf1fe]": selectedTaskId === task.id,
        }
      )}
      sx={{
        position: "relative",
        borderRadius: "0.375rem",
        ":hover": { bgcolor: "#f8f8f8" },
      }}
    >
      <div className="hidden group-hover:flex text-[#757575] absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full cursor-move pr-2 h-full items-center">
        <RxDragHandleDots2 />
      </div>

      <Checkbox size="small" />
      <TaskContent task={task} className="flex-1" />
      <Duration task={task} sx={{ alignSelf: "stretch" }} />
    </Stack>
  );
}
