import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Work from "@/pages/Work";
import Pricing from "@/pages/Pricing";
import Process from "@/pages/Process";
import SwissHome from "@/pages/SwissHome";
import AnimationDemo from "@/pages/AnimationDemo";
import AdminLogin from "@/pages/AdminLogin";
import AdminDashboard from "@/pages/AdminDashboard";
import NotFound from "@/pages/not-found";
import CommandPalette from "@/components/CommandPalette";
import { AdminProvider } from "@/contexts/AdminContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/process" component={Process} />
      <Route path="/swiss" component={SwissHome} />
      <Route path="/animations" component={AnimationDemo} />
      <Route path="/admin" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AdminProvider>
          <CommandPalette />
          <Toaster />
          <Router />
        </AdminProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
