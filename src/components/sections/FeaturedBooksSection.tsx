"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

const books = [
  {
    title: "Hollow Faith Is Powerless Religion",
    description: "A prophetic call back to authentic, Spirit-filled Christianity — confronting the creeping danger of religious form without transforming power.",
    theme: "Faith & Theology",
    image: "/books/hollow-faith.jpg",
  },
  {
    title: "Thriving in Retirement",
    description: "Staying strong & healthy in your golden years — a biblical and practical guide to living with purpose, joy, and continued fruitfulness.",
    theme: "Life & Purpose",
    image: "/books/thriving-retirement.jpg",
  },
  {
    title: "The Three Powers",
    description: "Understanding the forces that shape your spiritual destiny — equipping believers to walk in genuine biblical authority and confidence.",
    theme: "Spiritual Life",
    image: "/books/the-three-powers.png",
  },
  {
    title: "The Sticky Couple",
    description: "Building a marriage that holds through every season — scriptural wisdom for couples who choose to hold on together through every trial.",
    theme: "Marriage & Family",
    image: "/books/the-sticky-couple.png",
  },
  {
    title: "Stranger in My Own Country",
    description: "Navigating faith, identity, and belonging in a changing world — remaining anchored when the ground beneath us shifts.",
    theme: "Identity & Culture",
    image: "/books/stranger-country.png",
  },
];

export default function FeaturedBooksSection() {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState<"left" | "right" | null>(null);

  const goTo = useCallback((index: number, direction: "left" | "right") => {
    if (sliding) return;
    setSliding(direction);
    setTimeout(() => {
      setCurrent(index);
      setSliding(null);
    }, 400);
  }, [sliding]);

  const prev = () => {
    const index = (current - 1 + books.length) % books.length;
    goTo(index, "right");
  };

  const next = useCallback(() => {
    const index = (current + 1) % books.length;
    goTo(index, "left");
  }, [current, goTo]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const book = books[current];

  const slideStyle: React.CSSProperties = {
    transform: sliding === "left"
      ? "translateX(-60px)"
      : sliding === "right"
      ? "translateX(60px)"
      : "translateX(0)",
    opacity: sliding ? 0 : 1,
    transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease",
  };

  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
    >
      {/* Ambient glow removed */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--gold)" }}>
            Published Works
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3 text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Words That Transform
          </h2>
        </FadeIn>

        {/* Slider */}
        <div className="relative flex items-center gap-4 md:gap-8">
          {/* Prev arrow */}
          <button
            onClick={prev}
            className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
            }}
            aria-label="Previous book"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Slide content */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
              style={slideStyle}
            >
              {/* Book cover */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <div
                  style={{
                    position: "relative",
                    filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.7))",
                    transform: "perspective(900px) rotateY(current === 0 ? 6deg : -6deg)",
                  }}
                >
                  {/* Spine */}
                  <div
                    className="absolute top-0 bottom-0 left-0 w-3 rounded-l-sm z-10"
                    style={{ background: "rgba(0,0,0,0.4)" }}
                  />
                  {/* Cover */}
                  <div
                    className="relative overflow-hidden rounded-r-sm"
                    style={{ width: 200, height: 280 }}
                  >
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover object-center"
                      sizes="200px"
                      priority
                    />
                  </div>
                  {/* Reflection */}
                  <div
                    className="absolute -bottom-6 left-0 right-0 h-6 rounded-b-sm"
                    style={{
                      background: "linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)",
                      transform: "scaleY(-1)",
                      opacity: 0.3,
                      filter: "blur(4px)",
                    }}
                  />
                </div>
              </div>

              {/* Book info */}
              <div className="flex-1 min-w-0 text-center md:text-left">
                <span
                  className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full inline-block mb-5"
                  style={{
                    background: "rgba(201,168,76,0.15)",
                    color: "var(--gold)",
                    border: "1px solid rgba(201,168,76,0.3)",
                  }}
                >
                  {book.theme}
                </span>
                <h3
                  className="text-2xl md:text-4xl font-bold text-white mb-5 leading-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {book.title}
                </h3>
                <p className="text-base leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {book.description}
                </p>
                <p className="text-xs mb-8" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
                  By Rev. Dr. Fred P. Deegbe
                </p>

                <div className="w-10 h-0.5 mb-8 mx-auto md:mx-0" style={{ background: "var(--gold)" }} />

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "var(--gold)",
                      color: "white",
                      boxShadow: "0 4px 20px rgba(201,168,76,0.4)",
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
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
            }}
            aria-label="Next book"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {books.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "left" : "right")}
              className="transition-all duration-300"
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: i === current ? "var(--gold)" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
              }}
              aria-label={`Go to book ${i + 1}`}
            />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <Link
            href="/books"
            className="text-sm font-medium transition-all hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            View all books →
          </Link>
        </div>
      </div>
    </section>
  );
}
