import { Drawer } from "@mui/material";
import { useSidebar } from "@/store/sidebar";
import Sidebar from "./Sidebar";

// # Component
export default function SidebarModal() {
  const isOpen = useSidebar((state) => state.isOpen);
  const onClose = useSidebar((state) => state.closeModal);

  return (
    <Drawer open={isOpen} onClose={() => onClose(false)}>
      <Sidebar sx={{ width: 306 }} isModal />
    </Drawer>
  );
}
