import { useSidebar } from "@/store/sidebar";
import { IconButton } from "@mui/material";
import { HiOutlineMenu } from "react-icons/hi";

// # Component
export default function ToggleSidebarBtn() {
  const toggle = useSidebar((state) => state.closeModal);
  const sidebarFixOpen = useSidebar((state) => state.inSideOpen);
  const toggleSidebarFix = useSidebar((state) => state.closeInSide);

  return (
    <>
      {/* Toggle Sidebar */}
      <IconButton
        onClick={() => toggle(true)}
        aria-label="side-bar"
        sx={{ display: { xs: "inline-flex", sm: "none" } }}
      >
        <HiOutlineMenu color="#757575" size={22} />
      </IconButton>

      {/* Toggle Sidebar */}
      <IconButton
        onClick={() => toggleSidebarFix(!sidebarFixOpen)}
        aria-label="side-bar"
        sx={{ display: { xs: "none", sm: "inline-flex" } }}
      >
        <HiOutlineMenu color="#757575" size={22} />
      </IconButton>
    </>
  );
}
