import { Box, SxProps, Theme } from "@mui/material";

interface ClockAreaProps {
  sx?: SxProps<Theme>;
}

// # Component
export default function ClockArea({ sx }: ClockAreaProps) {
  return <Box sx={{ ...sx }}>ClockArea</Box>;
}
