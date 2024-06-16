import { useSidebar } from "@/store/sidebar";
import { Avatar, Stack, Box, IconButton, Button } from "@mui/material";
import { BsLayoutSidebar } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";
import AccountMenu from "./AccountMenu";
import { useState } from "react";

interface AccountProps {
  isModal?: boolean;
}

// # Component
export default function Account({ isModal }: AccountProps) {
  const onClose = useSidebar((state) => state.closeModal);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Button
        onClick={handleButtonClick}
        sx={{ mt: 1, pl: "0.875rem", textTransform: "none", color: "black" }}
      >
        <Stack spacing={1} direction={"row"} alignItems={"center"}>
          <Avatar
            src="/src/assets/no-avatar.jpg"
            alt="avatar"
            sx={{ width: 26, height: 26 }}
          />
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Box component={"p"} sx={{ fontWeight: "500", fontSize: 13 }}>
              John Doe
            </Box>
            <IoChevronDown color="#757575" />
          </Stack>
        </Stack>
      </Button>

      <AccountMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />

      {isModal && (
        <IconButton aria-label="close side-bar" onClick={() => onClose(false)}>
          <BsLayoutSidebar color="#757575" size={19} />
        </IconButton>
      )}
    </Stack>
  );
}
