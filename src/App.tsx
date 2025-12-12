import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

// Lazy load SpeedInsights to avoid errors if not available
const SpeedInsights = lazy(() => 
  import("@vercel/speed-insights/react")
    .then(module => ({ default: module.SpeedInsights }))
    .catch(() => ({ default: () => null }))
);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {import.meta.env.PROD && (
            <Suspense fallback={null}>
              <SpeedInsights />
            </Suspense>
          )}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
