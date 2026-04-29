import FadeIn from "@/components/ui/FadeIn";

const testimonials = [
  {
    quote: "The teachings of Fred Eegbe transformed my understanding of purpose. For the first time, I understood that my calling was not about performance — it was about relationship with God.",
    name: "Amara O.",
    role: "Business Leader, Lagos",
    initials: "AO",
  },
  {
    quote: "I attended one of his conferences at a very low point in my life. I left with renewed hope and a clarity I had not experienced in years. His words carry real anointing.",
    name: "Pastor James K.",
    role: "Senior Pastor, Nairobi",
    initials: "JK",
  },
  {
    quote: '"Walking in Your Calling" is the book I wish I had 10 years ago. It\'s practical, deeply scriptural, and profoundly life-changing.',
    name: "Dr. Sandra M.",
    role: "Educator & Author, London",
    initials: "SM",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 px-6" style={{ background: "var(--warm-white)" }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--gold)" }}>
            Testimonies
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3"
            style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
          >
            Lives Changed by Grace
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.12}>
              <div
                className="p-8 rounded-2xl h-full flex flex-col transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="text-5xl leading-none mb-4 -mt-2 select-none"
                  style={{ color: "var(--gold)", fontFamily: "Georgia, serif" }}
                >
                  "
                </div>
                <p
                  className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: "var(--warm-gray)", fontFamily: "var(--font-serif)" }}
                >
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: "var(--deep-blue)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--navy)" }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--warm-gray)" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
