import { ErrorLayout, GoBackButton } from "@/components/layout/ErrorLayout";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

// # Component
export default function HomeErrorBoundary() {
  const error = useRouteError();
  const [message, setMessage] = useState("");
  const [statusCode, setStatusCode] = useState<number | null>(null);

  useEffect(() => {
    if (isRouteErrorResponse(error)) {
      setStatusCode(error.status);
      setMessage(error.statusText);
    }
  }, [error]);

  return (
    <ErrorLayout>
      <img
        src="/assets/page-not-found.png"
        alt="page not found"
        className="max-w-64 w-full"
      />
      <Box sx={{ textAlign: "center" }}>
        <h1 className="text-4xl font-bold">{statusCode}</h1>
        <p className="text-lg font-medium">{message}</p>
      </Box>

      <GoBackButton />
    </ErrorLayout>
  );
}
