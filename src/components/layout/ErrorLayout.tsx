import ToggleSidebarBtn from "@/modules/main-area/header/ToggleSidebarBtn";
import { Box, Stack } from "@mui/material";

interface ErrorLayoutProps {
  children: React.ReactNode;
}

// # Component
export default function ErrorLayout({ children }: ErrorLayoutProps) {
  return (
    <>
      <Box sx={{ position: "fixed", top: 0, left: 0 }}>
        <ToggleSidebarBtn />
      </Box>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", height: "100%" }}
      >
        {children}
      </Stack>
    </>
  );
}
