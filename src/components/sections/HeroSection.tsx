import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      {/* ─── MOBILE LAYOUT ─── stacked, no text over image */}
      <section
        className="flex flex-col md:hidden overflow-hidden"
        style={{ background: "#0B1628", minHeight: "100svh" }}
      >
        {/* Top: role tag */}
        <div className="px-6 pt-24 pb-4">
          <span
            className="text-[10px] uppercase tracking-[0.22em] font-semibold"
            style={{ color: "var(--gold)" }}
          >
            Author · Church Statesman · Accra, Ghana
          </span>
        </div>

        {/* Photo — full width, dropped slightly so figure sits lower */}
        <div className="relative w-full" style={{ height: "65vw", minHeight: 260 }}>
          <Image
            src="/profile/author.png"
            alt="Rev. Dr. Fred P. Deegbe"
            fill
            className="object-contain"
            style={{ objectPosition: "center 20%" }}
            sizes="100vw"
            priority
          />
          {/* Subtle bottom fade into the dark content area below */}
          <div
            className="absolute inset-x-0 bottom-0 h-1/3"
            style={{ background: "linear-gradient(to top, #0B1628, transparent)" }}
          />
        </div>

        {/* Bottom: name + bio + CTAs — pure dark, no image */}
        <div className="flex flex-col gap-4 px-6 pb-10 pt-2">
          <h1
            className="font-bold leading-[0.9] uppercase"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.8rem, 12vw, 4rem)",
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Rev. Dr. Fred
            <br />
            P. Deegbe
          </h1>

          <p
            className="text-xs leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)", maxWidth: "280px" }}
          >
            Theologian, lawyer &amp; pastor — over 33 years equipping
            believers through the Word of God.
          </p>

          <div className="flex flex-wrap gap-3 items-center pt-1">
            <Link
              href="/books"
              className="hero-btn flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm"
              style={{
                background: "linear-gradient(135deg, #D4A847 0%, #C9A84C 50%, #B8923A 100%)",
                color: "white",
                boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
              }}
            >
              <BookOpen size={14} />
              Read the Books
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors duration-200 hover:text-white"
              style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "underline",
                textUnderlineOffset: "5px",
              }}
            >
              About the Author
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DESKTOP LAYOUT ─── editorial side-by-side */}
      <section
        className="relative hidden md:block overflow-hidden"
        style={{ background: "#0B1628", minHeight: "100svh" }}
      >
        {/* Photo — right 52%, dropped so figure sits naturally lower */}
        <div className="absolute top-0 bottom-0 right-0 w-[52%]">
          <Image
            src="/profile/author.png"
            alt="Rev. Dr. Fred P. Deegbe"
            fill
            className="object-contain"
            style={{ objectPosition: "center 15%" }}
            sizes="52vw"
            priority
          />
          <div
            className="absolute inset-y-0 left-0 w-1/2"
            style={{ background: "linear-gradient(to right, #0B1628 0%, transparent 100%)" }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-2/5"
            style={{ background: "linear-gradient(to top, #0B1628 40%, transparent 100%)" }}
          />
        </div>

        {/* Grid lines */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "25% 100%",
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col px-14 pt-28 pb-10"
          style={{ minHeight: "100svh" }}
        >
          <div className="max-w-xs">
            {/* <span
              className="text-xs uppercase tracking-[0.22em] font-semibold"
              style={{ color: "var(--gold)" }}
            >
              Author · Church Statesman
            </span> */}
            {/* <br /> */}
            {/* <span
              className="text-xs uppercase tracking-[0.18em] font-medium"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Accra, Ghana
            </span> */}
            <p
              className="mt-4 text-[11px] leading-relaxed uppercase tracking-wide"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Theologian, lawyer, and pastor who has spent over three decades
              equipping believers and transforming lives through the Word of God.
            </p>
          </div>

          <div className="flex-1" />

          <div className="flex flex-col gap-5">
            <h1
              className="font-bold leading-[0.88] uppercase"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(3rem, 9.5vw, 8.5rem)",
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              Rev. Dr. Fred
              <br />
              P. Deegbe
            </h1>

            <div className="flex flex-wrap gap-4 items-center pb-2">
              <Link
                href="/books"
                className="hero-btn flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm"
                style={{
                  background: "linear-gradient(135deg, #D4A847 0%, #C9A84C 50%, #B8923A 100%)",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(201,168,76,0.4)",
                }}
              >
                <BookOpen size={15} />
                Read the Books
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium transition-colors duration-200 hover:text-white"
                style={{
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "underline",
                  textUnderlineOffset: "5px",
                }}
              >
                About the Author
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
