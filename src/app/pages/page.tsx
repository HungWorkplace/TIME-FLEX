import ErrorLayout from "@/components/layout/ErrorLayout";
import { Button } from "@mui/material";

// # Component
export default function PagesRoot() {
  return (
    <ErrorLayout>
      <img
        src="/src/assets/creative-illustration.jpg"
        alt="creative banner"
        className="max-w-[23rem]"
      />

      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          mt: 2,
          bgcolor: "#102C57",
          ":hover": { bgcolor: "#1c4077" },
        }}
      >
        Create a new Page
      </Button>
    </ErrorLayout>
  );
}
