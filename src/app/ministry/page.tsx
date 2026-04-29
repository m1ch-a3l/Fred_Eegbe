import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { Mic, Heart, Users, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ministry — Fred Eegbe",
  description: "Explore the vision, mission, and work of Fred Eegbe Ministries — reaching lives across the nations.",
};

const pillars = [
  {
    icon: Mic,
    title: "Teaching & Preaching",
    verse: "2 Timothy 4:2",
    desc: "The Word of God is the foundation of all ministry. Fred is committed to expository, life-giving preaching that brings clarity, conviction, and transformation.",
    points: ["Sunday services & conferences", "Online teaching platform", "National & international crusades", "Radio & media ministry"],
  },
  {
    icon: Heart,
    title: "Community Outreach",
    verse: "Matthew 25:35",
    desc: "The Gospel is not only proclaimed — it is demonstrated. The ministry actively serves communities through practical compassion and tangible care.",
    points: ["Food & clothing drives", "Healthcare outreaches", "Educational scholarships", "Support for widows & orphans"],
  },
  {
    icon: Users,
    title: "Mentorship & Discipleship",
    verse: "2 Timothy 2:2",
    desc: "Every generation must be equipped. Fred pours into young leaders through intentional discipleship, leadership development, and spiritual fathering.",
    points: ["Annual leadership summit", "Young minister mentorship", "Women of Purpose network", "One-on-one discipleship cohorts"],
  },
];

const events = [
  { title: "Kingdom Purpose Conference", location: "Lagos, Nigeria", date: "June 14–16, 2026" },
  { title: "Faith & Fire Revival", location: "London, UK", date: "August 2–4, 2026" },
  { title: "Transform Africa Summit", location: "Nairobi, Kenya", date: "October 10–12, 2026" },
  { title: "Purpose Alive Women's Retreat", location: "Accra, Ghana", date: "November 7–9, 2026" },
];

const testimonies = [
  {
    quote: "The outreach ministry changed my community. Children who had no hope now have scholarships. God's love is real.",
    name: "Pastor Emmanuel A.", location: "Ibadan, Nigeria",
  },
  {
    quote: "I attended the leadership summit as a confused young man. I left with clarity, identity, and a 5-year plan for my calling.",
    name: "David M.", location: "Nairobi, Kenya",
  },
];

export default function MinistryPage() {
  return (
    <div style={{ background: "var(--warm-white)" }}>
      {/* Hero */}
      <div
        className="pt-32 pb-24 px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--forest) 0%, var(--deep-blue) 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 30%, rgba(201,168,76,0.5) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10">
          <FadeIn>
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
              Kingdom Work
            </span>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ministry & Mission
            </h1>
            <p className="text-lg max-w-2xl mx-auto mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
              Reaching the unreached. Equipping the called. Transforming communities through the power of God's Word.
            </p>
            <div
              className="inline-block px-6 py-3 rounded-lg mt-4"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(201,168,76,0.3)" }}
            >
              <p className="text-sm italic" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-serif)" }}>
                "Go into all the world and preach the gospel to all creation." — Mark 16:15
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <div
              className="p-10 rounded-2xl h-full"
              style={{ background: "var(--cream)", border: "1px solid var(--border)" }}
            >
              <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
                Vision
              </span>
              <h2
                className="text-2xl font-bold mt-3 mb-4"
                style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
              >
                A World Where Every Life Walks in Purpose
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                We envision a generation of believers — from every nation, tribe, and background —
                who know who they are in Christ, walk boldly in their calling, and live as agents of
                transformation in their communities and beyond.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div
              className="p-10 rounded-2xl h-full"
              style={{ background: "var(--deep-blue)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
                Mission
              </span>
              <h2
                className="text-2xl font-bold mt-3 mb-4 text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                To Teach, Reach, and Raise Kingdom Leaders
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Through anointed teaching, compassionate outreach, and intentional discipleship,
                Fred Eegbe Ministries exists to equip believers with truth, serve communities with
                love, and raise the next generation of Kingdom leaders for global impact.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ministry Pillars */}
      <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
              Areas of Work
            </span>
            <h2
              className="text-4xl font-bold mt-3"
              style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
            >
              Three Pillars of Ministry
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-10">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div
                  className="p-10 rounded-2xl"
                  style={{
                    background: "white",
                    border: "1px solid var(--border)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                  }}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ background: "rgba(30,58,95,0.08)" }}
                      >
                        <p.icon size={28} style={{ color: "var(--deep-blue)" }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3
                          className="text-xl font-semibold"
                          style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
                        >
                          {p.title}
                        </h3>
                        <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: "rgba(201,168,76,0.1)", color: "var(--gold)" }}>
                          {p.verse}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--warm-gray)" }}>
                        {p.desc}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-2 text-sm" style={{ color: "var(--charcoal)" }}>
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 px-6" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
              Upcoming
            </span>
            <h2
              className="text-4xl font-bold mt-3"
              style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
            >
              Events & Speaking Engagements
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {events.map((ev, i) => (
              <FadeIn key={ev.title} delay={i * 0.1}>
                <div
                  className="p-7 rounded-2xl flex gap-5 items-start transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "white",
                    border: "1px solid var(--border)",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                  }}
                >
                  <Calendar size={20} className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                  <div>
                    <h3 className="font-semibold text-base mb-1" style={{ color: "var(--navy)", fontFamily: "var(--font-heading)" }}>
                      {ev.title}
                    </h3>
                    <p className="text-sm mb-1" style={{ color: "var(--warm-gray)" }}>{ev.location}</p>
                    <p className="text-xs font-medium" style={{ color: "var(--gold)" }}>{ev.date}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3} className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: "var(--deep-blue)" }}>
              Invite Fred to Speak <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Impact testimonies */}
      <section className="py-24 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
              Impact Stories
            </span>
            <h2
              className="text-4xl font-bold mt-3 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Changed by the Ministry
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonies.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div
                  className="p-8 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="text-4xl mb-4" style={{ color: "var(--gold)", fontFamily: "Georgia, serif" }}>"</div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-serif)" }}>
                    {t.quote}
                  </p>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{t.location}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
