import { Switch, Route, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WhatsAppButton from "@/components/WhatsAppButton";
import { TopProgressBar } from "@/components/AILoaders";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Services from "./pages/Services";
import Solutions from "@/pages/Solutions";
import Industries from "@/pages/Industries";
import Technologies from "@/pages/Technologies";
import CaseStudies from "@/pages/CaseStudies";
import Process from "@/pages/Process";
import Careers from "@/pages/Careers";
import Blog from "@/pages/Blog";
import Support from "@/pages/Support";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/industries" component={Industries} />
      <Route path="/technologies" component={Technologies} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/process" component={Process} />
      <Route path="/careers" component={Careers} />
      <Route path="/blog" component={Blog} />
      <Route path="/support" component={Support} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function RouteProgress() {
  const [location] = useLocation();
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
    const t = window.setTimeout(() => setActive(false), 600);
    return () => window.clearTimeout(t);
  }, [location]);
  return <TopProgressBar active={active} />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <RouteProgress />
        <Router />
        <WhatsAppButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
