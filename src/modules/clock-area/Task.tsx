import { cn } from "@/lib/utils";
import { Task as TaskType } from "@/store/tasks";

interface TaskProps {
  className?: string;
  selectedTask: TaskType | undefined;
}

// # Component
export default function Task({ className, selectedTask }: TaskProps) {
  if (!selectedTask) return null;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: selectedTask.title }}
      className={cn("text-center border-t pt-3", className)}
    />
  );
}
