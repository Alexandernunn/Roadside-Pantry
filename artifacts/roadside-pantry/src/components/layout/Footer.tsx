import { Instagram, Facebook, MapPin, Clock, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">
          
          {/* Brand & Slogan */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Roadside Pantry"
                className="w-16 h-16 rounded-full"
              />
              <span className="font-display font-bold text-2xl">Roadside Pantry</span>
            </div>
            <p className="text-muted-foreground text-lg font-display italic">
              "What's In Your Pantry?"
            </p>
            <p className="text-sm text-muted-foreground">
              Nashville's Soul Food Authority. Bold flavors, made from scratch, built for the culture.
            </p>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-6">
            <h4 className="font-display text-xl font-semibold text-primary uppercase tracking-wider">
              Find Us
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>1107 Dickerson Pike<br />Nashville, TN 37207</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Mon-Sun: 11am - 9pm</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(615) 555-0199</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <h4 className="font-display text-xl font-semibold text-primary uppercase tracking-wider">
              Connect
            </h4>
            <p className="text-muted-foreground">
              Follow us for daily specials, community events, and behind-the-scenes vibes.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/roadsidepantry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300 font-bold"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Roadside Pantry Restaurant. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
