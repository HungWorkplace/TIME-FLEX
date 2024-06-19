import { Box, Button, Stack, SxProps, Theme } from "@mui/material";
import { useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Collapse } from "@mui/material";
import Task from "../Task";
import { cn } from "@/lib/utils";
import { useTasks } from "@/store/tasks";
import { useParams } from "react-router-dom";

interface CompleteProps {
  sx?: SxProps<Theme>;
}

// # Component
export default function Complete({ sx }: CompleteProps) {
  const { slug } = useParams();
  const tasks = useTasks((state) =>
    state.tasks.filter((task) => task.completed && task.pageSlug === slug)
  );

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  if (!tasks.length) return null;

  return (
    <Box ref={containerRef} sx={{ ...sx }}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          color: "#191919",
          textTransform: "none",
          fontSize: "0.75rem",
          width: "100%",
          justifyContent: "flex-start",
          gap: 1,
        }}
      >
        <IoChevronDown className={cn({ "-rotate-90": !isOpen })} />
        <span>Complete</span>
        <Box component={"span"} sx={{ fontSize: "0.625rem", color: "gray" }}>
          {tasks.length}
        </Box>
      </Button>
      <Collapse in={isOpen}>
        <Stack>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
}
