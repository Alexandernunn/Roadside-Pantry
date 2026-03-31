import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Home from "@/pages/Home";
import MenuPage from "@/pages/MenuPage";
import AboutPage from "@/pages/AboutPage";
import GalleryPage from "@/pages/GalleryPage";
import ReviewsPage from "@/pages/ReviewsPage";
import CartPage from "@/pages/CartPage";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileOrderButton } from "@/components/layout/MobileOrderButton";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const queryClient = new QueryClient();

const PAYPAL_CLIENT_ID = (import.meta.env.VITE_PAYPAL_CLIENT_ID as string) || "";

function Router() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Navbar />
      <CartDrawer />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/reviews" component={ReviewsPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
      <Footer />
      <MobileOrderButton />
    </WouterRouter>
  );
}

function App() {
  return (
    <PayPalScriptProvider
      options={{
        clientId: PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: "capture",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CartProvider>
            <Router />
          </CartProvider>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </PayPalScriptProvider>
  );
}

export default App;
