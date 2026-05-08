"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ShoppingCart } from "lucide-react";

const DURATION = 30; // seconds

export default function HomepageAd() {
  const [visible, setVisible] = useState(false);
  const [seconds, setSeconds] = useState(DURATION);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Show after a short delay; respect session dismissal
  useEffect(() => {
    if (sessionStorage.getItem("ad-dismissed")) return;
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Countdown
  useEffect(() => {
    if (!visible) return;
    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          dismiss();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [visible]);

  const dismiss = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    sessionStorage.setItem("ad-dismissed", "1");
    setVisible(false);
  };

  if (!visible) return null;

  // SVG circular countdown ring
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const progress = (seconds / DURATION) * circumference;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(5,15,35,0.88)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl overflow-hidden animate-fadeIn"
        style={{
          background: "white",
          boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
        }}
      >
        {/* Gold top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(to right, var(--gold), rgba(201,168,76,0.3))" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Book cover */}
          <div
            className="relative min-h-64 md:min-h-full overflow-hidden"
            style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
          >
            <Image
              src="/books/hollow-faith.jpg"
              alt="Hollow Faith Is Powerless Religion"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(15,37,68,0.7) 0%, transparent 50%)" }}
            />
            <div className="absolute bottom-5 left-5">
              <span
                className="text-[10px] uppercase tracking-widest font-semibold px-2 py-1 rounded"
                style={{ background: "rgba(201,168,76,0.9)", color: "white" }}
              >
                Featured Book
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-between">
            {/* Close + timer */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <svg width={52} height={52} className="-rotate-90">
                  <circle cx={26} cy={26} r={radius} fill="none" stroke="var(--border)" strokeWidth={3} />
                  <circle
                    cx={26} cy={26} r={radius}
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth={3}
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - progress}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 1s linear" }}
                  />
                </svg>
                <span className="text-xs font-medium absolute ml-1 w-[52px] text-center" style={{ color: "var(--warm-gray)" }}>
                  {seconds}s
                </span>
                <span className="text-xs ml-8" style={{ color: "var(--warm-gray)" }}>
                  Closes in {seconds}s
                </span>
              </div>
              <button
                onClick={dismiss}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "var(--cream)", border: "1px solid var(--border)" }}
              >
                <X size={14} style={{ color: "var(--warm-gray)" }} />
              </button>
            </div>

            {/* Message */}
            <div className="flex-1">
              <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "var(--gold)" }}>
                Now Available
              </span>
              <h2
                className="text-2xl font-bold mt-2 mb-3 leading-tight"
                style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
              >
                Hollow Faith Is Powerless Religion
              </h2>
              <p className="text-sm italic mb-4" style={{ color: "var(--gold)" }}>
                A prophetic call back to authentic, Spirit-filled Christianity.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--warm-gray)" }}>
                Are you living faith — or performing it? Rev. Dr. Frederick P. Deegbe's bold new book challenges the church to move beyond religious routine into genuine transformation.
              </p>

              <div
                className="pl-4 py-3 mb-6 rounded-r-lg"
                style={{ borderLeft: "3px solid var(--gold)", background: "rgba(201,168,76,0.05)" }}
              >
                <p className="text-xs italic leading-relaxed" style={{ fontFamily: "var(--font-serif)", color: "var(--deep-blue)" }}>
                  "She was called to be a Spirit-filled community that transforms the world."
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Link
                href="/store"
                onClick={dismiss}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--gold)", color: "white", boxShadow: "0 4px 20px rgba(201,168,76,0.35)" }}
              >
                <ShoppingCart size={15} />
                Order Your Copy — GHS 75
              </Link>
              <button
                onClick={dismiss}
                className="py-2.5 rounded-xl text-xs font-medium transition-colors"
                style={{ color: "var(--warm-gray)" }}
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
