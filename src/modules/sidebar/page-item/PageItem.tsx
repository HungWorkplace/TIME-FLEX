import { Box, Stack } from "@mui/material";
import { CiFileOn } from "react-icons/ci";
import More from "./More";

// # Component
export default function PageItem() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      className="group"
      sx={{
        pl: "0.875rem",
        pr: "0.75rem",
        height: "2.5rem",
        borderRadius: "0.375rem",
        cursor: "pointer",
        ":hover": {
          bgcolor: "#f8f8f8",
        },
        "&:hover .more-btn": {
          visibility: "visible",
        },
      }}
    >
      <Stack spacing={1} direction={"row"} alignItems={"center"}>
        <CiFileOn color="#757575" size={18} />
        <Box component={"p"} sx={{ fontSize: "0.875rem" }}>
          Pages
        </Box>
      </Stack>

      <More />
    </Stack>
  );
}
