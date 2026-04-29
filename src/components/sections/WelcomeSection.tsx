import FadeIn from "@/components/ui/FadeIn";

export default function WelcomeSection() {
  return (
    <section className="py-28 px-6" style={{ background: "var(--warm-white)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <span
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: "var(--gold)" }}
          >
            Welcome
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-3 mb-10"
            style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
          >
            A Word for Your Journey
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="text-xl leading-relaxed mb-6"
            style={{ color: "var(--warm-gray)", fontFamily: "var(--font-serif)" }}
          >
            I believe every person carries an assignment from heaven — a unique calling placed
            within them before the foundations of the world. My life's work is to help you
            uncover that calling, walk in it with confidence, and leave a legacy that outlasts you.
          </p>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--warm-gray)", fontFamily: "var(--font-serif)" }}
          >
            Whether through books, teachings, or ministry, my prayer is that every encounter
            with this work draws you closer to the Father, deeper into purpose, and higher in faith.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            className="mt-14 py-8 px-10 rounded-2xl relative overflow-hidden"
            style={{ background: "var(--cream)", border: "1px solid var(--border)" }}
          >
            {/* Decorative gold line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
              style={{ background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }}
            />
            <p
              className="text-xl italic leading-relaxed mb-3"
              style={{ fontFamily: "var(--font-serif)", color: "var(--deep-blue)" }}
            >
              "But seek first his kingdom and his righteousness, and all these things will be given to you as well."
            </p>
            <p className="text-sm font-semibold tracking-wide" style={{ color: "var(--gold)" }}>
              Matthew 6:33
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
