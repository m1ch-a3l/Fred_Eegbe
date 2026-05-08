"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, BookOpen, Mail } from "lucide-react";
import { Suspense } from "react";

function SuccessContent() {
  const params = useSearchParams();
  const ref = params.get("ref") || "";
  const name = params.get("name") || "Friend";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center py-24" style={{ background: "var(--warm-white)" }}>
      {/* Success icon */}
      <div
        className="w-24 h-24 rounded-full flex items-center justify-center mb-8"
        style={{ background: "rgba(45,80,22,0.08)", border: "2px solid var(--forest)" }}
      >
        <CheckCircle size={48} style={{ color: "var(--forest)" }} />
      </div>

      <span className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: "var(--gold)" }}>
        Order Confirmed
      </span>

      <h1
        className="text-4xl md:text-5xl font-bold mb-5"
        style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
      >
        Thank You, {name}!
      </h1>

      <p className="text-lg max-w-md mx-auto mb-4" style={{ color: "var(--warm-gray)" }}>
        Your payment was successful. Your book{" "}
        order is confirmed and will be processed shortly.
      </p>

      {ref && (
        <div
          className="px-6 py-3 rounded-xl mb-8"
          style={{ background: "var(--cream)", border: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--warm-gray)" }}>Order Reference</p>
          <p className="text-sm font-bold mt-1" style={{ color: "var(--navy)", fontFamily: "monospace" }}>{ref}</p>
        </div>
      )}

      {/* What happens next */}
      <div
        className="rounded-2xl p-8 max-w-md w-full mb-10 text-left"
        style={{ background: "white", border: "1px solid var(--border)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
      >
        <h3 className="font-bold mb-5 text-center" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
          What Happens Next
        </h3>
        <div className="flex flex-col gap-4">
          {[
            { icon: Mail, text: "A confirmation email will be sent to your inbox." },
            { icon: BookOpen, text: "Our team will contact you to arrange delivery to your address." },
            { icon: CheckCircle, text: "For signed copy requests, allow extra time for personalisation." },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "rgba(201,168,76,0.1)" }}
              >
                <Icon size={14} style={{ color: "var(--gold)" }} />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scripture */}
      <div
        className="px-8 py-5 rounded-xl max-w-sm mb-10"
        style={{ background: "var(--deep-blue)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p className="text-sm italic text-center" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-serif)" }}>
          "May the God of hope fill you with all joy and peace as you trust in him."
        </p>
        <p className="text-xs text-center mt-2" style={{ color: "var(--gold)" }}>Romans 15:13 (NKJV)</p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5"
          style={{ background: "var(--gold)", color: "white" }}
        >
          Back to Home
        </Link>
        <Link
          href="/store"
          className="px-6 py-3 rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5"
          style={{ border: "1px solid var(--border)", color: "var(--warm-gray)" }}
        >
          Order Another Book
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
