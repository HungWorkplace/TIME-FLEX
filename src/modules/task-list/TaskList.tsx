import { Stack, SxProps, Theme } from "@mui/material";
import { Scrollbars } from "react-custom-scrollbars-2";
import Complete from "./completed-tasks/Complete";
import IncompleteTask from "./incomplete-tasks/IncompleteTask";

interface TaskListProps {
  sx?: SxProps<Theme>;
}

// # Component
export default function TaskList({ sx }: TaskListProps) {
  return (
    <Scrollbars>
      <Stack
        sx={{
          pb: "3.125rem",
          ...sx,
        }}
      >
        <IncompleteTask />
        <Complete sx={{ mt: "0.75rem" }} />
      </Stack>
    </Scrollbars>
  );
}
