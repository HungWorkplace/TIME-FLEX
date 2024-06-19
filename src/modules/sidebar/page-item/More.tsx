import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, IconButton } from "@mui/material";
import { usePageItemContext } from "./context/page-item";
import { usePages } from "@/store/pages";
import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface MoreProps {
  onEditable: (value: boolean) => void;
}

// # Component
export default function More({ onEditable }: MoreProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const page = usePageItemContext();
  const [openDialog, setOpenDialog] = useState(false);
  const deletePage = usePages((state) => state.deletePage);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRename = () => {
    onEditable(true);
    handleClose();
  };

  const handleDeletePage = () => {
    navigate("/pages");
    // deletePage(page.slug);
    // setOpenDialog(false);
    // onCloseMenu();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        className="group-hover:visible"
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
          onClick={handleRename}
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

        <AlertDialog>
          <AlertDialogTrigger>
            <MenuItem
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
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => navigate("/pages")}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Menu>
    </>
  );
}
