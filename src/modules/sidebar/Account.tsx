import { useSidebar } from "@/store/sidebar";
import { Avatar, Stack, Box, IconButton } from "@mui/material";
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
      <Stack
        spacing={1}
        direction={"row"}
        alignItems={"center"}
        sx={{ mt: 1, pl: "0.875rem" }}
      >
        <Avatar
          src="/src/assets/no-avatar.jpg"
          alt="avatar"
          sx={{ width: 26, height: 26 }}
        />
        <Box component={"p"} sx={{ fontWeight: "500", fontSize: 13 }}>
          John Doe
        </Box>
      </Stack>
      {isModal && (
        <IconButton aria-label="close side-bar" onClick={() => onClose(false)}>
          <BsLayoutSidebar color="#757575" size={19} />
        </IconButton>
      )}
    </Stack>
  );
}
