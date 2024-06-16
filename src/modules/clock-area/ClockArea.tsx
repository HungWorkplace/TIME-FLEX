import { formatDuration, formatTime } from "@/utils/formatTimer";
import { showNotification } from "@/utils/showNofification";
import { Box, IconButton, Stack, SxProps, Theme } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { TfiBell } from "react-icons/tfi";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { MdSettingsBackupRestore } from "react-icons/md";

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
  const [clockFontSize, setClockFontSize] = useState(0);
  const [endTimeFontSize, setEndTimeFontSize] = useState(0);
  const clockWrapperRef = useRef<HTMLDivElement | null>(null);
  const [timer, setTimer] = useState(10000);
  const endTime = useRef(formatTime(new Date().getTime() + timer));
  const [isPlay, setIsPlay] = useState(false);

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

  // This useEffect is used to create a timer that counts down every second
  useEffect(() => {
    if (timer <= 0) {
      // showNotification("Time's up!");
      // new Audio("/src/assets/alarm-digital.mp3").play();
      return;
    }

    const timeOutId = setTimeout(() => {
      setTimer(timer - 1000);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [timer]);

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
            >
              <TfiBell />
              <span>{endTime.current}</span>
            </Stack>
          </Box>
        </Stack>
      </Square>

      <Stack
        direction={"row"}
        justifyContent={"center"}
        spacing={2}
        sx={{ mt: 2 }}
      >
        <IconButton
          aria-label="play"
          onClick={() => setIsPlay(!isPlay)}
          sx={{ border: 1, borderColor: "border.main", borderRadius: "50%" }}
        >
          {isPlay ? (
            <FaPause size={30} />
          ) : (
            <FaPlay size={30} className="pl-1" />
          )}
        </IconButton>

        <IconButton
          aria-label="reset"
          sx={{ border: 1, borderColor: "border.main", borderRadius: "50%" }}
        >
          <MdSettingsBackupRestore size={30} />
        </IconButton>
      </Stack>
    </Box>
  );
}
