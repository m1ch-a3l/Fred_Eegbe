"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const DURATION = 30;

export default function HomepageAd() {
  const [visible, setVisible] = useState(false);
  const [seconds, setSeconds] = useState(DURATION);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("ad-dismissed")) return;
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!visible) return;
    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) { dismiss(); return 0; }
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

  const circumference = 2 * Math.PI * 20;
  const progress = (seconds / DURATION) * circumference;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(5,15,35,0.88)", backdropFilter: "blur(6px)" }}
      onClick={dismiss}
    >
      <div
        className="relative animate-fadeIn"
        style={{ maxWidth: 560, width: "100%" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button + countdown */}
        <div className="flex items-center justify-between mb-3 px-1">
          {/* Circular countdown */}
          <div className="relative flex items-center justify-center w-11 h-11">
            <svg width={44} height={44} className="-rotate-90 absolute inset-0">
              <circle cx={22} cy={22} r={20} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth={2.5} />
              <circle
                cx={22} cy={22} r={20}
                fill="none"
                stroke="var(--gold)"
                strokeWidth={2.5}
                strokeDasharray={circumference}
                strokeDashoffset={circumference - progress}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 1s linear" }}
              />
            </svg>
            <span className="text-xs font-semibold" style={{ color: "white" }}>{seconds}</span>
          </div>

          {/* Close */}
          <button
            onClick={dismiss}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:opacity-80"
            style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)" }}
          >
            <X size={13} /> Close
          </button>
        </div>

        {/* Ad image */}
        <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>
          <Image
            src="/ads/ads.jpeg"
            alt="Advertisement"
            width={560}
            height={560}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <p className="text-center mt-3 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          Closes in {seconds}s · Click outside to dismiss
        </p>
      </div>
    </div>
  );
}
