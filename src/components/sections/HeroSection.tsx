import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen min-h-[640px] overflow-hidden"
      style={{ background: "#0B1628" }}
    >
      {/* Author photo — right half only, contained so full person is visible */}
      <div className="absolute top-0 bottom-0 right-0 w-full md:w-[52%]">
        <Image
          src="/profile/author.png"
          alt="Rev. Dr. Fred P. Deegbe"
          fill
          className="object-contain object-center object-top"
          sizes="(max-width: 768px) 100vw, 52vw"
          priority
        />
        {/* Left fade — blends into dark background */}
        <div
          className="absolute inset-y-0 left-0 w-1/2"
          style={{
            background: "linear-gradient(to right, #0B1628 0%, transparent 100%)",
          }}
        />
        {/* Bottom fade — keeps name text readable */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/5"
          style={{
            background: "linear-gradient(to top, #0B1628 40%, transparent 100%)",
          }}
        />
      </div>

      {/* Subtle vertical grid lines */}
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      />

      {/* All content */}
      <div className="relative z-10 flex flex-col h-full px-8 md:px-14 pt-28 pb-10">

        {/* Top — role + short bio */}
        <div className="flex justify-between items-start gap-8">
          <div className="max-w-xs">
            <span
              className="text-xs uppercase tracking-[0.22em] font-semibold"
              style={{ color: "var(--gold)" }}
            >
              Author · Church Statesman · Accra, Ghana
            </span>
            <p
              className="mt-5 text-xs leading-relaxed uppercase tracking-wide hidden md:block"
              style={{ color: "rgba(255,255,255,0.45)", maxWidth: "260px" }}
            >
              Theologian, lawyer, and pastor who has spent over three decades
              equipping believers and transforming lives through the Word of God.
            </p>
          </div>

        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom — huge name + CTAs */}
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
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--gold)",
                color: "white",
                boxShadow: "0 4px 20px rgba(201,168,76,0.4)",
              }}
            >
              <BookOpen size={15} />
              Read the Books
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-opacity hover:opacity-100"
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
  );
}
