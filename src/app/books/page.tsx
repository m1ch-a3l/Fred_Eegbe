import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export const metadata: Metadata = {
  title: "Books — Rev. Dr. Frederick P. Deegbe",
  description: "Books by Rev. Dr. Frederick P. Deegbe — Ghanaian church statesman, theologian and author committed to equipping the body of Christ.",
};

const books = [
  // ── Featured 5 (detailed layout) ──────────────────────────────────────────
  {
    title: "Hollow Faith Is Powerless Religion",
    theme: "Faith & Theology",
    image: "/books/hollow-faith.jpg",
    tagline: "A prophetic call back to authentic, Spirit-filled Christianity.",
    description:
      "Rev. Dr. Deegbe confronts the creeping danger of religion without power — church attendance without transformation, form without substance. Drawing from decades of pastoral experience and rigorous theological study, he calls believers back to a living, dynamic faith that demonstrates the reality of the risen Christ.",
    keyMessage: "The church was never called to be a religious institution that impresses the world — she was called to be a Spirit-filled community that transforms it.",
  },
  {
    title: "Thriving in Retirement",
    theme: "Life & Purpose",
    image: "/books/thriving-retirement.jpg",
    tagline: "Staying strong & healthy in your golden years.",
    description:
      "Written from the rich vantage point of 33 years of pastoral ministry, this book is a personal and practical guide to navigating retirement with joy, purpose, and continued fruitfulness. Rev. Dr. Deegbe dismantles the idea that retirement means withdrawal, presenting a biblical vision for deepened impact and lasting legacy.",
    keyMessage: "Retirement is not the end of your story — it is the beginning of a chapter that only a lifetime of faithfulness could have written.",
  },
  {
    title: "The Three Powers",
    theme: "Spiritual Life",
    image: "/books/the-three-powers.png",
    tagline: "Understanding the forces that shape your spiritual destiny.",
    description:
      "In this theologically rich exploration, Rev. Dr. Deegbe unpacks the three great powers at work in every believer's life — the power of God, the power of the enemy, and the power of personal choice. He equips readers to understand the spiritual landscape they inhabit and to walk in genuine biblical authority.",
    keyMessage: "The believer who understands the powers at work in their life is the believer who walks not in fear — but in confident, Christ-centred authority.",
  },
  {
    title: "The Sticky Couple",
    theme: "Marriage & Family",
    image: "/books/the-sticky-couple.png",
    tagline: "Building a marriage that holds through every season.",
    description:
      "Drawing from scripture, pastoral counsel, and lived wisdom, Rev. Dr. Deegbe explores what it takes to build a marriage that endures — not merely surviving storms but emerging stronger, more united, and more deeply bonded through every trial. A timely word for couples at every stage of marriage.",
    keyMessage: "A sticky couple isn't one without problems — it's one that has discovered the grace of holding on, together, through all of them.",
  },
  {
    title: "Stranger in My Own Country",
    theme: "Identity & Culture",
    image: "/books/stranger-country.png",
    tagline: "Navigating faith, identity, and belonging in a changing world.",
    description:
      "A reflective and prophetic work in which Rev. Dr. Deegbe grapples with the tension of living as a person of faith in a world that feels increasingly foreign to Christian values. He explores questions of identity, cultural displacement, and what it means to remain anchored when the ground beneath us shifts.",
    keyMessage: "The Christian was never promised comfort in the world — but he was promised a citizenship that no earthly change can revoke.",
  },

  // ── Remaining 5 (card grid) ───────────────────────────────────────────────
  {
    title: "Forgive God!",
    theme: "Faith & Healing",
    image: "/books/forgive-god.png",
    tagline: "Wrestling honestly with pain, disappointment, and divine silence.",
    description:
      "In this courageous and pastoral work, Rev. Dr. Deegbe addresses one of the most hidden struggles of the Christian life — the anger, confusion, and silent resentment we can carry toward God when life doesn't go as expected. With compassion and theological depth, he guides readers toward honest faith and genuine healing.",
    keyMessage: "God is not threatened by your honesty. He invites you to bring your broken places — and find in Him the grace to be made whole.",
  },
  {
    title: "Born to Blossom",
    theme: "Identity & Purpose",
    image: "/books/born-to-blossom.png",
    tagline: "Discovering the fullness of who God made you to be.",
    description:
      "Every person carries a God-given potential that the pressures of life can bury. In this encouraging work, Rev. Dr. Deegbe speaks to those who feel stuck, overlooked, or unsure of their purpose — calling them back to the divine design planted within them and equipping them to flourish in every season.",
    keyMessage: "You were not created to merely survive. You were born to blossom — and God's intention for your life is abundance, not limitation.",
  },
  {
    title: "When Friends Fight",
    theme: "Relationships",
    image: "/books/when-friends-fight.png",
    tagline: "Healing and restoring broken relationships.",
    description:
      "Conflict between friends is one of life's most painful experiences — especially within the body of Christ. Rev. Dr. Deegbe offers pastoral wisdom on understanding the roots of relational breakdown, the path toward honest reconciliation, and the grace needed to restore what was once broken.",
    keyMessage: "The bond of friendship is too precious to abandon at the first sign of fracture. God's grace is sufficient to heal what hurt has broken.",
  },
  {
    title: "Building a Christian Home",
    theme: "Family & Marriage",
    image: "/books/building-a-christian-home.png",
    tagline: "Laying foundations that will stand the test of time.",
    description:
      "A practical and scripturally grounded guide to establishing a home where faith, love, and godly values are the true foundation. Rev. Dr. Deegbe addresses the roles of husband, wife, and parent — offering timeless wisdom for families navigating the complexities of modern life while holding firmly to biblical truth.",
    keyMessage: "A Christian home is not an accident — it is a deliberate, daily choice to invite God into every corner of family life.",
  },
  {
    title: "Empowered to Make Life Meaningful",
    theme: "Purpose & Growth",
    image: "/books/empowered-meaningful.png",
    tagline: "Living with intention, passion, and lasting impact.",
    description:
      "This inspiring work challenges readers to move beyond routine existence into a life of genuine significance. Rev. Dr. Deegbe draws on scripture and experience to help readers identify their calling, overcome the paralysis of purposelessness, and live each day as a meaningful offering to God and the world.",
    keyMessage: "A meaningful life is not a matter of chance — it is the fruit of deliberate surrender to the One who created you with purpose.",
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
            Books by Rev. Dr. Deegbe
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Every book is born from a lifetime of ministry, scholarship, and unwavering devotion to the Word of God.
          </p>
        </FadeIn>
      </div>

      {/* Featured books — detailed layout */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          {books.slice(0, 5).map((book, i) => (
            <FadeIn key={book.title} delay={i * 0.1}>
              <div
                className="rounded-3xl overflow-hidden"
                style={{ background: "white", border: "1px solid var(--border)", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* Cover */}
                  <div className="relative min-h-80 md:min-h-full overflow-hidden">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
                    <span
                      className="absolute bottom-4 left-4 text-xs uppercase tracking-widest font-medium px-2 py-1 rounded"
                      style={{ background: "rgba(201,168,76,0.9)", color: "white" }}
                    >
                      {book.theme}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="md:col-span-2 p-10">
                    <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
                      {book.title}
                    </h2>
                    <p className="text-sm italic mb-5" style={{ color: "var(--gold)" }}>{book.tagline}</p>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--warm-gray)" }}>{book.description}</p>
                    <div
                      className="pl-5 py-3 mb-8 rounded-r-lg"
                      style={{ borderLeft: "3px solid var(--gold)", background: "rgba(201,168,76,0.05)" }}
                    >
                      <p className="text-sm italic" style={{ fontFamily: "var(--font-serif)", color: "var(--deep-blue)" }}>
                        {book.keyMessage}
                      </p>
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      <Link
                        href="/store"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                        style={{ background: "var(--deep-blue)", color: "white" }}
                      >
                        <ShoppingCart size={14} /> Order Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* All other books — card grid */}
      <section className="pb-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center pt-24 mb-14">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>More Titles</span>
            <h2 className="text-3xl font-bold mt-3" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
              More from Rev. Dr. Deegbe
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {books.slice(5).map((book, i) => (
              <FadeIn key={book.title} delay={i * 0.07}>
                <div
                  className="rounded-2xl overflow-hidden flex flex-col group"
                  style={{ background: "white", border: "1px solid var(--border)", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
                >
                  {/* Cover */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(to top, rgba(15,37,68,0.85) 0%, transparent 60%)" }}
                    />
                    <span
                      className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest font-medium px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(201,168,76,0.9)", color: "white" }}
                    >
                      {book.theme}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-4 flex flex-col gap-3 flex-1">
                    <h3 className="text-sm font-bold leading-snug" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
                      {book.title}
                    </h3>
                    <p className="text-xs italic leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                      {book.tagline}
                    </p>
                    <Link
                      href="/store"
                      className="mt-auto flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 hover:-translate-y-0.5"
                      style={{ background: "var(--gold)", color: "white" }}
                    >
                      <ShoppingCart size={12} /> Order
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Study materials CTA */}
      <section className="py-20 px-6">
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
