import { Box } from "@mui/material";
import PageItem from "./page-item/PageItem";

// # Component
export default function Pages() {
  return (
    <>
      <Box
        component={"p"}
        sx={{
          fontWeight: "500",
          mt: 2.5,
          fontSize: "0.75rem",
          color: "#959595",
          py: 0.2,
          pl: "0.875rem",
        }}
      >
        Pages
      </Box>
      <PageItem />
    </>
  );
}
