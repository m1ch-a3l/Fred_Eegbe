import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { ShoppingCart, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Books — Rev. Dr. Fred P. Deegbe",
  description: "Books by Rev. Dr. Fred P. Deegbe — Ghanaian church statesman, theologian and author committed to equipping the body of Christ.",
};

const books = [
  {
    title: "Hollow Faith Is Powerless Religion",
    theme: "Faith & Theology",
    image: "/books/hollow-faith.jpg",
    tagline: "A prophetic call back to authentic, Spirit-filled Christianity.",
    description:
      "In this bold and prophetic work, Rev. Dr. Fred P. Deegbe confronts the creeping danger of religion without power — of church attendance without transformation, of form without substance. Drawing from decades of pastoral experience and rigorous theological study, he calls believers back to a living, dynamic faith that demonstrates the reality of the risen Christ.",
    keyMessage: "The church was never called to be a religious institution that impresses the world — she was called to be a Spirit-filled community that transforms it.",
    chapters: ["The Illusion of Religion", "When Faith Loses Its Power", "The Anatomy of Authentic Christianity", "Returning to the Upper Room", "A Church That Changes the World"],
  },
  {
    title: "Thriving in Retirement",
    theme: "Life & Purpose",
    image: "/books/thriving-retirement.jpg",
    tagline: "Staying strong & healthy in your golden years.",
    description:
      "Written from the rich vantage point of 33 years of pastoral ministry, this book is Rev. Dr. Deegbe's personal and practical guide to navigating retirement with joy, purpose, and continued fruitfulness. He dismantles the idea that retirement means withdrawal, and instead presents a biblical vision for a season of deepened impact, renewed identity, and lasting legacy.",
    keyMessage: "Retirement is not the end of your story — it is the beginning of a chapter that only a lifetime of faithfulness could have written.",
    chapters: ["What Retirement Really Is", "Finding Identity Beyond the Title", "Staying Fruitful in Every Season", "Wisdom as a Gift to the Next Generation", "Finishing Well — and Thriving"],
  },
];

export default function BooksPage() {
  return (
    <div style={{ background: "var(--warm-white)" }}>
      {/* Hero */}
      <div
        className="pt-32 pb-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
      >
        <FadeIn>
          <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
            Published Works
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Books by Rev. Dr. Fred P. Deegbe
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Every book is born from a lifetime of ministry, scholarship, and unwavering devotion to the Word of God.
          </p>
        </FadeIn>
      </div>

      {/* Books */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-20">
          {books.map((book, i) => (
            <FadeIn key={book.title} delay={i * 0.1}>
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Book cover — real image */}
                  <div className="relative min-h-80 md:min-h-full overflow-hidden">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Subtle gradient overlay at bottom */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-20"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}
                    />
                    <span
                      className="absolute bottom-4 left-4 text-xs uppercase tracking-widest font-medium px-2 py-1 rounded"
                      style={{ background: "rgba(201,168,76,0.9)", color: "white" }}
                    >
                      {book.theme}
                    </span>
                  </div>

                  {/* Book details */}
                  <div className="md:col-span-2 p-10">
                    <div className="mb-3">
                      {/* <span
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{ background: "rgba(201,168,76,0.1)", color: "var(--gold)" }}
                      >
                        {book.year}
                      </span> */}
                    </div>
                    <h2
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
                    >
                      {book.title}
                    </h2>
                    <p className="text-sm italic mb-5" style={{ color: "var(--gold)" }}>
                      {book.tagline}
                    </p>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--warm-gray)" }}>
                      {book.description}
                    </p>

                    {/* Key message */}
                    <div
                      className="pl-5 py-3 mb-6 rounded-r-lg"
                      style={{ borderLeft: "3px solid var(--gold)", background: "rgba(201,168,76,0.05)" }}
                    >
                      <p className="text-sm italic" style={{ fontFamily: "var(--font-serif)", color: "var(--deep-blue)" }}>
                        {book.keyMessage}
                      </p>
                    </div>

                    {/* Chapters */}
                    <div className="mb-8">
                      <p className="text-xs uppercase tracking-widest font-medium mb-3" style={{ color: "var(--warm-gray)" }}>
                        What's Inside
                      </p>
                      <ul className="flex flex-col gap-2">
                        {book.chapters.map((ch) => (
                          <li key={ch} className="flex items-center gap-2 text-sm" style={{ color: "var(--charcoal)" }}>
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} />
                            {ch}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3 flex-wrap">
                      <Link
                        href="/contact"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: "var(--deep-blue)", color: "white" }}
                      >
                        <ShoppingCart size={14} />
                        Order Now
                      </Link>
                      <Link
                        href="/contact"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                        style={{ border: "1px solid var(--border)", color: "var(--warm-gray)" }}
                      >
                        <BookOpen size={14} />
                        Read a Sample
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Study materials CTA */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
              Coming Soon
            </span>
            <h2
              className="text-3xl font-bold mt-3 mb-5"
              style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
            >
              Study Guides & Companion Resources
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--warm-gray)" }}>
              In-depth study guides and group discussion materials for each book are in development.
              Subscribe to be the first to know when they are available.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--gold)", color: "white" }}
            >
              Notify Me
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
