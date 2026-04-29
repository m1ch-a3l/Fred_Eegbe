import FadeIn from "@/components/ui/FadeIn";
import { Users, Globe, BookMarked, Mic } from "lucide-react";

const stats = [
  { icon: Users,      value: "50,000+", label: "Lives Touched" },
  { icon: Globe,      value: "20+",     label: "Nations Reached" },
  { icon: BookMarked, value: "3",       label: "Books Published" },
  { icon: Mic,        value: "500+",    label: "Messages Delivered" },
];

const pillars = [
  {
    title: "Teaching & Preaching",
    desc: "Bringing the Word of God alive through anointed teaching — in churches, conferences, and online platforms worldwide.",
    verse: "2 Timothy 4:2",
  },
  {
    title: "Community Outreach",
    desc: "Reaching the vulnerable, the broken, and the forgotten — with practical love and the hope of the Gospel.",
    verse: "Matthew 25:35",
  },
  {
    title: "Mentorship & Discipleship",
    desc: "Raising up the next generation of Kingdom leaders through intentional, scripture-centered discipleship.",
    verse: "2 Timothy 2:2",
  },
];

export default function MinistryImpactSection() {
  return (
    <section className="py-28 px-6" style={{ background: "var(--deep-blue)" }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-20">
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--gold)" }}>
            Kingdom Impact
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3 text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ministry at a Glance
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            By God's grace, the work continues to expand — touching hearts, healing lives,
            and advancing His kingdom across the earth.
          </p>
        </FadeIn>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1} className="text-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)" }}
              >
                <s.icon size={24} style={{ color: "var(--gold)" }} />
              </div>
              <div
                className="text-4xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {s.value}
              </div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                {s.label}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Ministry pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.1}>
              <div
                className="p-8 rounded-2xl h-full transition-transform duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h3
                  className="text-lg font-semibold text-white mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.58)" }}>
                  {p.desc}
                </p>
                <span className="text-xs font-semibold tracking-wide" style={{ color: "var(--gold)" }}>
                  {p.verse}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
