import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import { Heart, BookOpen, Globe, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Fred Eegbe",
  description: "Learn about Fred Eegbe's life, calling, faith journey, and ministry purpose.",
};

const milestones = [
  { year: "1978", event: "Born in Lagos, Nigeria, into a family rooted in faith and prayer." },
  { year: "1995", event: "Surrendered his life to Christ at age 17 during a church revival meeting." },
  { year: "2001", event: "Received the call to ministry while in theological studies." },
  { year: "2005", event: "Planted his first church and began teaching in local communities." },
  { year: "2010", event: "Published his first book, \"Walking in Your Calling\", which reached international audiences." },
  { year: "2015", event: "Launched Fred Eegbe Ministries, expanding outreach to 20+ nations." },
  { year: "2020", event: "Launched online teaching platform, reaching over 50,000 believers globally." },
  { year: "2024", event: "Released third book and began global conference series." },
];

const values = [
  { icon: BookOpen, title: "Scripture-First", desc: "Every teaching, every decision, every direction flows from the Word of God." },
  { icon: Heart, title: "Authentic Love", desc: "Ministry that serves from love — not performance, not platform, not applause." },
  { icon: Globe, title: "Global Impact", desc: "A mandate to reach nations — with the Good News, with discipleship, with care." },
  { icon: Flame, title: "Burning Purpose", desc: "Helping every person find, embrace, and walk in the unique calling God placed within them." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "var(--warm-white)" }}>
      {/* Page hero */}
      <div
        className="pt-32 pb-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
      >
        <FadeIn>
          <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
            The Story
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            About Fred Eegbe
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            A man shaped by grace, anchored in scripture, and called to nations.
          </p>
        </FadeIn>
      </div>

      {/* Biography */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            {/* Author photo placeholder */}
            <div
              className="aspect-[3/4] rounded-2xl flex items-end justify-start relative overflow-hidden"
              style={{
                background: "linear-gradient(160deg, var(--deep-blue) 0%, var(--navy) 100%)",
              }}
            >
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle at 50% 30%, rgba(201,168,76,0.4) 0%, transparent 70%)",
                }}
              />
              <div
                className="p-6 w-full"
                style={{ background: "rgba(15,37,68,0.85)", backdropFilter: "blur(8px)" }}
              >
                <p
                  className="text-white font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Fred Eegbe
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--gold)" }}>
                  Author · Pastor · Teacher
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
              Biography
            </span>
            <h2
              className="text-3xl font-bold mt-3 mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
            >
              A Life Surrendered to Purpose
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--warm-gray)" }}>
              <p>
                Fred Eegbe is a Christian author, pastor, and international teacher whose life is a
                testament to the transforming power of God's grace. Born and raised in Lagos, Nigeria,
                Fred grew up in a home where faith was not merely professed — it was practiced daily,
                through prayer, sacrifice, and community.
              </p>
              <p>
                At seventeen, during a local church revival, he experienced a personal encounter with
                God that would redirect the entire trajectory of his life. That night, he surrendered
                fully to Christ — and has never looked back.
              </p>
              <p>
                After years of theological study, pastoral formation, and Kingdom work, Fred founded
                Fred Eegbe Ministries — an organization dedicated to equipping believers, reaching
                communities, and advancing the Gospel across the nations.
              </p>
              <p>
                He is the author of three widely read books, a sought-after conference speaker, and
                a mentor to hundreds of young leaders across Africa, Europe, and the Americas.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimony section */}
      <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
              Personal Testimony
            </span>
            <h2
              className="text-3xl font-bold mt-3"
              style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
            >
              From Brokenness to Calling
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div
              className="p-10 rounded-2xl"
              style={{ background: "white", border: "1px solid var(--border)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
            >
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                <p>
                  "I did not grow up expecting to be a preacher. Honestly, I spent most of my teenage
                  years running from God — or rather, running from the responsibility that comes with
                  truly knowing Him.
                </p>
                <p>
                  But grace has a way of finding you. At seventeen, in a small, crowded church in Lagos,
                  I heard a message on Romans 8:28 — that all things work together for the good of those
                  who love God. Something broke in me that night. I realised I had been trying to manage
                  my life when God had been waiting to lead it.
                </p>
                <p>
                  I gave Him everything that evening — my ambitions, my fears, my future. And in return,
                  He gave me a purpose larger than anything I could have imagined for myself.
                </p>
                <p>
                  That is the story I now carry to every platform, every book, every prayer line — that
                  God is not finished with you. No matter where you are starting from."
                </p>
              </div>
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
                <p className="font-semibold" style={{ color: "var(--navy)" }}>— Fred Eegbe</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
              Core Values
            </span>
            <h2
              className="text-3xl font-bold mt-3"
              style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
            >
              What Anchors the Work
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div
                  className="p-8 rounded-2xl flex gap-5"
                  style={{
                    background: "white",
                    border: "1px solid var(--border)",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(201,168,76,0.1)" }}
                  >
                    <v.icon size={22} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-2" style={{ color: "var(--navy)", fontFamily: "var(--font-heading)" }}>
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
              Journey
            </span>
            <h2
              className="text-3xl font-bold mt-3"
              style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
            >
              Milestones of Grace
            </h2>
          </FadeIn>
          <div className="relative">
            <div
              className="absolute left-16 top-0 bottom-0 w-px"
              style={{ background: "var(--border)" }}
            />
            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 0.08} className="flex gap-8 items-start">
                  <div
                    className="w-14 text-right text-sm font-semibold flex-shrink-0"
                    style={{ color: "var(--gold)" }}
                  >
                    {m.year}
                  </div>
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 mt-1 relative z-10"
                    style={{ background: "var(--deep-blue)", border: "2px solid var(--gold)" }}
                  />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                    {m.event}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
