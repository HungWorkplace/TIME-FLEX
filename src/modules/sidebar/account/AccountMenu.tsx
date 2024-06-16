import { Menu, MenuItem } from "@mui/material";
import { MdLogout } from "react-icons/md";

interface AccountMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
}

// # Component
export default function AccountMenu({
  anchorEl,
  open,
  handleClose,
}: AccountMenuProps) {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      sx={{
        "& .MuiList-root": {
          width: "16rem",
        },
      }}
    >
      <MenuItem
        onClick={handleClose}
        sx={{
          fontSize: "0.875rem",
          borderRadius: 1,
          height: "30px",
          minHeight: "30px",
          lineHeight: "30px",
          gap: 1.5,
        }}
      >
        <MdLogout size={20} />
        <span>Logout</span>
      </MenuItem>
    </Menu>
  );
}
