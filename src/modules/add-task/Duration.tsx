import { NumericFormat } from "react-number-format";
import { useAddTaskValue } from "@/store/add-task-value";
import { useTasks } from "@/store/tasks";
import { useParams } from "react-router-dom";

// # Component
export default function Duration() {
  const duration = useAddTaskValue((state) => state.duration);
  const setDuration = useAddTaskValue((state) => state.setDuration);
  const addTask = useTasks((state) => state.addTask);
  const editor = useAddTaskValue((state) => state.editor);

  const { slug } = useParams();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      if (!editor || !slug) return;

      if (editor.getText().trim() === "") return;

      addTask(editor.getHTML(), slug, duration);

      editor.commands.clearContent();
      editor.commands.focus();
      setDuration(0);
    }
  };

  return (
    <NumericFormat
      value={duration}
      onValueChange={({ value }) => setDuration(+value || 0)}
      onKeyDown={handleKeyDown}
      thousandSeparator={false} // Don't use separator
      allowNegative={false} // Don't allow negative numbers
      decimalScale={0} // Don't allow decimal numbers
      allowLeadingZeros={false} // Don't allow leading zeros
      className="bg-[#f8f8f8] text-[#191919] w-16 focus:border-[#4772fa] border border-transparent px-3 rounded-md outline-none text-sm text-center"
    />
  );
}
