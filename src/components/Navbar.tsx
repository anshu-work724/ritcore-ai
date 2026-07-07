import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ritcoreLogo from "../assets/ritcore-ai.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Internships", href: "/internships" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
  }, [location.pathname, open]);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-max px-6 flex items-center justify-between h-16 lg:h-18">
        <Link
          to="/"
          className="flex items-center gap-2 select-none group"
          aria-label="Ritcore AI Home"
        >
          <img
            src={ritcoreLogo}
            alt="Ritcore AI"
            className="h-9 w-auto rounded-full object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-3 py-1.5 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            id="nav-get-quote"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg text-black transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #7dd3e8 0%, #9b7fe8 100%)",
            }}
          >
            Get a Quote
          </Link>
          <button
            id="nav-mobile-toggle"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-3 py-2.5 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-lg text-black"
            style={{
              background: "linear-gradient(135deg, #7dd3e8 0%, #9b7fe8 100%)",
            }}
            onClick={() => setOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
