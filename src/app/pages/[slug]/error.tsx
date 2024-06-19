import { useRouteError } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import ErrorLayout from "@/components/layout/ErrorLayout";

// # Component
export default function ErrorBoundary() {
  const error = useRouteError() as Response;
  const [message, setMessage] = useState("");

  useEffect(() => {
    error.json().then((data) => {
      setMessage(data.message);
    });
  }, [error]);

  return (
    <ErrorLayout>
      <img
        src="/src/assets/page-not-found.png"
        alt="page not found"
        className="max-w-64"
      />
      <Box sx={{ textAlign: "center" }}>
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-lg font-medium">{message}</p>
      </Box>
    </ErrorLayout>
  );
}
