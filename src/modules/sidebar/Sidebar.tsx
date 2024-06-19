import { Stack, SxProps, Theme } from "@mui/material";
import Account from "./account/Account";
import PageManager from "./Pages";

interface SidebarProps {
  sx?: SxProps<Theme>;
  isModal: boolean;
}

// # Component
export default function Sidebar({ sx, isModal }: SidebarProps) {
  return (
    <Stack sx={{ py: 1, px: "0.625rem", height: "100%", ...sx }}>
      <Account isModal={isModal} />
      <PageManager />
    </Stack>
  );
}
