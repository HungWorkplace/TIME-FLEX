import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, IconButton } from "@mui/material";

// # Component
export default function More() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-label="more"
        className="more-btn"
        sx={{
          visibility: anchorEl ? "visible" : "hidden",
          color: "#9f9f9f",
          ":hover": { color: "#222222", bgcolor: "transparent" },
        }}
      >
        <BsThreeDots size={16} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          mt: -1,
          ml: -1,
          "& .MuiList-root": {
            px: 0.5,
            py: 0.5,
            minHeight: 0,
            width: "160px",
          },
          "& .MuiMenuItem-root": {
            px: 1,
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
          }}
        >
          <Box component={"span"} sx={{ color: "#222222" }}>
            Rename
          </Box>
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: "0.875rem",
            borderRadius: 1,
            height: "30px",
            minHeight: "30px",
            lineHeight: "30px",
          }}
        >
          <Box component={"span"} sx={{ color: "#222222" }}>
            Delete
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
}
