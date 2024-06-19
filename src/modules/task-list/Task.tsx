import { Task as TaskType, useTasks } from "@/store/tasks";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { FaRegTrashCan } from "react-icons/fa6";
import TaskTrigger from "./TaskTrigger";

interface TaskProps {
  task: TaskType;
  isOverlay?: boolean;
}

// # Component
export default function Task({ task, isOverlay }: TaskProps) {
  const deleteTask = useTasks((state) => state.deleteTask);

  return (
    <ContextMenu>
      <ContextMenuTrigger className="group">
        <TaskTrigger task={task} isOverlay={isOverlay} />
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuItem
          onClick={() => deleteTask(task.id)}
          className="cursor-pointer group"
        >
          <FaRegTrashCan className="mr-2 group-hover:text-red-500" />
          <span className="group-hover:text-red-500">Delete</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
