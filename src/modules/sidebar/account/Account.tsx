import { useSidebar } from "@/store/sidebar";
import { Avatar, Stack, Box, IconButton, Button } from "@mui/material";
import { BsLayoutSidebar } from "react-icons/bs";

interface AccountProps {
  isModal?: boolean;
}

// # Component
export default function Account({ isModal }: AccountProps) {
  const onClose = useSidebar((state) => state.closeModal);

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Button
        sx={{ mt: 1, pl: "0.875rem", textTransform: "none", color: "black" }}
      >
        <Stack spacing={1} direction={"row"} alignItems={"center"}>
          <Avatar
            src="/src/assets/no-avatar.jpg"
            alt="logo"
            sx={{ width: 26, height: 26 }}
          />
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Box component={"p"} sx={{ fontWeight: "500", fontSize: 13 }}>
              TimeFlex
            </Box>
          </Stack>
        </Stack>
      </Button>

      {isModal && (
        <IconButton aria-label="close side-bar" onClick={() => onClose(false)}>
          <BsLayoutSidebar color="#757575" size={19} />
        </IconButton>
      )}
    </Stack>
  );
}
