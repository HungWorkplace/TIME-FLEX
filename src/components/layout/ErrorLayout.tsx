import ToggleSidebarBtn from "@/modules/main-area/header/ToggleSidebarBtn";
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

interface ErrorLayoutProps {
  children: React.ReactNode;
  toggleButton?: boolean;
}

// # Component
const ErrorLayout = ({ children, toggleButton }: ErrorLayoutProps) => {
  return (
    <div className="w-full h-full relative">
      {toggleButton && (
        <Box sx={{ position: "absolute", top: 10, left: 2 }}>
          <ToggleSidebarBtn />
        </Box>
      )}
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", height: "100%" }}
      >
        {children}
      </Stack>
    </div>
  );
};

const GoBackButton = () => {
  return (
    <Link to={"/"}>
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          mt: 2,
          bgcolor: "#385a64",
          ":hover": { bgcolor: "#3e646f" },
        }}
      >
        Go back to home
      </Button>
    </Link>
  );
};

export { ErrorLayout, GoBackButton };
