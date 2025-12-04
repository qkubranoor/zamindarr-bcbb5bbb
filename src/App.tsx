import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Documents from "./pages/Documents";
import DueDiligenceForm from "./pages/DueDiligenceForm";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Apartments from "./pages/Apartments";
import WorkingSpace from "./pages/WorkingSpace";
import HNIListings from "./pages/HNIListings";
import Projects2026 from "./pages/Projects2026";
import StickyFooter from "./components/StickyFooter";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/due-diligence-form" element={<DueDiligenceForm />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="/apartments" element={<Apartments />} />
              <Route path="/working-space" element={<WorkingSpace />} />
              <Route path="/hni-listings" element={<HNIListings />} />
              <Route path="/projects-2026" element={<Projects2026 />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <StickyFooter />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
