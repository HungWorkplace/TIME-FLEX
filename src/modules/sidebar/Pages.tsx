import { Box, IconButton, Stack } from "@mui/material";
import PageItem from "./page-item/PageItem";
import { FaPlus } from "react-icons/fa";

// # Component
export default function Pages() {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          mt: 2.5,
          fontSize: "0.75rem",
          py: 0.2,
          px: "0.875rem",
          "&:hover .MuiIconButton-root": {
            visibility: "visible",
          },
        }}
      >
        <Box
          component={"p"}
          sx={{
            fontWeight: "500",
            color: "#959595",
          }}
        >
          Pages
        </Box>

        <IconButton sx={{ visibility: "hidden" }}>
          <FaPlus size={12} />
        </IconButton>
      </Stack>

      <PageItem />
    </>
  );
}
