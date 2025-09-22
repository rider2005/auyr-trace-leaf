import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CollectorPortal from "./pages/CollectorPortal";
import ManufacturerPortal from "./pages/ManufacturerPortal";
import RegulatorPortal from "./pages/RegulatorPortal";
import ConsumerPortal from "./pages/ConsumerPortal";
import BlockchainExplorer from "./pages/BlockchainExplorer";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collector" element={<CollectorPortal />} />
          <Route path="/manufacturer" element={<ManufacturerPortal />} />
          <Route path="/regulator" element={<RegulatorPortal />} />
          <Route path="/consumer" element={<ConsumerPortal />} />
          <Route path="/explorer" element={<BlockchainExplorer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
