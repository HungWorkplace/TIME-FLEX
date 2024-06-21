import { Box, Button, MenuItem } from "@mui/material";
import { usePageItemContext } from "./context/page-item";
import { useState } from "react";
import { usePages } from "@/store/pages";
import { useNavigate } from "react-router-dom";

interface DeletePageProps {
  onCloseMenu: () => void;
}

// # Component
export default function DeletePage({ onCloseMenu }: DeletePageProps) {
  const page = usePageItemContext();
  const [openDialog, setOpenDialog] = useState(false);
  const deletePage = usePages((state) => state.deletePage);

  const navigate = useNavigate();

  const handleDeletePage = () => {
    navigate("..");
    // deletePage(page.slug);
    setOpenDialog(false);
    onCloseMenu();
  };

  return (
    <>
      <MenuItem
        onClick={() => {
          // setOpenDialog(true);
          navigate("..", { relative: "path" });
        }}
        sx={{
          fontSize: "0.875rem",
          borderRadius: 1,
          height: "30px",
          minHeight: "30px",
          lineHeight: "30px",
          color: "#222222",
          ":hover": { color: "#ef4444" },
        }}
      >
        <Box component={"span"}>Delete</Box>
      </MenuItem>
    </>
  );
}
