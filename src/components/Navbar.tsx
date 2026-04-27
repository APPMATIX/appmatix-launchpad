import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-lg" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Appmatix Solutions — home">
            <span className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/10 ring-1 ring-primary/20 transition-all duration-500 group-hover:ring-primary/50 group-hover:shadow-[0_0_24px_-4px_oklch(0.7_0.16_232/0.6)]">
              <span className="absolute inset-0 rounded-xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={logo}
                alt=""
                className="relative h-7 w-7 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[8deg] drop-shadow-[0_0_8px_oklch(0.7_0.16_232/0.4)]"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[1.35rem] font-display font-semibold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Appmatix Solutions
              </span>
              <span className="mt-1 text-[0.6rem] font-mono uppercase tracking-[0.18em] text-muted-foreground/70 hidden sm:block">
                Software Studio
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="px-4 py-1.5 text-sm font-medium text-muted-foreground rounded-full transition-all hover:text-foreground data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold hover:shadow-[var(--shadow-glow)] transition-all hover:scale-105"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1"
            >
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="px-4 py-3 rounded-xl text-foreground/80 data-[status=active]:bg-primary/15 data-[status=active]:text-primary"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground rounded-xl px-5 py-3 font-semibold"
              >
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
