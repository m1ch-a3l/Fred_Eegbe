import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Programme",
  description: "Programme outline for Rev. Dr. Frederick P. Deegbe's ministry events.",
};

export default function ProgramPage() {
  return (
    <div style={{ background: "var(--warm-white)" }}>
      {/* Hero */}
      <div
        className="pt-32 pb-16 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
      >
        <FadeIn>
          <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
            Ministry
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mt-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Programme
          </h1>
        </FadeIn>
      </div>

      {/* Outline image */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.12)", border: "1px solid var(--border)" }}
            >
              <Image
                src="/ads/Outline.png"
                alt="Programme Outline"
                width={900}
                height={1200}
                className="w-full h-auto"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
