import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

const books = [
  {
    title: "Hollow Faith Is Powerless Religion",
    description: "A prophetic call back to authentic, Spirit-filled Christianity — confronting the danger of religious form without transforming power.",
    theme: "Faith & Theology",
    color: "linear-gradient(135deg, #1E3A5F 0%, #0F2544 100%)",
  },
  {
    title: "Thriving in Retirement",
    description: "Staying strong & healthy in your golden years — a biblical and practical guide to living with purpose, joy, and continued fruitfulness.",
    theme: "Life & Purpose",
    color: "linear-gradient(135deg, #2D5016 0%, #1A3009 100%)",
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
            Each book flows from a lifetime of ministry, scholarship, and devotion to God's Word.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    Rev. Dr. Fred P. Deegbe
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--warm-gray)" }}>
                    {book.description}
                  </p>
                  <div className="flex gap-3 mt-6">
                    <Link
                      href="/contact"
                      className="flex-1 text-center py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: "var(--deep-blue)", color: "white" }}
                    >
                      Order Now
                    </Link>
                    <Link
                      href="/books"
                      className="flex-1 text-center py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                      style={{ border: "1px solid var(--border)", color: "var(--warm-gray)" }}
                    >
                      Learn More
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
