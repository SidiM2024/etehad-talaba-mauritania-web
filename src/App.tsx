
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

import Index from "./pages/Index";
import EducationGuide from "./pages/EducationGuide";
import Registration from "./pages/Registration";
import WhatsAppGroups from "./pages/WhatsAppGroups";
import Resources from "./pages/Resources";
import Schedules from "./pages/Schedules";
import Activities from "./pages/Activities";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/education-guide" element={<EducationGuide />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/whatsapp-groups" element={<WhatsAppGroups />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/schedules" element={<Schedules />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
