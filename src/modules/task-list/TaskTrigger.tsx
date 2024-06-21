import { Box, Stack } from "@mui/material";
import { RxDragHandleDots2 } from "react-icons/rx";
import TaskContent from "./TaskContent";
import Duration from "./Duration";
import { Task, useTasks } from "@/store/tasks";
import { cn } from "@/lib/utils";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import CheckboxTask from "./CheckboxTask";
import StartClock from "./StartClock";

interface TaskTriggerProps {
  task: Task;
  isOverlay?: boolean;
}

// # Component
export default function TaskTrigger({ task, isOverlay }: TaskTriggerProps) {
  const setSelectedTaskId = useTasks((state) => state.setSelectedTaskId);
  const selectedTaskId = useTasks((state) => state.selectedTaskId);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id, data: { task } });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    // touchAction: "none", // to prevent scrolling on mobile devices (when use only Ponter Events)
  };

  return (
    <Stack
      ref={setNodeRef}
      {...attributes}
      style={style}
      direction={"row"}
      alignItems={"center"}
      onClick={() => setSelectedTaskId(task.id)}
      aria-label="Task trigger"
      className={cn(
        "group group-data-[state=open]:bg-[#ecf1fe] border-b relative rounded-md hover:bg-[#f8f8f8] border-[#f8f8f8] bg-white",
        {
          "bg-[#ecf1fe]": selectedTaskId === task.id,
          "z-50 after:rounded-md after:absolute after:inset-0 after:bg-gray-200":
            isDragging, // task persists like placeholder
          "shadow-md rounded-md border-none opacity-75": isOverlay, // task is flying
        }
      )}
    >
      <DragIcon listeners={listeners} />

      <CheckboxTask task={task} />

      <Box
        sx={{
          width: "100%",
          "& .tiptap": {
            color: task.completed ? "#9ca3af" : "#191919",
          },
        }}
      >
        <TaskContent task={task} className="flex-1 cursor-text" />
      </Box>

      <Duration task={task} sx={{ alignSelf: "stretch" }} />

      <StartClock />
    </Stack>
  );
}

interface DragIconProps {
  listeners: SyntheticListenerMap | undefined;
}

function DragIcon({ listeners }: DragIconProps) {
  return (
    <div
      {...listeners}
      className="flex text-[#757575] opacity-100 md:opacity-0 hover:opacity-100 group-hover:opacity-100 absolute z-10 left-0 top-1/2 -translate-y-1/2 -translate-x-full cursor-move pr-2 h-full items-center"
    >
      <RxDragHandleDots2 />
    </div>
  );
}
