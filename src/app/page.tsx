import { Box, Stack } from "@mui/material";
import ClockArea from "@/modules/clock-area/ClockArea";
import SidebarSection from "@/modules/sidebar/SidebarSection";
import { Outlet } from "react-router-dom";

// # Component
export default function HomePage() {
  // const lastVisitedPageSlug = usePages((state) => state.lastVisitedPageSlug);
  // const pageIndex = usePages((state) =>
  //   state.pages.findIndex((page) => page.slug === lastVisitedPageSlug)
  // );

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (pageIndex === -1) {
  //     navigate("/pages");
  //     return;
  //   }

  //   navigate(`/pages/${lastVisitedPageSlug}`);
  // }, [lastVisitedPageSlug, pageIndex, navigate]);

  return (
    <Stack direction={"row"} sx={{ height: "100%" }}>
      <SidebarSection />

      <Box sx={{ pl: 1.5, flex: 2 }}>
        <Outlet />
      </Box>

      <ClockArea
        sx={{
          flex: 1,
          display: { xs: "none", md: "block" },
          pt: "1.75rem",
          px: "1.25rem",
          borderLeft: 1,
          borderColor: "border.main",
        }}
      />
    </Stack>
  );
}
