import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Menu } from "@/components/sections/Menu";
import { Reviews } from "@/components/sections/Reviews";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/layout/Footer";
import { MobileOrderButton } from "@/components/layout/MobileOrderButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col relative">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Reviews />
      <Cta />
      <Footer />
      <MobileOrderButton />
    </main>
  );
}
