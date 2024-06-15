import { Collapse, Stack } from "@mui/material";
import SidebarModal from "@/modules/sidebar/SidebarModal";
import MainArea from "@/modules/main-area/MainArea";
import Sidebar from "@/modules/sidebar/Sidebar";
import { useSidebar } from "@/store/sidebar";
import ClockArea from "@/modules/clock-area/ClockArea";

// # Component
export default function HomePage() {
  const sidebarFixOpen = useSidebar((state) => state.inSideOpen);

  return (
    <Stack direction={"row"} sx={{ height: "100%" }}>
      <SidebarModal />
      <Collapse
        in={sidebarFixOpen}
        orientation="horizontal"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Sidebar
          isModal={false}
          sx={{ width: sidebarFixOpen ? 274 : 0, bgcolor: "#fcfaf8" }}
        />
      </Collapse>
      <MainArea sx={{ flex: 2 }} />
      <ClockArea sx={{ flex: 1, display: { xs: "none", md: "block" } }} />
    </Stack>
  );
}
