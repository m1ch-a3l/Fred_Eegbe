import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#0B1628", minHeight: "100svh" }}
    >
      {/*
        MOBILE:  Photo sits in the center-right, spanning full height,
                 with gradients on top and bottom so text is always readable.
        DESKTOP: Photo occupies the right 52%, full height.
      */}
      <div className="absolute inset-0 md:left-[48%]">
        <Image
          src="/profile/author.png"
          alt="Rev. Dr. Fred P. Deegbe"
          fill
          className="object-contain object-top md:object-center"
          style={{ objectPosition: "center top" }}
          sizes="(max-width: 768px) 100vw, 52vw"
          priority
        />

        {/* Mobile: dark overlay on left so left-side text is readable */}
        <div
          className="absolute inset-y-0 left-0 w-3/5 md:hidden"
          style={{
            background: "linear-gradient(to right, #0B1628 40%, transparent 100%)",
          }}
        />

        {/* Desktop: left fade blending photo into layout */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 hidden md:block"
          style={{
            background: "linear-gradient(to right, #0B1628 0%, transparent 100%)",
          }}
        />

        {/* Both: strong bottom fade so name text is always readable */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "55%",
            background: "linear-gradient(to top, #0B1628 50%, rgba(11,22,40,0.6) 75%, transparent 100%)",
          }}
        />
      </div>

      {/* Desktop-only grid lines */}
      <div
        className="absolute inset-0 z-0 hidden md:block pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      />

      {/* Content layer */}
      <div
        className="relative z-10 flex flex-col px-6 md:px-14 pt-24 md:pt-28 pb-10"
        style={{ minHeight: "100svh" }}
      >
        {/* ── TOP ── role tag + bio */}
        <div className="max-w-[280px] md:max-w-xs">
          <span
            className="text-[10px] md:text-xs uppercase tracking-[0.22em] font-semibold"
            style={{ color: "var(--gold)" }}
          >
            Author · Church Statesman
          </span>
          <br />
          <span
            className="text-[10px] md:text-xs uppercase tracking-[0.18em] font-medium"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Accra, Ghana
          </span>

          <p
            className="mt-4 text-[11px] leading-relaxed uppercase tracking-wide hidden md:block"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Theologian, lawyer, and pastor who has spent over three decades
            equipping believers and transforming lives through the Word of God.
          </p>
        </div>

        {/* Spacer — pushes name to bottom */}
        <div className="flex-1" />

        {/* ── BOTTOM ── big name + tagline + CTAs */}
        <div className="flex flex-col gap-4 md:gap-5">

          {/* Short bio — mobile only, shown just above the name */}
          <p
            className="text-xs leading-relaxed md:hidden"
            style={{ color: "rgba(255,255,255,0.5)", maxWidth: "260px" }}
          >
            Theologian, lawyer &amp; pastor — over 33 years equipping
            believers through the Word of God.
          </p>

          <h1
            className="font-bold leading-[0.88] uppercase"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.6rem, 9.5vw, 8.5rem)",
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Rev. Dr. Fred
            <br />
            P. Deegbe
          </h1>

          <div className="flex flex-wrap gap-3 md:gap-4 items-center pb-2">
            <Link
              href="/books"
              className="flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--gold)",
                color: "white",
                boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
              }}
            >
              <BookOpen size={14} />
              Read the Books
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-opacity hover:opacity-100"
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
      </div>
    </section>
  );
}
