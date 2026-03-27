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
      <div className="mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between gap-2">

          {/* Logo */}
          <Link href="/" className="shrink-0 group">
            <img
              src={`${import.meta.env.BASE_URL}logo-full.webp`}
              alt="Roadside Pantry"
              className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Nav links — always visible */}
          <nav className="flex items-center gap-2 md:gap-3 lg:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs sm:text-xs md:text-xs lg:text-sm font-extrabold transition-colors uppercase tracking-wider whitespace-nowrap px-1.5 sm:px-2 md:px-2",
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
              className="relative w-9 h-9 sm:w-9 sm:h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200 shrink-0"
              aria-label="Open cart"
            >
              <ShoppingBag size={16} className="sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[8px] md:text-[7px] lg:text-[8px] font-bold rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center leading-none">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>

            <a
              href={TOAST_TAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 sm:px-5 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-xs sm:text-xs md:text-xs lg:text-sm hover:-translate-y-0.5 glow-primary-hover transition-all duration-300 uppercase tracking-wide whitespace-nowrap shrink-0"
            >
              Order
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
}
