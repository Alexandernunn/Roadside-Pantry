import { Instagram, MapPin, Clock, Phone } from "lucide-react";

const hours = [
  { day: "Friday", time: "11 AM–8 PM" },
  { day: "Saturday", time: "11 AM–8 PM" },
  { day: "Sunday", time: "12–5 PM" },
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "11 AM–8 PM" },
  { day: "Wednesday", time: "11:30 AM–8 PM" },
  { day: "Thursday", time: "11 AM–6 PM" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 lg:gap-24 mb-20 md:mb-24">
          
          {/* Brand & Slogan */}
          <div className="space-y-8 flex flex-col items-center">
            <img
              src={`${import.meta.env.BASE_URL}logo.webp`}
              alt="Roadside Pantry"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full"
            />
            <p className="text-muted-foreground text-xl md:text-2xl font-display italic">
              "What's In Your Pantry?"
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Nashville's Soul Food Authority. Bold flavors, made from scratch, built for the culture.
            </p>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-8">
            <h4 className="font-display text-2xl md:text-3xl font-semibold text-primary uppercase tracking-wider">
              Find Us
            </h4>
            <ul className="space-y-5 text-muted-foreground">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span className="text-base md:text-lg">1107 Dickerson Pike<br />Nashville, TN 37207</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span className="text-base md:text-lg">(615) 944-0446</span>
              </li>
            </ul>
            <div>
              <h5 className="font-display text-lg md:text-xl font-semibold text-primary uppercase tracking-wide mb-4">Hours</h5>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span className="font-semibold">{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-8">
            <h4 className="font-display text-2xl md:text-3xl font-semibold text-primary uppercase tracking-wider">
              Connect
            </h4>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Follow us for daily specials, community events, and behind-the-scenes vibes.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/roadsidepantry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram size={28} className="md:w-8 md:h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-10 md:pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm md:text-base text-muted-foreground">
          <p>© {new Date().getFullYear()} Roadside Pantry Restaurant. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
