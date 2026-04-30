"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/ministry", label: "Ministry" },
  { href: "/books", label: "Books" },
  { href: "/teachings", label: "Teachings" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(253,252,250,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E8E2D9" : "none",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight group">
          <span
            className="font-bold text-xl tracking-wide transition-colors"
            style={{
              fontFamily: "var(--font-heading)",
              color: scrolled ? "var(--navy)" : "white",
            }}
          >
            Rev. Dr. Fred Deegbe
          </span>
          <span
            className="text-xs tracking-widest uppercase transition-colors"
            style={{ color: scrolled ? "var(--gold)" : "rgba(255,255,255,0.75)" }}
          >
            Author & Ministry Leader
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide transition-colors hover:opacity-80"
              style={{ color: scrolled ? "var(--charcoal)" : "rgba(255,255,255,0.9)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-medium px-5 py-2 rounded-lg transition-all duration-300"
            style={{
              background: "var(--gold)",
              color: "white",
            }}
          >
            Connect
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={22} style={{ color: scrolled ? "var(--navy)" : "white" }} />
          ) : (
            <Menu size={22} style={{ color: scrolled ? "var(--navy)" : "white" }} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ background: "var(--warm-white)", borderColor: "var(--border)" }}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-base font-medium py-2"
                style={{ color: "var(--charcoal)" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-sm font-medium px-5 py-3 rounded-lg text-center mt-2"
              style={{ background: "var(--gold)", color: "white" }}
              onClick={() => setOpen(false)}
            >
              Connect
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
