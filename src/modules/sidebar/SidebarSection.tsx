import { useSidebar } from "@/store/sidebar";
import SidebarModal from "./SidebarModal";
import { Collapse } from "@mui/material";
import Sidebar from "./Sidebar";

// # Component
export default function SidebarSection() {
  const sidebarFixOpen = useSidebar((state) => state.inSideOpen);

  return (
    <>
      <SidebarModal />
      <Collapse
        in={sidebarFixOpen}
        orientation="horizontal"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Sidebar
          isModal={false}
          sx={{ width: sidebarFixOpen ? 274 : 0, bgcolor: "#f8fafc" }}
        />
      </Collapse>
    </>
  );
}
