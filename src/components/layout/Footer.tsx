"use client";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/ministry", label: "Ministry" },
  { href: "/books", label: "Books" },
  { href: "/teachings", label: "Teachings" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    href: "#", label: "Facebook",
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    href: "#", label: "Instagram",
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    href: "#", label: "YouTube",
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>,
  },
  {
    href: "#", label: "X / Twitter",
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    href: "mailto:hello@fredeegbe.com", label: "Email",
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "rgba(255,255,255,0.85)" }}>
      {/* Scripture bar */}
      <div
        className="text-center py-6 px-6"
        style={{ background: "var(--deep-blue)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
      >
        <p className="text-sm italic" style={{ color: "var(--gold-light, #F0E6C8)", fontFamily: "var(--font-serif)" }}>
          "For I know the plans I have for you, declares the Lord — plans to prosper you and not to harm you,
          plans to give you hope and a future." — Jeremiah 29:11
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-heading)", color: "white" }}
          >
            Dr. Fred P. Deegbe
          </h3>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
            Author, teacher, and ministry leader committed to helping people discover
            purpose, walk in faith, and experience lasting transformation through God's Word.
          </p>
          <div className="flex gap-4">
            {socials.map(({ svg, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.75)" }}
              >
                {svg}
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--gold)" }}>
            Navigate
          </h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
            Stay Connected
          </h4>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.6)" }}>
            Receive words of encouragement, new teachings, and ministry updates directly to your inbox.
          </p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-lg text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
              }}
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-sm font-medium transition-all duration-300"
              style={{ background: "var(--gold)", color: "white" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="text-center py-5 text-xs"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.4)",
        }}
      >
        <p>© {new Date().getFullYear()} Fred P. Deegbe Ministries. All rights reserved.</p>
        <p className="mt-1 italic" style={{ color: "rgba(255,255,255,0.3)" }}>
          May grace and peace be multiplied to you.
        </p>
      </div>
    </footer>
  );
}
