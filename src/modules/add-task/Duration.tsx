import { NumberInput } from "@/components/NumberInput";
import { useAddTaskValue } from "@/store/add-task-value";
import { useTasks } from "@/store/tasks";

// # Component
export default function Duration() {
  const duration = useAddTaskValue((state) => state.duration);
  const content = useAddTaskValue((state) => state.content);
  const setDuration = useAddTaskValue((state) => state.setDuration);
  const addTask = useTasks((state) => state.addTask);
  const editor = useAddTaskValue((state) => state.editor);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (!content) return;
      addTask(content, duration);

      editor?.commands.clearContent();
      editor?.commands.focus();
    }
  };

  return (
    <NumberInput
      min={0}
      value={duration}
      onKeyDown={handleKeyDown}
      // onChange={(_, value) => setDuration(value || 0)}
      onInputChange={(event) => setDuration(parseInt(event.target.value) || 0)}
    />
  );
}
