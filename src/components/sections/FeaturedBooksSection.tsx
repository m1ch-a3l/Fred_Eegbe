import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

const books = [
  {
    title: "Walking in Your Calling",
    description: "A transformative guide to discovering and stepping into the unique purpose God has placed within you — from hesitation to wholehearted obedience.",
    theme: "Purpose & Calling",
    color: "linear-gradient(135deg, #1E3A5F 0%, #0F2544 100%)",
  },
  {
    title: "Rooted in Grace",
    description: "An exploration of God's boundless grace — how to receive it fully, live from it daily, and extend it generously to the world around you.",
    theme: "Grace & Freedom",
    color: "linear-gradient(135deg, #2D5016 0%, #1A3009 100%)",
  },
  {
    title: "Unshakeable Faith",
    description: "Practical, scripture-based tools to build a faith that holds firm in every season — through storms, silence, and supernatural breakthrough.",
    theme: "Faith & Resilience",
    color: "linear-gradient(135deg, #7A5C20 0%, #4A3810 100%)",
  },
];

export default function FeaturedBooksSection() {
  return (
    <section className="py-28 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--gold)" }}>
            Books
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3"
            style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
          >
            Words That Transform
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "var(--warm-gray)" }}>
            Each book is a vessel of truth, written to ignite faith and awaken purpose.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, i) => (
            <FadeIn key={book.title} delay={i * 0.1}>
              <div
                className="rounded-2xl overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.07)",
                }}
              >
                {/* Book cover */}
                <div
                  className="h-56 flex flex-col items-center justify-center relative overflow-hidden"
                  style={{ background: book.color }}
                >
                  {/* Cross watermark */}
                  <div
                    className="absolute opacity-5"
                    style={{ fontSize: 180, fontFamily: "serif", color: "white", lineHeight: 1, userSelect: "none" }}
                  >
                    ✝
                  </div>
                  <span className="text-xs uppercase tracking-widest mb-4 relative z-10" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {book.theme}
                  </span>
                  <h3
                    className="text-xl font-bold text-white text-center px-6 leading-snug relative z-10"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {book.title}
                  </h3>
                  <span className="mt-3 text-xs relative z-10" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Rev. Dr. Fred Deegbe
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--warm-gray)" }}>
                    {book.description}
                  </p>
                  <div className="flex gap-3 mt-6">
                    <Link
                      href="/books"
                      className="flex-1 text-center py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: "var(--deep-blue)", color: "white" }}
                    >
                      Buy Now
                    </Link>
                    <Link
                      href="/books"
                      className="flex-1 text-center py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                      style={{ border: "1px solid var(--border)", color: "var(--warm-gray)" }}
                    >
                      Read Sample
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="text-center mt-12">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: "var(--deep-blue)" }}
          >
            View All Books
            <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
