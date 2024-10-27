import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";

const queryClient = new QueryClient({
  defaultOptions: { // this is global declaration we can also declaring in queries
    queries: {
      gcTime: 2 * 60 * 1000, // cacheTime changed to gcTime
    }
  }
});

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
