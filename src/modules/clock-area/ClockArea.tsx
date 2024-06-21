import { formatDuration, formatTime } from "@/utils/formatTimer";
import { Box, Stack, SxProps, Theme } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { TfiBell } from "react-icons/tfi";
import RemoteButton from "./RemoteButton";
import Task from "./Task";
import { useTasks } from "@/store/tasks";

const Square = styled(Box)({
  width: "100%",
  position: "relative",
  "&::before": {
    content: '""',
    display: "block",
    paddingTop: "100%",
  },
  "& > *": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

interface ClockAreaProps {
  sx?: SxProps<Theme>;
}

// # Component
export default function ClockArea({ sx }: ClockAreaProps) {
  const selectedTaskId = useTasks((state) => state.selectedTaskId);
  const tasks = useTasks((state) => state.tasks);

  const [clockFontSize, setClockFontSize] = useState(0);
  const [endTimeFontSize, setEndTimeFontSize] = useState(0);
  const clockWrapperRef = useRef<HTMLDivElement | null>(null);
  const [timer, setTimer] = useState(0);
  const endTime = useRef("");

  const selectedTask = tasks.find((task) => task.id === selectedTaskId);

  useEffect(() => {
    if (!selectedTask) {
      setTimer(0);
      return;
    }

    const durationMillisecond = selectedTask.duration * 60 * 1000;
    setTimer(durationMillisecond);
    endTime.current = formatTime(new Date().getTime() + durationMillisecond);
  }, [selectedTask]);

  // This useEffect is used to calculate the font size of the clock
  useEffect(() => {
    const clockWrapper = clockWrapperRef.current;

    if (!clockWrapper) return;

    // Resize Observer API
    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        setClockFontSize(width / 5);
        setEndTimeFontSize(width / 16);
      }
    };

    // Create Resize Observer
    const resizeObserver = new ResizeObserver(handleResize);

    resizeObserver.observe(clockWrapper);

    // Cleanup
    return () => {
      resizeObserver.unobserve(clockWrapper);
    };
  }, []);

  return (
    <Box sx={{ ...sx }}>
      <Square sx={{ maxWidth: "25rem", mx: "auto" }}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          ref={clockWrapperRef}
          sx={{ backgroundColor: "#F5F5F5", borderRadius: "50%" }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                fontSize: clockFontSize,
                fontWeight: "bold",
                fontFamily: "Nunito",
              }}
            >
              {formatDuration(timer)}
            </Box>
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={0.5}
              sx={{
                position: "absolute",
                left: "50%",
                bottom: 4,
                fontSize: endTimeFontSize,
                transform: "translateX(-50%) translateY(100%)",
                color: "#A1A1A1",
              }}
              display={
                selectedTask && selectedTask.duration > 0 ? "flex" : "none"
              }
            >
              <TfiBell />
              <span>{endTime.current}</span>
            </Stack>
          </Box>
        </Stack>
      </Square>

      <RemoteButton
        timer={timer}
        setTimer={setTimer}
        endTime={endTime}
        task={selectedTask}
      />

      <Task selectedTask={selectedTask} className="mt-9 font-bold" />
    </Box>
  );
}
