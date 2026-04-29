"use client";
import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { Mail, MapPin, Send, Check, Heart } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", type: "general" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const [prayerRequest, setPrayerRequest] = useState("");
  const [prayerSubmitted, setPrayerSubmitted] = useState(false);

  return (
    <div style={{ background: "var(--warm-white)" }}>
      {/* Hero */}
      <div
        className="pt-32 pb-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
      >
        <FadeIn>
          <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
            Connect
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get in Touch
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Whether you have a question, want to invite Fred to speak, or simply want to connect — we would love to hear from you.
          </p>
        </FadeIn>
      </div>

      {/* Contact details + form */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Sidebar */}
          <FadeIn direction="left" className="flex flex-col gap-6">
            <div
              className="p-7 rounded-2xl"
              style={{ background: "var(--cream)", border: "1px solid var(--border)" }}
            >
              <Mail size={20} className="mb-3" style={{ color: "var(--gold)" }} />
              <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--navy)", fontFamily: "var(--font-heading)" }}>
                Email Us
              </h3>
              <p className="text-sm" style={{ color: "var(--warm-gray)" }}>
                hello@fredeegbe.com
              </p>
            </div>

            <div
              className="p-7 rounded-2xl"
              style={{ background: "var(--cream)", border: "1px solid var(--border)" }}
            >
              <MapPin size={20} className="mb-3" style={{ color: "var(--gold)" }} />
              <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--navy)", fontFamily: "var(--font-heading)" }}>
                Ministry Base
              </h3>
              <p className="text-sm" style={{ color: "var(--warm-gray)" }}>
                Lagos, Nigeria<br />
                (With global reach)
              </p>
            </div>

            <div
              className="p-7 rounded-2xl"
              style={{ background: "var(--deep-blue)" }}
            >
              <p
                className="text-sm italic leading-relaxed"
                style={{ fontFamily: "var(--font-serif)", color: "rgba(255,255,255,0.85)" }}
              >
                "Ask and it will be given to you; seek and you will find; knock and the door will be opened."
              </p>
              <p className="text-xs mt-3 font-medium" style={{ color: "var(--gold)" }}>
                Matthew 7:7
              </p>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right" className="md:col-span-2">
            {submitted ? (
              <div
                className="p-16 rounded-2xl flex flex-col items-center justify-center text-center"
                style={{ background: "white", border: "1px solid var(--border)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "rgba(201,168,76,0.1)", border: "2px solid var(--gold)" }}
                >
                  <Check size={32} style={{ color: "var(--gold)" }} />
                </div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
                >
                  Message Received
                </h2>
                <p className="text-base" style={{ color: "var(--warm-gray)" }}>
                  Thank you for reaching out. We will respond within 3–5 business days.
                  May God bless you richly.
                </p>
              </div>
            ) : (
              <div
                className="p-10 rounded-2xl"
                style={{ background: "white", border: "1px solid var(--border)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              >
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
                >
                  Send a Message
                </h2>

                {/* Type selector */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { id: "general", label: "General" },
                    { id: "speaking", label: "Speaking Invitation" },
                    { id: "ministry", label: "Ministry Partnership" },
                    { id: "media", label: "Media / Press" },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, type: opt.id })}
                      className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                      style={{
                        background: formData.type === opt.id ? "var(--deep-blue)" : "var(--cream)",
                        color: formData.type === opt.id ? "white" : "var(--warm-gray)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "var(--warm-gray)" }}>Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ border: "1px solid var(--border)", background: "var(--warm-white)", color: "var(--charcoal)" }}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-2" style={{ color: "var(--warm-gray)" }}>Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                        style={{ border: "1px solid var(--border)", background: "var(--warm-white)", color: "var(--charcoal)" }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "var(--warm-gray)" }}>Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                      style={{ border: "1px solid var(--border)", background: "var(--warm-white)", color: "var(--charcoal)" }}
                      placeholder="What is this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "var(--warm-gray)" }}>Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none"
                      style={{ border: "1px solid var(--border)", background: "var(--warm-white)", color: "var(--charcoal)" }}
                      placeholder="Share your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 py-3.5 rounded-lg text-sm font-medium transition-all duration-300"
                    style={{ background: "var(--gold)", color: "white" }}
                  >
                    <Send size={15} /> Send Message
                  </button>
                </form>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Prayer request */}
      <section className="py-20 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: "rgba(201,168,76,0.1)" }}>
              <Heart size={20} style={{ color: "var(--gold)" }} />
            </div>
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
              Prayer
            </span>
            <h2
              className="text-3xl font-bold mt-3 mb-5"
              style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
            >
              Submit a Prayer Request
            </h2>
            <p className="text-base mb-8" style={{ color: "var(--warm-gray)" }}>
              We believe in the power of prayer. Share your request and our team will stand with you in intercession.
            </p>

            {prayerSubmitted ? (
              <div className="py-8 flex flex-col items-center gap-3">
                <Check size={32} style={{ color: "var(--gold)" }} />
                <p style={{ color: "var(--navy)" }} className="font-medium">
                  Your request has been received. We are praying for you.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (prayerRequest) setPrayerSubmitted(true); }}
                className="flex flex-col gap-4"
              >
                <textarea
                  rows={4}
                  value={prayerRequest}
                  onChange={(e) => setPrayerRequest(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl text-sm outline-none resize-none"
                  style={{ border: "1px solid var(--border)", background: "white", color: "var(--charcoal)" }}
                  placeholder="Share your prayer request here... (kept confidential)"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm font-medium transition-all duration-300"
                  style={{ background: "var(--deep-blue)", color: "white" }}
                >
                  Submit Prayer Request
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
