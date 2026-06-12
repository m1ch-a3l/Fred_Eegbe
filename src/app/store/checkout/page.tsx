"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingCart, Lock } from "lucide-react";
import Script from "next/script";

declare global {
  interface Window {
    PaystackPop: {
      setup: (options: Record<string, unknown>) => { openIframe: () => void };
    };
  }
}

export default function CheckoutPage() {
  const { items, total, updateQuantity, removeItem, clearCart, count } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", notes: "" });
  const [loading, setLoading] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateRef = () => `FPD-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!scriptReady || !window.PaystackPop) return alert("Payment system loading, please try again.");
    if (items.length === 0) return;

    setLoading(true);
    const reference = generateRef();

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: form.email,
      amount: Math.round(total * 100), // Paystack uses lowest currency unit (pesewas)
      currency: "GHS",
      ref: reference,
      metadata: {
        custom_fields: [
          { display_name: "Customer Name", variable_name: "customer_name", value: form.name },
          { display_name: "Phone", variable_name: "phone", value: form.phone },
          { display_name: "Delivery Address", variable_name: "address", value: form.address },
          { display_name: "Order Notes", variable_name: "notes", value: form.notes },
          { display_name: "Items", variable_name: "items", value: items.map(i => `${i.title} x${i.quantity}`).join(", ") },
        ],
      },
      callback: async (response: { reference: string }) => {
        // Verify payment on server
        try {
          const res = await fetch(`/api/paystack/verify?reference=${response.reference}`);
          const data = await res.json();
          if (data.status === "success") {
            clearCart();
            router.push(`/store/success?ref=${response.reference}&name=${encodeURIComponent(form.name)}`);
          } else {
            alert("Payment verification failed. Please contact us with your reference: " + response.reference);
          }
        } catch {
          // Still redirect — payment was made, verification can be done manually
          clearCart();
          router.push(`/store/success?ref=${response.reference}&name=${encodeURIComponent(form.name)}`);
        }
        setLoading(false);
      },
      onClose: () => {
        setLoading(false);
      },
    });

    handler.openIframe();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center" style={{ background: "var(--warm-white)" }}>
        <ShoppingCart size={48} style={{ color: "var(--warm-gray)" }} className="mb-4 opacity-30" />
        <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
          Your cart is empty
        </h2>
        <p className="text-sm mb-6" style={{ color: "var(--warm-gray)" }}>Add books from the store to proceed.</p>
        <Link href="/store" className="px-6 py-3 rounded-lg text-sm font-semibold" style={{ background: "var(--gold)", color: "white" }}>
          Browse Books
        </Link>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://js.paystack.co/v1/inline.js"
        onReady={() => setScriptReady(true)}
      />

      <div style={{ background: "var(--warm-white)" }}>
        {/* Header */}
        <div
          className="pt-32 pb-16 px-6 text-center"
          style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
        >
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Checkout
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)" }} className="text-sm">
            Complete your order below
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left — form */}
          <form onSubmit={handlePayment} className="flex flex-col gap-5">
            <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
              Your Details
            </h2>

            {[
              { name: "name", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
              { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com", required: true },
              { name: "phone", label: "Phone Number", type: "tel", placeholder: "+233 XX XXX XXXX", required: true },
              { name: "address", label: "Delivery Address", type: "text", placeholder: "Street, City, Region", required: true },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--warm-gray)" }}>
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    background: "white",
                    border: "1px solid var(--border)",
                    color: "var(--charcoal)",
                  }}
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--warm-gray)" }}>
                Order Notes (optional)
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="e.g. Signed copy request, special instructions..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                style={{ background: "white", border: "1px solid var(--border)", color: "var(--charcoal)" }}
              />
            </div>

            <button
              type="submit"
              disabled={loading || !scriptReady}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-bold mt-2 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: "var(--gold)",
                color: "white",
              }}
            >
              <Lock size={15} />
              {loading ? "Processing..." : `Pay GHS ${total.toFixed(2)} with Paystack`}
            </button>

            <p className="text-xs text-center" style={{ color: "var(--warm-gray)" }}>
              🔒 Payments secured by Paystack. Supports cards, mobile money & bank transfer.
            </p>
          </form>

          {/* Right — order summary */}
          <div>
            <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}>
              Order Summary
            </h2>

            <div className="flex flex-col gap-4 mb-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-xl"
                  style={{ background: "white", border: "1px solid var(--border)" }}
                >
                  <div className="relative w-14 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="56px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-snug mb-3" style={{ color: "var(--navy)", fontFamily: "var(--font-heading)" }}>
                      {item.title}
                    </p>
                    <div className="flex items-center justify-between">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-xs transition-colors"
                          style={{ background: "var(--cream)", border: "1px solid var(--border)" }}
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-xs transition-colors"
                          style={{ background: "var(--cream)", border: "1px solid var(--border)" }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold" style={{ color: "var(--navy)" }}>
                          GHS {(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="opacity-40 hover:opacity-100 transition-opacity"
                        >
                          <Trash2 size={14} style={{ color: "var(--warm-gray)" }} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="rounded-xl p-6" style={{ background: "var(--cream)", border: "1px solid var(--border)" }}>
              <div className="flex justify-between text-sm mb-3" style={{ color: "var(--warm-gray)" }}>
                <span>Subtotal ({count} item{count > 1 ? "s" : ""})</span>
                <span>GHS {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm mb-4" style={{ color: "var(--warm-gray)" }}>
                <span>Delivery</span>
                <span className="text-green-600 font-medium">Calculated after checkout</span>
              </div>
              <div
                className="flex justify-between text-base font-bold pt-4"
                style={{ borderTop: "1px solid var(--border)", color: "var(--navy)" }}
              >
                <span>Total</span>
                <span>GHS {total.toFixed(2)}</span>
              </div>
            </div>

            <Link href="/store" className="block text-center text-xs mt-4 hover:opacity-70 transition-opacity" style={{ color: "var(--warm-gray)" }}>
              ← Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
