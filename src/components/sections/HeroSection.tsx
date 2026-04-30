import Link from "next/link";
import { BookOpen, Play, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #0F2544 0%, #1E3A5F 40%, #2D5016 100%)",
        }}
      />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(201,168,76,0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(122,158,126,0.2) 0%, transparent 50%)`,
        }}
      />

      {/* Light rays */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px opacity-30 z-0"
        style={{
          height: "60%",
          background: "linear-gradient(to bottom, rgba(201,168,76,0.8), transparent)",
          filter: "blur(1px)",
          boxShadow: "0 0 60px 30px rgba(201,168,76,0.15)",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium mb-8"
          style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", color: "var(--gold)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
          Author · Teacher · Ministry Leader
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Dr. Fred Deegbe
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl mb-4 font-light"
          style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-serif)" }}
        >
          Equipping Believers. Transforming Lives. Advancing the Kingdom.
        </p>

        {/* Scripture quote */}
        <div
          className="inline-block px-6 py-3 rounded-lg mb-12 max-w-xl mx-auto"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,168,76,0.25)" }}
        >
          <p className="text-sm italic" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-serif)" }}>
            "The Spirit of the Lord is on me, because he has anointed me to proclaim good news..."
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--gold)" }}>Luke 4:18</p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/books"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "var(--gold)", color: "white", boxShadow: "0 4px 20px rgba(201,168,76,0.4)" }}
          >
            <BookOpen size={16} />
            Read the Books
          </Link>
          <Link
            href="/ministry"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              backdropFilter: "blur(8px)",
            }}
          >
            Explore the Ministry
          </Link>
          <Link
            href="/teachings"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              backdropFilter: "blur(8px)",
            }}
          >
            <Play size={14} />
            Watch Teachings
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs uppercase tracking-widest text-white">Scroll</span>
        <ChevronDown size={16} className="text-white animate-bounce" />
      </div>
    </section>
  );
}
