import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { ShoppingCart, ArrowRight } from "lucide-react";

const books = [
  {
    title: "Hollow Faith Is Powerless Religion",
    description: "A prophetic call back to authentic, Spirit-filled Christianity — confronting the creeping danger of religious form without transforming power.",
    theme: "Faith & Theology",
    image: "/books/hollow-faith.jpg",
    accent: "#1E3A5F",
    reverse: false,
  },
  {
    title: "Thriving in Retirement",
    description: "Staying strong & healthy in your golden years — a biblical and practical guide to living with purpose, joy, and continued fruitfulness.",
    theme: "Life & Purpose",
    image: "/books/thriving-retirement.jpg",
    accent: "#C9A84C",
    reverse: true,
  },
];

export default function FeaturedBooksSection() {
  return (
    <section
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
    >
      {/* Background glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600, borderRadius: "50%",
          top: "-10%", right: "-10%",
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500, height: 500, borderRadius: "50%",
          bottom: "-10%", left: "-10%",
          background: "radial-gradient(circle, rgba(122,158,126,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <FadeIn className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--gold)" }}>
            Published Works
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3 text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Words That Transform
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Each book flows from a lifetime of ministry, scholarship, and devotion to God's Word.
          </p>
        </FadeIn>

        {/* Book feature rows */}
        <div className="flex flex-col gap-24">
          {books.map((book, i) => (
            <FadeIn key={book.title} delay={i * 0.15}>
              <div className={`flex flex-col ${book.reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-16 items-center`}>

                {/* Book cover mockup */}
                <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
                  <div
                    className="relative"
                    style={{
                      transform: book.reverse ? "perspective(800px) rotateY(-8deg)" : "perspective(800px) rotateY(8deg)",
                      filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.6))",
                      transition: "transform 0.4s ease",
                    }}
                  >
                    {/* Book shadow base */}
                    <div
                      className="absolute -bottom-4 left-4 right-4 h-8 rounded-full"
                      style={{
                        background: "rgba(0,0,0,0.4)",
                        filter: "blur(16px)",
                        zIndex: -1,
                      }}
                    />
                    {/* Book spine */}
                    <div
                      className="absolute top-0 bottom-0 left-0 w-4 rounded-l-sm"
                      style={{
                        background: "rgba(0,0,0,0.35)",
                        transformOrigin: "left",
                      }}
                    />
                    {/* Cover image */}
                    <div
                      className="relative overflow-hidden rounded-r-sm rounded-l-none"
                      style={{ width: 220, height: 300 }}
                    >
                      <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover object-center"
                        sizes="220px"
                      />
                    </div>
                  </div>
                </div>

                {/* Book info */}
                <div className="flex-1 min-w-0">
                  <span
                    className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full inline-block mb-5"
                    style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)", border: "1px solid rgba(201,168,76,0.3)" }}
                  >
                    {book.theme}
                  </span>
                  <h3
                    className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {book.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-4"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {book.description}
                  </p>
                  <p
                    className="text-xs mb-8"
                    style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em" }}
                  >
                    By Rev. Dr. Fred P. Deegbe
                  </p>

                  {/* Gold divider */}
                  <div
                    className="w-12 h-0.5 mb-8"
                    style={{ background: "var(--gold)" }}
                  />

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: "var(--gold)",
                        color: "white",
                        boxShadow: "0 4px 20px rgba(201,168,76,0.35)",
                      }}
                    >
                      <ShoppingCart size={14} />
                      Order Now
                    </Link>
                    <Link
                      href="/books"
                      className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "white",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              {/* Divider between books */}
              {i < books.length - 1 && (
                <div
                  className="mt-24 w-full h-px"
                  style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }}
                />
              )}
            </FadeIn>
          ))}
        </div>

        {/* View all CTA */}
        <FadeIn delay={0.3} className="text-center mt-20">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
            style={{ color: "var(--gold)" }}
          >
            Explore All Books
            <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
