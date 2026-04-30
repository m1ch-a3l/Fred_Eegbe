import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { ShoppingCart, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Books — Rev. Dr. Fred Deegbe",
  description: "Explore Rev. Dr. Fred Deegbe's books — scripturally grounded, life-transforming reads on purpose, grace, and faith.",
};

const books = [
  {
    title: "Walking in Your Calling",
    year: "2010",
    theme: "Purpose & Calling",
    color: "var(--deep-blue)",
    tagline: "From hesitation to wholehearted obedience.",
    description:
      "This landmark book unpacks the journey from uncertainty to clarity in calling. Drawing from scripture and personal testimony, Fred guides readers through the practical and spiritual steps of discovering, embracing, and walking boldly in what God has placed inside them.",
    keyMessage: "Your calling is not something you create — it is something you discover through surrender and obedience to God.",
    chapters: ["The Anatomy of a Calling", "Hearing the Voice of God", "Breaking Free from Comparison", "Obedience Before Opportunity", "Sustaining Your Call"],
  },
  {
    title: "Rooted in Grace",
    year: "2016",
    theme: "Grace & Freedom",
    color: "var(--forest)",
    tagline: "Living from love, not striving.",
    description:
      "A deep, devotional exploration of God's grace — what it truly means to live as one who is fully loved, fully forgiven, and fully empowered. This book dismantles performance-based Christianity and invites readers into the freedom of living from God's acceptance, not for it.",
    keyMessage: "Grace is not merely your entry point into salvation — it is the atmosphere in which you live your entire life.",
    chapters: ["What Grace Actually Means", "The Trap of Performance", "Receiving What You Cannot Earn", "Extending Grace to Others", "A Life Lived from Love"],
  },
  {
    title: "Unshakeable Faith",
    year: "2022",
    theme: "Faith & Resilience",
    color: "#7A5C20",
    tagline: "Faith that holds in every season.",
    description:
      "Written in the crucible of personal trials, this book is a powerful, practical guide to building a faith that does not crumble under pressure. Fred walks through the anatomy of biblical faith — from doubt to declaration, from storm to breakthrough.",
    keyMessage: "Unshakeable faith is not the absence of questions — it is the presence of trust that outlasts every unanswered prayer.",
    chapters: ["What Faith Really Is", "When God Seems Silent", "The Gift of Doubt", "Declarations That Move Mountains", "Standing When You Cannot See"],
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
            Books by Rev. Dr. Fred Deegbe
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Every book is written as a prayer — that truth would land in your heart and produce lasting fruit.
          </p>
        </FadeIn>
      </div>

      {/* Featured / all books */}
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
                  {/* Book cover */}
                  <div
                    className="flex flex-col items-center justify-center p-12 relative overflow-hidden min-h-72"
                    style={{ background: book.color }}
                  >
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 12px)",
                      }}
                    />
                    <span className="text-xs uppercase tracking-widest mb-4 relative z-10" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {book.theme}
                    </span>
                    <h2
                      className="text-2xl font-bold text-white text-center leading-snug relative z-10 mb-3"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {book.title}
                    </h2>
                    <p className="text-xs italic relative z-10 text-center" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {book.tagline}
                    </p>
                    <span className="mt-6 text-xs relative z-10" style={{ color: "rgba(255,255,255,0.5)" }}>
                      Rev. Dr. Fred Deegbe · {book.year}
                    </span>
                  </div>

                  {/* Book details */}
                  <div className="md:col-span-2 p-10">
                    <div className="mb-2">
                      <span
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{ background: "rgba(201,168,76,0.1)", color: "var(--gold)" }}
                      >
                        {book.year}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mt-4 mb-5" style={{ color: "var(--warm-gray)" }}>
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
                        className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                        style={{ background: "var(--deep-blue)", color: "white" }}
                      >
                        <ShoppingCart size={14} />
                        Order Now
                      </Link>
                      <Link
                        href="/teachings"
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

      {/* Devotionals CTA */}
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
              Devotionals & Study Materials
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--warm-gray)" }}>
              Daily devotional guides and study companions for each book are currently in development.
              Subscribe to be the first to know when they launch.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-lg text-sm font-medium"
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
