import Main from "./pages/Main";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Main/>
      </QueryClientProvider>
    </>
  );
}
