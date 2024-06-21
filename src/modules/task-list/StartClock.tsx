import { Box, IconButton, Slide, SlideProps } from "@mui/material";
import { FaPlay } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { ReactElement, forwardRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import ClockArea from "../clock-area/ClockArea";

// # Component
export default function StartClock() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setOpenDialog(true)}
        sx={{
          border: "1px solid #dae2ed",
          borderRadius: "0.375rem",
          bgcolor: "white",
          ml: "0.5rem",
          display: { xs: "flex", md: "none" },
        }}
      >
        <FaPlay size={15} />
      </IconButton>

      <Dialog
        fullScreen
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        TransitionComponent={Transition}
      >
        <IconButton
          onClick={() => setOpenDialog(false)}
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <IoClose size={30} />
        </IconButton>

        <Box sx={{ px: 10, pt: 6 }}>
          <ClockArea />
        </Box>
      </Dialog>
    </>
  );
}

const Transition = forwardRef(function Transition(
  props: SlideProps & { children: ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
