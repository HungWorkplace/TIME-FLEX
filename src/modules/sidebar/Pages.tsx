import { Box, IconButton, Stack } from "@mui/material";
import PageList from "./page-item/PageItem";
import { FaPlus } from "react-icons/fa";
import { useCreatePage } from "@/hooks/useCreatePage";

// # Component
export default function PageManager() {
  const createPageAction = useCreatePage();

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

        {/* Create page */}
        <IconButton
          onClick={createPageAction}
          sx={{ visibility: { xs: "visible", sm: "hidden" } }}
        >
          <FaPlus size={12} />
        </IconButton>
      </Stack>

      <PageList />
    </>
  );
}
