import { Box, IconButton, Stack } from "@mui/material";
import PageList from "./page-item/PageItem";
import { FaPlus } from "react-icons/fa";
import { usePages } from "@/store/pages";
import { useNavigate } from "react-router-dom";
import { usePageTitleEditorStore } from "@/store/pageTitleEditor";

// # Component
export default function PageManager() {
  const createPage = usePages((state) => state.createPage);
  const editor = usePageTitleEditorStore((state) => state.editor);
  const navigate = useNavigate();

  const handleCreateBtn = () => {
    const slug = "untitled-" + Date.now();

    createPage("Untitled", slug);
    navigate(`/pages/${slug}`);

    editor?.commands.focus();
  };

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

        <IconButton onClick={handleCreateBtn} sx={{ visibility: "hidden" }}>
          <FaPlus size={12} />
        </IconButton>
      </Stack>

      <PageList />
    </>
  );
}
