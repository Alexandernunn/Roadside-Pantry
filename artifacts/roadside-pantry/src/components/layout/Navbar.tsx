import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const TOAST_TAB_URL = "https://order.toasttab.com/online/roadsidepantry-1107-dickerson-pike";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border/50 py-2 shadow-lg"
          : "bg-transparent py-4"
      )}
    >
      <div className="mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="shrink-0 group">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Roadside Pantry"
              className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Nav links — always visible */}
          <nav className="flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs font-semibold transition-colors uppercase tracking-widest whitespace-nowrap",
                  location === link.href
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Cart button */}
            <button
              onClick={openCart}
              className="relative w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200"
              aria-label="Open cart"
            >
              <ShoppingBag size={16} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center leading-none">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>

            <a
              href={TOAST_TAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-xs hover:-translate-y-0.5 glow-primary-hover transition-all duration-300 uppercase tracking-wide whitespace-nowrap"
            >
              Order Now
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
}
