"use client";
import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { Camera, Play, Newspaper, X } from "lucide-react";

const categories = ["All", "Ministry", "Events", "Conferences", "Family"];

type GalleryItem = {
  id: number;
  src: string | null;
  alt: string;
  category: string;
  span?: "wide" | "tall" | "normal";
};

const galleryItems: GalleryItem[] = [
  { id: 1,  src: null, alt: "Preaching at Calvary Baptist Church, Accra", category: "Ministry", span: "wide" },
  { id: 2,  src: null, alt: "Ghana Baptist Convention Presidency, 1992", category: "Conferences" },
  { id: 3,  src: null, alt: "Book launch — Hollow Faith", category: "Events" },
  { id: 4,  src: null, alt: "Christian Council of Ghana — General Secretariat", category: "Ministry", span: "tall" },
  { id: 5,  src: null, alt: "Family portrait with Lady Joana", category: "Family" },
  { id: 6,  src: null, alt: "All Africa Conference of Churches, delegation", category: "Conferences" },
  { id: 7,  src: null, alt: "National Prayer Breakfast, Accra", category: "Events", span: "wide" },
  { id: 8,  src: null, alt: "Commissioning service — Calvary Baptist Church", category: "Ministry" },
  { id: 9,  src: null, alt: "Book signing — Thriving in Retirement", category: "Events" },
  { id: 10, src: null, alt: "Grandchildren at Christmas celebration", category: "Family", span: "tall" },
  { id: 11, src: null, alt: "Fellowship of Christian Councils — West Africa", category: "Conferences" },
  { id: 12, src: null, alt: "Retirement thanksgiving service, 2024", category: "Ministry", span: "wide" },
];

const videos = [
  { title: "Sermon: Do Not Despise Small Beginnings", duration: "42 min", venue: "Calvary Baptist Church" },
  { title: "Interview: Faith, Law & the Call to Ministry", duration: "28 min", venue: "GTV Ghana" },
  { title: "Talk: Building a Christian Home", duration: "55 min", venue: "National Prayer Breakfast" },
  { title: "Book Launch: Hollow Faith — Author's Address", duration: "19 min", venue: "Accra, 2023" },
];

const pressItems = [
  { outlet: "Daily Graphic", headline: "Rev. Dr. Deegbe Calls for Moral Renewal in National Leadership", date: "March 2019" },
  { outlet: "Ghana Broadcasting Corporation", headline: "Christian Council Secretary Speaks on Unity & Justice", date: "June 2011" },
  { outlet: "Graphic Showbiz", headline: "Author of 'Hollow Faith' on Writing, Faith & Modern Christianity", date: "January 2024" },
  { outlet: "Peace FM", headline: "Deegbe on 33 Years of Pastoral Ministry at Calvary Baptist", date: "August 2024" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = active === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.category === active);

  return (
    <div style={{ background: "var(--warm-white)" }}>

      {/* Hero */}
      <div
        className="pt-32 pb-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
      >
        <FadeIn>
          <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
            Gallery & Media
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Moments of Ministry
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            A visual record of a life poured out in service — from the pulpit to the nation, from family to the world stage.
          </p>
        </FadeIn>
      </div>

      {/* Photo Gallery */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <FadeIn className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>Photos</span>
            <h2 className="text-3xl font-bold mt-3" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
              Photo Gallery
            </h2>
          </FadeIn>

          {/* Filter tabs */}
          <FadeIn className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  background: active === cat ? "var(--deep-blue)" : "var(--cream)",
                  color: active === cat ? "white" : "var(--warm-gray)",
                  border: "1px solid var(--border)",
                }}
              >
                {cat}
              </button>
            ))}
          </FadeIn>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {filtered.map((item, i) => (
              <FadeIn
                key={item.id}
                delay={i * 0.05}
                className={[
                  item.span === "wide" ? "col-span-2" : "",
                  item.span === "tall" ? "row-span-2" : "",
                ].join(" ")}
              >
                <button
                  className="w-full h-full rounded-xl overflow-hidden relative group cursor-pointer text-left"
                  style={{ border: "1px solid var(--border)" }}
                  onClick={() => setLightbox(item)}
                >
                  {item.src ? (
                    <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    /* Placeholder when no image is uploaded yet */
                    <div
                      className="w-full h-full flex flex-col items-center justify-center gap-3 transition-all duration-300 group-hover:opacity-80"
                      style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
                    >
                      <Camera size={28} style={{ color: "rgba(201,168,76,0.6)" }} />
                      <span
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)" }}
                      >
                        {item.category}
                      </span>
                    </div>
                  )}

                  {/* Hover overlay with caption */}
                  <div
                    className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    style={{ background: "linear-gradient(to top, rgba(15,37,68,0.92) 0%, transparent 60%)" }}
                  >
                    <div className="p-4 w-full">
                      <p className="text-white text-xs font-medium leading-snug">{item.alt}</p>
                      <span
                        className="text-[10px] mt-1 inline-block px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(201,168,76,0.2)", color: "var(--gold)" }}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <p className="text-sm" style={{ color: "var(--warm-gray)" }}>
              More photos coming soon. To submit photos from ministry events, please{" "}
              <a href="/contact" className="font-medium underline" style={{ color: "var(--deep-blue)" }}>contact us</a>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>Video</span>
            <h2 className="text-3xl font-bold mt-3" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
              Sermons & Talks
            </h2>
            <p className="text-base mt-4 max-w-xl mx-auto" style={{ color: "var(--warm-gray)" }}>
              Watch selected messages, interviews, and talks from Rev. Dr. Deegbe's ministry.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div
                  className="rounded-2xl overflow-hidden group cursor-pointer"
                  style={{ border: "1px solid var(--border)", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
                >
                  {/* Thumbnail placeholder */}
                  <div
                    className="relative flex items-center justify-center"
                    style={{ height: 180, background: "linear-gradient(135deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "rgba(201,168,76,0.2)", border: "2px solid var(--gold)" }}
                    >
                      <Play size={22} className="ml-1" style={{ color: "var(--gold)" }} />
                    </div>
                    <span
                      className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded"
                      style={{ background: "rgba(0,0,0,0.5)", color: "white" }}
                    >
                      {v.duration}
                    </span>
                  </div>
                  <div className="p-5" style={{ background: "white" }}>
                    <p className="text-sm font-semibold leading-snug mb-1" style={{ color: "var(--navy)", fontFamily: "var(--font-heading)" }}>
                      {v.title}
                    </p>
                    <p className="text-xs" style={{ color: "var(--warm-gray)" }}>{v.venue}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <p className="text-sm" style={{ color: "var(--warm-gray)" }}>
              Full video library coming soon. Subscribe on YouTube to stay updated.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Press & Media */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>Press</span>
            <h2 className="text-3xl font-bold mt-3" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
              In the News
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-5">
            {pressItems.map((p, i) => (
              <FadeIn key={p.headline} delay={i * 0.08}>
                <div
                  className="flex items-start gap-5 p-6 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "white", border: "1px solid var(--border)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(201,168,76,0.1)" }}
                  >
                    <Newspaper size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-semibold leading-snug mb-1" style={{ color: "var(--navy)", fontFamily: "var(--font-heading)" }}>
                      {p.headline}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold" style={{ color: "var(--gold)" }}>{p.outlet}</span>
                      <span className="text-xs" style={{ color: "var(--warm-gray)" }}>· {p.date}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <p className="text-sm" style={{ color: "var(--warm-gray)" }}>
              For media enquiries and press requests, please{" "}
              <a href="/contact" style={{ color: "var(--deep-blue)" }} className="font-medium underline">get in touch</a>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.15)" }}
            onClick={() => setLightbox(null)}
          >
            <X size={18} style={{ color: "white" }} />
          </button>
          <div
            className="max-w-2xl w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.src ? (
              <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                <Image src={lightbox.src} alt={lightbox.alt} fill className="object-contain" />
              </div>
            ) : (
              <div
                className="flex flex-col items-center justify-center gap-4 py-20"
                style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
              >
                <Camera size={40} style={{ color: "rgba(201,168,76,0.5)" }} />
                <p className="text-white text-sm font-medium text-center px-6">{lightbox.alt}</p>
                <span className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)" }}>
                  {lightbox.category}
                </span>
              </div>
            )}
            <div className="p-5" style={{ background: "white" }}>
              <p className="text-sm font-medium" style={{ color: "var(--navy)", fontFamily: "var(--font-heading)" }}>{lightbox.alt}</p>
              <span className="text-xs mt-1 inline-block" style={{ color: "var(--gold)" }}>{lightbox.category}</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
