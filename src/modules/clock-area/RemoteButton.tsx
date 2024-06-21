import { IconButton, Stack, SxProps, Theme } from "@mui/material";
import { MdSettingsBackupRestore } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { Task } from "@/store/tasks";
import {
  checkNotificationPermission,
  showNotification,
} from "@/utils/notificationPermission";
import { formatTime } from "@/utils/formatTimer";

interface RemoteButtonProps {
  sx?: SxProps<Theme>;
  task: Task | undefined;
  timer: number;
  endTime: React.MutableRefObject<string>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
}

// # Component
export default function RemoteButton({
  sx,
  task,
  timer,
  endTime,
  setTimer,
}: RemoteButtonProps) {
  const [isRunning, setIsRunning] = useState(false);
  const timeOutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && timer > 0) {
      timeOutId.current = setTimeout(() => {
        setTimer((prev) => prev - 1000);
      }, 1000);
    } else if (timer <= 0 && isRunning) {
      setIsRunning(false);
      clearTimeout(timeOutId.current!);
      showNotification("Time's up!", "Your task is completed.");
      new Audio("/src/assets/alarm-digital.mp3").play();
    }

    return () => {
      clearTimeout(timeOutId.current!);
    };
  }, [isRunning, setTimer, timer]);

  const handleStart = () => {
    checkNotificationPermission();

    if (!isRunning && timer > 0) {
      setIsRunning(true);
      endTime.current = formatTime(new Date().getTime() + timer);

      setTimer((prev) => prev - 1000);
      timeOutId.current = setTimeout(() => {
        setTimer((prev) => prev - 1000);
      }, 1000);
    } else {
      setIsRunning(false);
      clearTimeout(timeOutId.current!);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    clearTimeout(timeOutId.current!);
    setTimer(task!.duration * 60 * 1000);
  };

  return (
    <Stack
      direction={"row"}
      justifyContent={"center"}
      spacing={2}
      sx={{ mt: 2, ...sx }}
    >
      {/* start */}
      <IconButton
        onClick={handleStart}
        sx={{ border: 1, borderColor: "border.main", borderRadius: "50%" }}
        disabled={!task || task.duration <= 0}
      >
        {isRunning ? (
          <FaPause size={30} />
        ) : (
          <FaPlay size={30} className="pl-1" />
        )}
      </IconButton>

      {/* reset */}
      <IconButton
        onClick={handleReset}
        sx={{ border: 1, borderColor: "border.main", borderRadius: "50%" }}
        disabled={!task || task.duration <= 0}
      >
        <MdSettingsBackupRestore size={30} />
      </IconButton>
    </Stack>
  );
}
