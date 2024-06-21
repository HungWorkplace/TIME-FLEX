import { useRouteError } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ErrorLayout, GoBackButton } from "@/components/layout/ErrorLayout";

// # Component
export default function ErrorBoundary() {
  const error = useRouteError() as Response;
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await error.json();
        setMessage(data.message);
      } catch (err) {
        console.error("Error parsing JSON:", err);
        setMessage("An unexpected error occurred.");
      }
    };

    fetchData();
  }, [error]);

  return (
    <ErrorLayout>
      <img
        src="/assets/page-not-found.png"
        alt="page not found"
        className="max-w-64 w-full"
      />
      <Box sx={{ textAlign: "center" }}>
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-lg font-medium">{message}</p>
      </Box>

      <GoBackButton />
    </ErrorLayout>
  );
}
