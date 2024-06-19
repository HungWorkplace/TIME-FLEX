import { Stack, SxProps, Theme } from "@mui/material";
import PageTitle from "./PageTitle";
import ToggleSidebarBtn from "./ToggleSidebarBtn";

interface HeaderProps {
  sx?: SxProps<Theme>;
}

// # Component
export default function Header({ sx }: HeaderProps) {
  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"} sx={{ ...sx }}>
      <ToggleSidebarBtn />

      {/* Page Title */}
      <PageTitle />
    </Stack>
  );
}
