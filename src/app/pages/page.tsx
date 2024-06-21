import { ErrorLayout } from "@/components/layout/ErrorLayout";
import { useCreatePage } from "@/hooks/useCreatePage";
import { Button } from "@mui/material";

// # Component
export default function PagesRoot() {
  const createPageAction = useCreatePage();

  return (
    <ErrorLayout toggleButton>
      <img
        src="/assets/creative-illustration.jpg"
        alt="creative banner"
        className="max-w-xs w-full"
      />

      <Button
        onClick={createPageAction}
        variant="contained"
        sx={{
          textTransform: "none",
          mt: 2,
          bgcolor: "#385a64",
          ":hover": { bgcolor: "#3e646f" },
        }}
      >
        Create a new Page
      </Button>
    </ErrorLayout>
  );
}
