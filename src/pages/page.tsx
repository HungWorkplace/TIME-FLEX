import { Stack } from "@mui/material";
import MainArea from "@/modules/main-area/MainArea";
import ClockArea from "@/modules/clock-area/ClockArea";
import SidebarSection from "@/modules/sidebar/SidebarSection";

// # Component
export default function HomePage() {
  return (
    <Stack direction={"row"} sx={{ height: "100%" }}>
      <SidebarSection />
      <MainArea sx={{ flex: 2 }} />
      <ClockArea
        sx={{
          flex: 1,
          display: { xs: "none", md: "block" },
          pt: "1.75rem",
          px: "1.25rem",
          borderLeft: 1,
          borderColor: "border.main",
        }}
      />
    </Stack>
  );
}
