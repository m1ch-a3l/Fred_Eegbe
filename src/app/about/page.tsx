import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { Scale, BookOpen, Globe, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Rev. Dr. Fred P. Deegbe",
  description: "Learn about Rev. Dr. Fred P. Deegbe — Ghanaian church statesman, theologian, lawyer, and author.",
};

const milestones = [
  { year: "Early", event: "Born in Accra, Ghana, into a family of faith. Pursued law at the University of Ghana, earning an L.L.B." },
  { year: "Later", event: "Answered the call to ministry and earned a Master of Divinity from Southwestern Baptist Theological Seminary, Fort Worth, USA." },
  { year: "~1990", event: "Called as Senior Pastor of Calvary Baptist Church, Accra — beginning 33 years of devoted pastoral ministry." },
  { year: "2000s", event: "Earned a Doctor of Ministry from Asbury Theological Seminary, USA, deepening his theological scholarship." },
  { year: "2000s", event: "Served as General Secretary of the Christian Council of Ghana, providing national ecumenical leadership." },
  { year: "2000s", event: "Chaired the Denominational Board of the Ghana Baptist Convention, shaping the direction of Baptist ministry in Ghana." },
  { year: "2000s", event: "Appointed to serve on the Ghana AIDS Commission and the National Media Commission." },
  { year: "2022", event: "Published Hollow Faith in Powerless Religion — a prophetic call to authentic, Spirit-filled Christianity." },
  { year: "2024", event: "Published Thriving in Retirement and retired as Senior Pastor of Calvary Baptist Church after 33 faithful years." },
];

const credentials = [
  { icon: Scale, title: "Theologian & Lawyer", desc: "Holds an L.L.B from the University of Ghana, an M.Div from Southwestern Baptist Theological Seminary (USA), and a D.Min from Asbury Theological Seminary (USA)." },
  { icon: BookOpen, title: "Author & Teacher", desc: "Published author of two books — Hollow Faith in Powerless Religion and Thriving in Retirement — grounded in decades of theological reflection and pastoral wisdom." },
  { icon: Globe, title: "Church Statesman", desc: "Former General Secretary of the Christian Council of Ghana and Chair of the Denominational Board of the Ghana Baptist Convention." },
  { icon: Users, title: "National Voice", desc: "Served on national platforms including the Ghana AIDS Commission and the National Media Commission, bringing a Christian perspective to public life." },
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
            About
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Rev. Dr. Fred P. Deegbe
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Church statesman. Theologian. Lawyer. Author. A life poured out in service to God and Ghana.
          </p>
        </FadeIn>
      </div>

      {/* Biography */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="aspect-[3/4] rounded-2xl relative overflow-hidden flex items-end"
              style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.18)" }}
            >
              <Image
                src="/profile/author.png"
                alt="Rev. Dr. Fred P. Deegbe"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Name caption overlay */}
              <div
                className="relative z-10 p-6 w-full"
                style={{ background: "linear-gradient(to top, rgba(15,37,68,0.92) 0%, transparent 100%)" }}
              >
                <p className="text-white font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                  Rev. Dr. Fred P. Deegbe
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--gold)" }}>
                  Theologian · Lawyer · Church Statesman · Author
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
              A Life of Scholarship, Service & Faith
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--warm-gray)" }}>
              <p>
                Rev. Dr. Fred P. Deegbe is a respected Ghanaian church statesman, theologian, and lawyer.
                He served as General Secretary of the Christian Council of Ghana and recently retired as
                Senior Pastor of Calvary Baptist Church, Accra, after 33 years of ministry.
              </p>
              <p>
                He holds an L.L.B from the University of Ghana, a Master of Divinity from Southwestern
                Baptist Theological Seminary (USA), and a Doctor of Ministry from Asbury Theological
                Seminary (USA).
              </p>
              <p>
                Dr. Deegbe has chaired the Denominational Board of the Ghana Baptist Convention and
                served on national platforms including the Ghana AIDS Commission and the National
                Media Commission.
              </p>
              <p>
                He is married to Lady Pastor Joana Deegbe, and together they are blessed with
                children and grandchildren.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
              Credentials & Service
            </span>
            <h2
              className="text-3xl font-bold mt-3"
              style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
            >
              A Ministry Rooted in Excellence
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {credentials.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.1}>
                <div
                  className="p-8 rounded-2xl flex gap-5 h-full"
                  style={{ background: "white", border: "1px solid var(--border)", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(201,168,76,0.1)" }}
                  >
                    <c.icon size={22} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-2" style={{ color: "var(--navy)", fontFamily: "var(--font-heading)" }}>
                      {c.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                      {c.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Family */}
      <section className="py-24 px-6" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div
              className="p-10 rounded-2xl text-center relative overflow-hidden"
              style={{ background: "var(--deep-blue)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "radial-gradient(circle at 50% 0%, rgba(201,168,76,0.6) 0%, transparent 70%)" }}
              />
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
                  Family
                </span>
                <h2
                  className="text-3xl font-bold mt-3 mb-6 text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Rooted in Love
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Rev. Dr. Deegbe is married to <span className="text-white font-semibold">Lady Pastor Joana Deegbe</span>.
                  Together they are blessed with children and grandchildren — a living testimony to God's
                  faithfulness across generations.
                </p>
                <div
                  className="mt-8 pt-6 text-sm italic"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-serif)" }}
                >
                  "As for me and my house, we will serve the Lord." — Joshua 24:15
                </div>
              </div>
            </div>
          </FadeIn>
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
                <FadeIn key={i} delay={i * 0.08} className="flex gap-8 items-start">
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
