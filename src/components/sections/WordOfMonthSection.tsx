import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WordOfMonthSection() {
  return (
    <section className="py-28 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--gold)" }}>
            Message of the Month
          </span>
          <h2
            className="text-4xl font-bold mt-3"
            style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
          >
            A Word of Encouragement
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            className="rounded-2xl p-10 relative overflow-hidden"
            style={{
              background: "white",
              border: "1px solid var(--border)",
              boxShadow: "0 8px 50px rgba(0,0,0,0.08)",
            }}
          >
            {/* Gold top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{ background: "linear-gradient(to right, var(--gold), rgba(201,168,76,0.3))" }}
            />

            <div className="mb-4">
              <span
                className="text-xs uppercase tracking-widest font-medium px-3 py-1 rounded-full"
                style={{ background: "rgba(201,168,76,0.1)", color: "var(--gold)" }}
              >
                April 2026
              </span>
            </div>

            <h3
              className="text-2xl font-bold mt-4 mb-5"
              style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
            >
              Do Not Despise the Day of Small Beginnings
            </h3>

            <p className="text-base leading-relaxed mb-5" style={{ color: "var(--warm-gray)" }}>
              God is not intimidated by your starting point. Every mighty oak begins as a seed buried
              in soil. What feels invisible today is not insignificant — it is simply underground,
              developing roots that will anchor the weight of a great harvest.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--warm-gray)" }}>
              Don't compare your Chapter 1 to someone else's Chapter 20. Stay faithful in the small.
              Stay surrendered in the secret. Heaven is watching, and what is faithful with little
              will be entrusted with much.
            </p>

            <div
              className="pl-5 py-3 mb-8 rounded-r-lg"
              style={{ borderLeft: "3px solid var(--gold)", background: "rgba(201,168,76,0.04)" }}
            >
              <p className="text-base italic" style={{ fontFamily: "var(--font-serif)", color: "var(--deep-blue)" }}>
                "Who dares despise the day of small things?"
              </p>
              <p className="text-sm mt-1 font-semibold" style={{ color: "var(--gold)" }}>
                Zechariah 4:10
              </p>
            </div>

            <Link
              href="/teachings"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: "var(--deep-blue)" }}
            >
              Read More Teachings
              <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
