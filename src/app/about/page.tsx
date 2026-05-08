import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { Scale, BookOpen, Globe, Users, Heart, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Rev. Dr. Frederick P. Deegbe",
  description:
    "Learn about Rev. Dr. Frederick P. Deegbe — distinguished minister, teacher, lawyer, author, and statesman whose life has been marked by unwavering devotion to God, selfless leadership, and dedicated service to humanity.",
};

const milestones = [
  { year: "1955", event: "Born in Keta on 9 February 1955, displaying early intellectual curiosity and spiritual sensitivity." },
  { year: "Early", event: "Attended Zion College and completed sixth form at Oda Secondary School." },
  { year: "~1978", event: "Obtained the LL.B degree in Law from the University of Ghana." },
  { year: "1981", event: "Completed professional legal training at the Ghana School of Law and was called to the Bar." },
  { year: "1980s", event: "Responded to God's call, left a promising legal career to pursue Christian ministry — a profound act of faith and sacrifice." },
  { year: "1980s", event: "Served as Chaplain at Baylor University Medical Center, USA, offering spiritual care to patients and families in life's most difficult moments." },
  { year: "1980s", event: "Earned ministerial master's and doctoral degrees from Southwestern Baptist Theological Seminary and Asbury Theological Seminary." },
  { year: "1980s", event: "Served as lecturer at Ghana Baptist Seminary, mentoring future generations of Christian leaders." },
  { year: "Late 80s", event: "Served as Senior Pastor of New Tafo Baptist Church, now known as Central Baptist Church, Kumasi." },
  { year: "1991", event: "Called as Senior Pastor of Calvary Baptist Church, Accra — beginning 33 years of devoted pastoral ministry." },
  { year: "1992", event: "Elected President of the Ghana Baptist Convention, a role he held until 2000, providing visionary national leadership." },
  { year: "2003", event: "Appointed General Secretary of the Christian Council of Ghana — a position held until 2013, championing unity, justice, peace, and ethical leadership." },
  { year: "2024", event: "Retired as Senior Pastor of Calvary Baptist Church after 33 faithful years of transformational ministry." },
];

const credentials = [
  {
    icon: Scale,
    title: "Theologian & Lawyer",
    desc: "Holds an LL.B from the University of Ghana, called to the Bar in 1981. Later earned an M.Div from Southwestern Baptist Theological Seminary and a D.Min from Asbury Theological Seminary (USA).",
  },
  {
    icon: BookOpen,
    title: "Prolific Author",
    desc: "Author of ten books including Hollow Faith, Thriving in Retirement, Forgive God!, The Sticky Couple, Born to Blossom, and Stranger in My Own Country — each reflecting deep spiritual insight and pastoral wisdom.",
  },
  {
    icon: Globe,
    title: "Church Statesman",
    desc: "Served as President of the Ghana Baptist Convention (1992–2000) and General Secretary of the Christian Council of Ghana (2003–2013). Active in the All Africa Conference of Churches and Fellowship of Christian Councils in West Africa.",
  },
  {
    icon: Users,
    title: "National Voice",
    desc: "Served on the Ghana AIDS Commission, Ghana Anti-Corruption Coalition, National Media Commission, Narcotics Control Board, Coalition of Domestic Election Observers, and the Christian Community Mutual Fund.",
  },
  {
    icon: Heart,
    title: "Pastoral Leader",
    desc: "Served 33 years as Senior Pastor of Calvary Baptist Church, Accra (1991–2024), building a vibrant, compassionate church community where countless individuals encountered faith, healing, and renewed purpose.",
  },
  {
    icon: Award,
    title: "Educator & Chaplain",
    desc: "Lectured at Ghana Baptist Seminary, shaping future ministers. Served as Chaplain at Baylor University Medical Center, USA, providing spiritual care in some of life's most difficult moments.",
  },
];

const books = [
  { title: "Hollow Faith Is Powerless Religion", image: "/books/hollow-faith.jpg" },
  { title: "Thriving in Retirement",             image: "/books/thriving-retirement.jpg" },
  { title: "The Three Powers",                   image: "/books/the-three-powers.png" },
  { title: "The Sticky Couple",                  image: "/books/the-sticky-couple.png" },
  { title: "Stranger in My Own Country",         image: "/books/stranger-country.png" },
  { title: "Forgive God!",                       image: "/books/forgive-god.png" },
  { title: "Born to Blossom",                    image: "/books/born-to-blossom.png" },
  { title: "When Friends Fight",                 image: "/books/when-friends-fight.png" },
  { title: "Building a Christian Home",          image: "/books/building-a-christian-home.png" },
  { title: "Empowered to Make Life Meaningful",  image: "/books/empowered-meaningful.png" },
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
          {/* <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
            About
          </span> */}
          <h1
            className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Rev. Dr. Frederick P. Deegbe
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Distinguished minister, teacher, lawyer, author, and statesman — a life wholly surrendered to God and committed to the service of others.
          </p>
        </FadeIn>
      </div>

      {/* Biography — top: image + first 3 chapters */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* Image */}
          <FadeIn direction="left">
            <div
              className="rounded-2xl relative overflow-hidden flex items-end"
              style={{ aspectRatio: "3/4", boxShadow: "0 24px 64px rgba(0,0,0,0.18)" }}
            >
              <Image
                src="/profile/author.png"
                alt="Rev. Dr. Frederick P. Deegbe"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div
                className="relative z-10 p-6 w-full"
                style={{ background: "linear-gradient(to top, rgba(15,37,68,0.95) 0%, transparent 100%)" }}
              >
                <p className="text-white font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                  Rev. Dr. Frederick P. Deegbe
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--gold)" }}>
                  Minister · Theologian · Lawyer · Author · Statesman
                </p>
              </div>
            </div>
          </FadeIn>

          {/* First 3 chapters */}
          <FadeIn direction="right">
            <div className="flex flex-col gap-9">

              <div>
                <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "var(--gold)" }}>Overview</span>
                <h2 className="text-2xl font-bold mt-2 mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
                  A Life of Courage, Sacrifice & Enduring Faith
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                  Rev. Dr. Frederick P. Deegbe is a distinguished minister, teacher, lawyer, author, and statesman whose life has been marked by unwavering devotion to God, selfless leadership, and dedicated service to humanity. Over three decades, he has inspired countless lives through pastoral ministry, national service, theological scholarship, and compassionate Christian leadership.
                </p>
              </div>

              <div className="w-full h-px" style={{ background: "var(--border)" }} />

              <div>
                <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "var(--gold)" }}>Early Life & Education</span>
                <h3 className="text-lg font-bold mt-2 mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
                  Formed by Discipline & Intellectual Curiosity
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                  Born in Keta on 9 February 1955, Rev. Dr. Deegbe's early years reflected the discipline, intellectual curiosity, and spiritual sensitivity that would later define his remarkable journey. He attended Zion College before completing his sixth form education at Oda Secondary School. His academic excellence led him to the University of Ghana, where he obtained the LL.B degree in Law. He subsequently pursued professional legal training at the Ghana School of Law and was called to the Bar in 1981.
                </p>
              </div>

              <div className="w-full h-px" style={{ background: "var(--border)" }} />

              <div>
                <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "var(--gold)" }}>The Call to Ministry</span>
                <h3 className="text-lg font-bold mt-2 mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
                  From the Courtroom to the Pulpit
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                  Despite a promising legal career, Rev. Dr. Deegbe responded to a higher calling upon sensing the unmistakable call of God upon his life. In a profound act of faith and sacrifice, he left the legal profession to pursue Christian ministry, dedicating his life to serving God and people with passion, humility, and integrity.
                </p>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* Biography — bottom: remaining 4 chapters in 2-col cards */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {[
            {
              label: "Theological Formation",
              title: "Shaped by Scholarship & Compassionate Service",
              paras: [
                "To prepare himself for ministry, he undertook theological studies in the United States, earning ministerial masters and doctoral degrees from Southwestern Baptist Theological Seminary and Asbury Theological Seminary respectively. These formative years deepened his theological insight and shaped his compassionate, people-centred approach to ministry.",
                "Throughout his distinguished career, Rev. Dr. Deegbe has served faithfully in numerous pastoral and ministerial roles. He ministered as a Chaplain at Baylor University Medical Center, where he offered spiritual care and comfort to patients and families during some of life's most difficult moments. He also served as a lecturer at Ghana Baptist Seminary, mentoring and shaping future generations of Christian leaders.",
              ],
            },
            {
              label: "Pastoral Ministry",
              title: "A Shepherd's Heart Over Three Decades",
              paras: [
                "His pastoral leadership became especially impactful during his tenure as Senior Pastor of New Tafo Baptist Church, now known as Central Baptist Church, Kumasi. He continued to distinguish himself as a faithful servant at Calvary Baptist Church serving as Senior Pastor from 1991 to 2024.",
                "Rev. Dr. Deegbe devoted over three decades to building a vibrant, compassionate, and spiritually grounded church community. Under his leadership, countless individuals encountered faith, healing, restoration, and renewed purpose.",
              ],
            },
            {
              label: "National Leadership",
              title: "A Voice for Unity, Justice & Ethical Leadership",
              paras: [
                "Beyond the pulpit, Rev. Dr. Deegbe emerged as one of Ghana's most respected Christian leaders. He served as President of the Ghana Baptist Convention from 1992 to 2000, providing visionary leadership during a significant period in the Convention's history. He later served as General Secretary of the Christian Council of Ghana from 2003 to 2013, where he became a strong moral voice on national issues, championing unity, justice, peace, and ethical leadership.",
                "Combining his legal background with deep ministerial experience, Rev. Dr. Deegbe contributed immensely to national development through service on several important national and international boards and institutions. These included the Ghana AIDS Commission, Ghana Anti-Corruption Coalition, Coalition of Domestic Election Observers, National Media Commission, Narcotics Control Board, All Africa Conference of Churches, Fellowship of Christian Councils and Churches in West Africa, and the Christian Community Mutual Fund, among others. In every sphere, he brought wisdom, integrity, courage, and a deeply principled Christian perspective.",
              ],
            },
            {
              label: "Legacy",
              title: "A Life Wholly Surrendered",
              paras: [
                "A gifted communicator and thoughtful author, Rev. Dr. Deegbe has also enriched many lives through his writings. His books reflect profound spiritual insight, practical wisdom, and an honest engagement with the realities of life and faith.",
                "At the heart of all his accomplishments is a devoted family man whose life reflects love, faithfulness, and grace. Rev. Dr. Frederick P. Deegbe is happily married to his beloved wife, Lady Joana, and together they have been blessed with three adult children, and seven grandchildren. Their enduring partnership stands as a testimony to the values of faith, commitment, and Christian family life that he has passionately taught throughout his ministry.",
                "Rev. Dr. Frederick P. Deegbe's life story is one of courage, sacrifice, compassion, and enduring faith. From the courtroom to the pulpit, from theological classrooms to national leadership platforms, he has consistently demonstrated what it means to live a life wholly surrendered to God and committed to the service of others. His legacy continues to inspire generations within Ghana and beyond.",
              ],
            },
          ].map((chapter, i) => (
            <FadeIn key={chapter.label} delay={i * 0.08}>
              <div
                className="p-8 rounded-2xl h-full flex flex-col gap-4"
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.05)",
                }}
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "var(--gold)" }}>
                    {chapter.label}
                  </span>
                  <h3 className="text-base font-bold mt-2" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
                    {chapter.title}
                  </h3>
                </div>
                <div
                  className="w-10 h-0.5 rounded-full"
                  style={{ background: "var(--gold)", opacity: 0.5 }}
                />
                <div className="flex flex-col gap-3 flex-1">
                  {chapter.paras.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}

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
              <FadeIn key={c.title} delay={i * 0.08}>
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

      {/* Publications */}
      <section className="py-24 px-6" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
              Publications
            </span>
            <h2
              className="text-3xl font-bold mt-3"
              style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
            >
              Words That Endure
            </h2>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "var(--warm-gray)" }}>
              A gifted communicator and thoughtful author, Rev. Dr. Deegbe has enriched many lives through his writings — each reflecting profound spiritual insight and an honest engagement with life and faith.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {books.map((book, i) => (
              <FadeIn key={book.title} delay={i * 0.05}>
                <div
                  className="rounded-xl overflow-hidden group"
                  style={{ border: "1px solid var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                  <div className="px-3 py-2" style={{ background: "white" }}>
                    <p className="text-xs font-semibold leading-snug text-center" style={{ color: "var(--navy)", fontFamily: "var(--font-heading)" }}>
                      {book.title}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Family */}
      <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>Family</span>
            <h2 className="text-3xl font-bold mt-3" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
              Rooted in Love
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Family photo */}
            <FadeIn direction="left">
              <div
                className="rounded-2xl overflow-hidden relative"
                style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.15)", background: "var(--navy)" }}
              >
                <Image
                  src="/profile/family.jpg"
                  alt="Rev. Dr. Deegbe and family"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gold accent bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: "linear-gradient(to right, var(--gold), rgba(201,168,76,0.3))" }}
                />
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn direction="right">
              <div className="flex flex-col justify-center h-full gap-6">
                <p className="text-base leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                  Rev. Dr. Deegbe is happily married to his beloved wife,{" "}
                  <span>Lady Joana Deegbe</span>. Together they have been
                  blessed with three adult children and seven grandchildren. Their enduring partnership stands as a
                  testimony to the values of faith, commitment, and Christian family life he has passionately taught
                  throughout his ministry.
                </p>
                <div
                  className="pl-5 py-3 rounded-r-lg"
                  style={{ borderLeft: "3px solid var(--gold)", background: "rgba(201,168,76,0.04)" }}
                >
                  <p className="text-sm italic" style={{ fontFamily: "var(--font-serif)", color: "var(--deep-blue)" }}>
                    "As for me and my house, we will serve the Lord."
                  </p>
                  <p className="text-xs mt-1 font-semibold" style={{ color: "var(--gold)" }}>Joshua 24:15 (NKJV)</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6" style={{ background: "var(--warm-white)" }}>
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
                <FadeIn key={i} delay={i * 0.06} className="flex gap-8 items-start">
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
