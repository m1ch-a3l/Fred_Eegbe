"use client";
import Image from "next/image";
import { useState } from "react";

export default function AuthorPortrait() {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10"
    >
      {/* Portrait ring */}
      <div className="rounded-full p-1 bg-white">
        {/* Portrait circle */}
        <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #0F2544 100%)" }}>
            {!imgError ? (
              <Image
                src="/profile/author.png"
                alt="Rev. Dr. Fred P. Deegbe"
                fill
                className="object-cover object-top"
                sizes="208px"
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              /* Fallback initials avatar when image isn't added yet */
              <div className="w-full h-full flex flex-col items-center justify-center gap-1">
                <span
                  className="text-5xl font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--gold)" }}
                >
                  FD
                </span>
                <span className="text-xs text-center px-3 leading-tight"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  Add author.jpg to /public
                </span>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}
