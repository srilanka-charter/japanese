import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import PlanPage from "./pages/PlanPage";
import VehiclesPage from "./pages/VehiclesPage";
import Course45Page from "./pages/Course45Page";
import Course56Page from "./pages/Course56Page";
import Course67Page from "./pages/Course67Page";
import ThankYouPage from "./pages/ThankYouPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import PricingPage from "./pages/PricingPage";
import FaqArticlePage from "./pages/FaqArticlePage";
import SigiriyaPage from "./pages/SigiriyaPage";
import KandyPage from "./pages/KandyPage";
import GallePage from "./pages/GallePage";
import NuwaraEliyaPage from "./pages/NuwaraEliyaPage";
import ActivityPage from "./pages/ActivityPage";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/plan" component={PlanPage} />
      <Route path="/vehicles" component={VehiclesPage} />
      <Route path="/course/3-4days" component={Course45Page} />
      <Route path="/course/4-5days" component={Course56Page} />
      <Route path="/course/5-6days" component={Course67Page} />
      <Route path="/thanks" component={ThankYouPage} />
      <Route path="/privacy" component={PrivacyPolicyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/faq" component={FaqArticlePage} />
      <Route path="/sigiriya" component={SigiriyaPage} />
      <Route path="/kandy" component={KandyPage} />
      <Route path="/galle" component={GallePage} />
      <Route path="/nuwara-eliya" component={NuwaraEliyaPage} />
      <Route path="/activity" component={ActivityPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
