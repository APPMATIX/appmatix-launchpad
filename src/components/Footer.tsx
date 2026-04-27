import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="Appmatix" className="h-10 w-10" />
              <span className="text-2xl font-display font-semibold">Appmatix</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              We design and ship software that moves businesses forward — web apps, mobile experiences, and automation systems engineered by a senior team.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-foreground/80 hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-4">
              Get in touch
            </h4>
            <ul className="space-y-3 text-foreground/80">
              <li>hello@appmatix.com</li>
              <li>+1 (415) 555-0123</li>
              <li>Remote · Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Appmatix Studio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground tracking-wider uppercase">
            Built with care · Engineered to scale
          </p>
        </div>
      </div>
    </footer>
  );
}
