import { useSidebar } from "@/store/sidebar";
import { IconButton, Stack, SxProps, Theme, Typography } from "@mui/material";
import { HiOutlineMenu } from "react-icons/hi";

interface HeaderProps {
  sx?: SxProps<Theme>;
}

// # Component
export default function Header({ sx }: HeaderProps) {
  const toggle = useSidebar((state) => state.closeModal);
  const sidebarFixOpen = useSidebar((state) => state.inSideOpen);
  const toggleSidebarFix = useSidebar((state) => state.closeInSide);

  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"} sx={{ ...sx }}>
      <IconButton
        onClick={() => toggle(true)}
        aria-label="side-bar"
        sx={{ display: { xs: "inline-flex", sm: "none" } }}
      >
        <HiOutlineMenu color="#757575" size={22} />
      </IconButton>

      <IconButton
        onClick={() => toggleSidebarFix(!sidebarFixOpen)}
        aria-label="side-bar"
        sx={{ display: { xs: "none", sm: "inline-flex" } }}
      >
        <HiOutlineMenu color="#757575" size={22} />
      </IconButton>

      <Typography variant="h5" sx={{ fontWeight: "500", fontSize: 20 }}>
        Task Manager
      </Typography>
    </Stack>
  );
}
