import { Checkbox, Stack } from "@mui/material";
import TaskContent from "./TaskContent";
import { RxDragHandleDots2 } from "react-icons/rx";

// # Component
export default function Task() {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        className="group"
        sx={{
          position: "relative",
          pr: "0.75rem",
          borderRadius: "0.375rem",
          ":hover": { bgcolor: "#f8f8f8" },
        }}
      >
        <RxDragHandleDots2 className="hidden group-hover:block text-[#757575] absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full cursor-move" />

        <Checkbox size="small" />
        <TaskContent sx={{ flex: 1 }} />
      </Stack>
    </>
  );
}
