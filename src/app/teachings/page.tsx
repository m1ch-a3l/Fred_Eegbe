import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { Play, Clock, BookMarked } from "lucide-react";

export const metadata: Metadata = {
  title: "Teachings — Rev. Dr. Fred Deegbe",
  description: "Sermons, devotionals, and teachings by Rev. Dr. Fred Deegbe — scripture-based messages to strengthen your faith.",
};

const categories = ["All", "Faith", "Purpose", "Grace", "Prayer", "Leadership", "Devotional"];

const teachings = [
  {
    title: "The Anatomy of a Calling",
    category: "Purpose",
    type: "Sermon",
    duration: "52 min",
    date: "March 2026",
    excerpt: "Breaking down what it means to be called by God — the signs, the process, the tests, and the fruit. A foundational message for anyone seeking clarity on their assignment.",
    verse: "Romans 8:28–30",
    featured: true,
  },
  {
    title: "When God Seems Silent",
    category: "Faith",
    type: "Sermon",
    duration: "48 min",
    date: "February 2026",
    excerpt: "How do you hold on to faith when heaven feels distant? This message brings comfort and clarity for those in the waiting seasons of life.",
    verse: "Psalm 46:10",
    featured: false,
  },
  {
    title: "Grace Is Not Permission to Sin",
    category: "Grace",
    type: "Teaching",
    duration: "44 min",
    date: "January 2026",
    excerpt: "Addressing the most common misunderstanding of grace — and showing how the true grace of God produces holiness, not license.",
    verse: "Romans 6:1–4",
    featured: false,
  },
  {
    title: "The Power of a Praying Life",
    category: "Prayer",
    type: "Workshop",
    duration: "1h 10 min",
    date: "December 2025",
    excerpt: "Practical and spiritual principles for building a consistent, powerful prayer life — the kind that moves mountains and shapes nations.",
    verse: "James 5:16",
    featured: false,
  },
  {
    title: "Leading Like Jesus",
    category: "Leadership",
    type: "Teaching",
    duration: "55 min",
    date: "November 2025",
    excerpt: "What does servant leadership really look like? Drawing from Jesus' model, this teaching challenges and reshapes our understanding of authority and influence.",
    verse: "Mark 10:43–45",
    featured: false,
  },
  {
    title: "Small Beginnings, Great Endings",
    category: "Purpose",
    type: "Devotional",
    duration: "12 min",
    date: "April 2026",
    excerpt: "A short but powerful devotional on why God starts big things small — and how to honour the process without despising the seed stage.",
    verse: "Zechariah 4:10",
    featured: false,
  },
];

export default function TeachingsPage() {
  return (
    <div style={{ background: "var(--warm-white)" }}>
      {/* Hero */}
      <div
        className="pt-32 pb-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--deep-blue) 0%, var(--navy) 100%)" }}
      >
        <FadeIn>
          <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
            Sermons & Teachings
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Teachings & Messages
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Scripture-rooted messages to strengthen your faith, clarify your purpose, and deepen your walk with God.
          </p>
        </FadeIn>
      </div>

      {/* Featured message */}
      {teachings.filter((t) => t.featured).map((t) => (
        <section key={t.title} className="py-16 px-6" style={{ background: "var(--cream)" }}>
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
                Featured Message
              </span>
              <div
                className="mt-4 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2"
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                }}
              >
                {/* Video placeholder */}
                <div
                  className="flex items-center justify-center relative min-h-64 cursor-pointer group"
                  style={{ background: "var(--deep-blue)" }}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.5) 0%, transparent 70%)",
                    }}
                  />
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 relative z-10"
                    style={{ background: "var(--gold)", boxShadow: "0 0 30px rgba(201,168,76,0.5)" }}
                  >
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "rgba(30,58,95,0.08)", color: "var(--deep-blue)" }}>
                      {t.category}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "rgba(201,168,76,0.1)", color: "var(--gold)" }}>
                      {t.type}
                    </span>
                  </div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
                  >
                    {t.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--warm-gray)" }}>
                    {t.excerpt}
                  </p>
                  <div
                    className="flex items-center gap-4 text-xs mb-6"
                    style={{ color: "var(--warm-gray)" }}
                  >
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {t.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookMarked size={12} /> {t.verse}
                    </span>
                    <span>{t.date}</span>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium"
                    style={{ background: "var(--deep-blue)", color: "white" }}
                  >
                    <Play size={14} /> Watch Now
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* Categories */}
      <section className="pt-12 pb-4 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  background: cat === "All" ? "var(--deep-blue)" : "var(--cream)",
                  color: cat === "All" ? "white" : "var(--warm-gray)",
                  border: "1px solid var(--border)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Teachings grid */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {teachings.filter((t) => !t.featured).map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.08}>
              <div
                className="p-7 rounded-2xl flex flex-col h-full transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "rgba(30,58,95,0.06)", color: "var(--deep-blue)" }}>
                    {t.category}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "rgba(201,168,76,0.08)", color: "var(--gold)" }}>
                    {t.type}
                  </span>
                </div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
                >
                  {t.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--warm-gray)" }}>
                  {t.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs" style={{ color: "var(--warm-gray)" }}>
                    <span className="flex items-center gap-1"><Clock size={11} /> {t.duration}</span>
                    <span>{t.date}</span>
                  </div>
                  <Link
                    href="#"
                    className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg transition-all duration-300"
                    style={{ background: "rgba(30,58,95,0.06)", color: "var(--deep-blue)" }}
                  >
                    <Play size={11} /> Watch
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
