"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "Ministry", "Events", "Conferences"];

type Photo = {
  src: string;
  alt: string;
  category: string;
};

const photos: Photo[] = [
  { src: "/gallery/CBC PS-146.jpg",                                   alt: "Calvary Baptist Church — Service",            category: "Ministry" },
  { src: "/gallery/CBC PS-150.jpg",                                   alt: "Calvary Baptist Church — Congregation",       category: "Ministry" },
  { src: "/gallery/Photo_2023 (37 of 67).jpg",                        alt: "Ministry — 2023",                             category: "Ministry" },
  { src: "/gallery/Photo_2023 (60 of 67).jpg",                        alt: "Ministry — 2023",                             category: "Ministry" },
  { src: "/gallery/IMG_2632.jpg",                                     alt: "Event — Ministry Gathering",                  category: "Events" },
  { src: "/gallery/IMG_2661.jpg",                                     alt: "Event — Ministry Gathering",                  category: "Events" },
  { src: "/gallery/IMG_2666.jpg",                                     alt: "Event — Ministry Gathering",                  category: "Events" },
  { src: "/gallery/Photo (4 of 27).jpg",                              alt: "Conference — Christian Council",              category: "Conferences" },
  { src: "/gallery/Photo (7 of 27).jpg",                              alt: "Conference — Christian Council",              category: "Conferences" },
  { src: "/gallery/WhatsApp Image 2025-01-17 at 06.10.15 (2).jpeg",  alt: "Ministry Occasion",                           category: "Ministry" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <div style={{ background: "var(--warm-white)" }}>

      {/* Hero */}
      <div
        className="pt-32 pb-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
      >
        <FadeIn>
          <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
            Gallery
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Moments of Ministry
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            A visual record of a life poured out in service — from the pulpit to the nation and beyond.
          </p>
        </FadeIn>
      </div>

      {/* Gallery */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Filter tabs */}
          <FadeIn className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActive(cat); setLightboxIndex(null); }}
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
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((photo, i) => (
              <FadeIn key={photo.src} delay={i * 0.05} className="break-inside-avoid">
                <button
                  className="w-full block rounded-xl overflow-hidden relative group cursor-pointer"
                  style={{ border: "1px solid var(--border)" }}
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                    style={{ background: "linear-gradient(to top, rgba(15,37,68,0.88) 0%, transparent 60%)" }}
                  >
                    <div className="p-4 w-full">
                      <p className="text-white text-xs font-medium leading-snug">{photo.alt}</p>
                      <span
                        className="text-[10px] mt-1 inline-block px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(201,168,76,0.25)", color: "var(--gold)" }}
                      >
                        {photo.category}
                      </span>
                    </div>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <p className="text-sm" style={{ color: "var(--warm-gray)" }}>
              To submit photos from ministry events, please{" "}
              <a href="/contact" className="font-medium underline" style={{ color: "var(--deep-blue)" }}>contact us</a>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: "rgba(255,255,255,0.12)" }}
            onClick={closeLightbox}
          >
            <X size={18} color="white" />
          </button>

          {/* Counter */}
          <div
            className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-medium"
            style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
          >
            {lightboxIndex + 1} / {filtered.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: "rgba(255,255,255,0.12)" }}
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={22} color="white" />
          </button>

          {/* Image */}
          <div
            className="relative mx-20 md:mx-32 max-h-[85vh] max-w-4xl w-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full flex-1 min-h-0" style={{ maxHeight: "75vh" }}>
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-contain rounded-xl"
                sizes="90vw"
                priority
              />
            </div>

            {/* Caption */}
            <div className="pt-4 pb-2 text-center">
              <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>
                {filtered[lightboxIndex].alt}
              </p>
              <span
                className="text-xs mt-1 inline-block px-3 py-0.5 rounded-full"
                style={{ background: "rgba(201,168,76,0.2)", color: "var(--gold)" }}
              >
                {filtered[lightboxIndex].category}
              </span>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: "rgba(255,255,255,0.12)" }}
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={22} color="white" />
          </button>

          {/* Thumbnail strip */}
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 px-4 overflow-x-auto max-w-[90vw]"
            style={{ scrollbarWidth: "none" }}
          >
            {filtered.map((p, i) => (
              <button
                key={p.src}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className="flex-shrink-0 rounded-md overflow-hidden transition-all duration-200"
                style={{
                  width: 48,
                  height: 36,
                  opacity: i === lightboxIndex ? 1 : 0.45,
                  border: i === lightboxIndex ? "2px solid var(--gold)" : "2px solid transparent",
                }}
              >
                <Image src={p.src} alt={p.alt} width={48} height={36} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
