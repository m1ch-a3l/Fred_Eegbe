"use client";
import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { Send, Check } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
    >

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <FadeIn>
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--gold)" }}>
            Community
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3 text-white mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Join the Community
          </h2>
          <p className="text-lg mb-12" style={{ color: "rgba(255,255,255,0.65)" }}>
            Receive words of encouragement, new teachings, ministry updates, and exclusive content
            delivered straight to your inbox.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-8">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "rgba(201,168,76,0.15)", border: "2px solid var(--gold)" }}
              >
                <Check size={32} style={{ color: "var(--gold)" }} />
              </div>
              <p className="text-white text-lg font-semibold">You are now part of the community!</p>
              <p style={{ color: "rgba(255,255,255,0.55)" }} className="text-sm">
                Check your inbox for a welcome message. God bless you.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 rounded-xl text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "white",
                  backdropFilter: "blur(8px)",
                }}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-transform duration-200 hover:-translate-y-0.5"
                style={{ background: "var(--gold)", color: "white" }}
              >
                <Send size={15} />
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs mt-5" style={{ color: "rgba(255,255,255,0.35)" }}>
            No spam. Unsubscribe anytime. Your information is kept private.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
