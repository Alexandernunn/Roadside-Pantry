import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const TOAST_TAB_URL = "https://order.toasttab.com/online/roadsidepantry-1107-dickerson-pike";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
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
          ? "bg-background/90 backdrop-blur-md border-border/50 py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Roadside Pantry Logo"
              className="w-12 h-12 rounded-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-xl leading-tight text-foreground">
                Roadside Pantry
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors uppercase tracking-widest",
                  location === link.href
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={TOAST_TAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:-translate-y-0.5 glow-primary-hover transition-all duration-300 uppercase tracking-wide"
            >
              Order Now
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-card/95 backdrop-blur-xl border-b border-border shadow-xl">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-lg font-medium transition-colors uppercase tracking-widest py-1",
                  location === link.href ? "text-primary" : "text-foreground hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={TOAST_TAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg transition-colors uppercase tracking-wide mt-2"
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
