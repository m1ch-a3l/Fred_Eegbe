import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import { Music, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Programme",
  description: "Programme outline for Rev. Dr. Frederick P. Deegbe's Book Launch at Calvary Baptist Church, Shiashie.",
};

const programme = [
  { num: 1,  item: "Musical Prelude",          detail: 'Hymn: "Great is thy Faithfulness"',  performer: "" },
  { num: 2,  item: "Opening Prayer",           detail: "",                                    performer: "Rev. W. Komla Darke" },
  { num: 3,  item: "Purpose (MC)",             detail: "",                                    performer: "Ps. Richard Aryeetey" },
  { num: 4,  item: "Introduction of Chair",    detail: "",                                    performer: "" },
  { num: 5,  item: "Remarks by Chair",         detail: "",                                    performer: "Rev. Dr. Samuel Otu-Pimpong" },
  { num: 6,  item: "Music Ministration",       detail: "",                                    performer: "CBC Choir" },
  { num: 7,  item: "Author's Comments",        detail: "",                                    performer: "Rev. Dr. Fred Deegbe" },
  { num: 8,  item: "Review of 2 Books",        detail: "",                                    performer: "Ms. Caroline Boateng" },
  { num: 9,  item: "Choir Music",              detail: "",                                    performer: "CBC Choir" },
  { num: 10, item: "Review of 3 Books",        detail: "",                                    performer: "Mr. James Ebo Whyte" },
  { num: 11, item: "Auction & Sales",          detail: "",                                    performer: "Rev. Peter Acquah" },
  { num: 12, item: "Rev. Hoffman's Gift",      detail: "",                                    performer: "Chairman" },
  { num: 13, item: "Cutting of Cake",          detail: "",                                    performer: "" },
  { num: 14, item: "Chairman's Remarks",       detail: "",                                    performer: "" },
  { num: 15, item: "Vote of Thanks",           detail: "",                                    performer: "Ps. Mrs. Joana Deegbe, ESQ" },
  { num: 16, item: "Closing Hymn",             detail: '"Yes God is Good"',                   performer: "CBC Choir" },
  { num: 17, item: "Prayer and Benediction",   detail: "",                                    performer: "Rev. Dr. Ernest Adu-Gyamfi" },
];

export default function ProgramPage() {
  return (
    <div style={{ background: "var(--warm-white)" }}>

      {/* Hero */}
      <div
        className="pt-32 pb-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
      >
        <FadeIn>
          <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
            Book Launch
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Rev. Fred Deegbe's<br />Book Launch
          </h1>

          {/* Event details */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <MapPin size={15} style={{ color: "var(--gold)" }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                Calvary Baptist Church, Shiashie
              </span>
            </div>
            <div
              className="w-px h-4 hidden md:block"
              style={{ background: "rgba(255,255,255,0.2)" }}
            />
            <div className="flex items-center gap-2">
              <Clock size={15} style={{ color: "var(--gold)" }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                3:00 PM
              </span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Programme */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <FadeIn className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
              Order of Service
            </span>
            <h2
              className="text-3xl font-bold mt-3"
              style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
            >
              Programme Outline
            </h2>
            {/* Gold divider */}
            <div className="flex items-center gap-3 justify-center mt-5">
              <div className="h-px flex-1 max-w-16" style={{ background: "var(--border)" }} />
              <Music size={14} style={{ color: "var(--gold)" }} />
              <div className="h-px flex-1 max-w-16" style={{ background: "var(--border)" }} />
            </div>
          </FadeIn>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--border)", boxShadow: "0 8px 40px rgba(0,0,0,0.07)" }}
          >
            {/* Gold top bar */}
            <div className="h-1" style={{ background: "linear-gradient(to right, var(--gold), rgba(201,168,76,0.3))" }} />

            {programme.map((row, i) => (
              <FadeIn key={row.num} delay={i * 0.04}>
                <div
                  className="flex items-start gap-5 px-7 py-4 transition-colors duration-150"
                  style={{
                    background: i % 2 === 0 ? "white" : "var(--cream)",
                    borderBottom: i < programme.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  {/* Number */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(201,168,76,0.12)",
                      border: "1px solid rgba(201,168,76,0.25)",
                    }}
                  >
                    <span className="text-xs font-bold" style={{ color: "var(--gold)" }}>
                      {row.num}
                    </span>
                  </div>

                  {/* Item */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--navy)", fontFamily: "var(--font-heading)" }}
                    >
                      {row.item}
                    </p>
                    {row.detail && (
                      <p className="text-xs italic mt-0.5" style={{ color: "var(--warm-gray)" }}>
                        {row.detail}
                      </p>
                    )}
                  </div>

                  {/* Performer */}
                  {row.performer && (
                    <div className="text-right flex-shrink-0 max-w-[45%]">
                      <span
                        className="text-xs font-medium"
                        style={{ color: "var(--deep-blue)" }}
                      >
                        {row.performer}
                      </span>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}

            {/* Bottom note */}
            <div
              className="px-7 py-5 text-center"
              style={{ background: "var(--deep-blue)" }}
            >
              <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-serif)" }}>
                "Every good and perfect gift is from above." — James 1:17 (NKJV)
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
