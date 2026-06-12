"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import FadeIn from "@/components/ui/FadeIn";
import { useState } from "react";

const books = [
  {
    id: "hollow-faith",
    title: "Hollow Faith Is Powerless Religion",
    theme: "Faith & Theology",
    price: 100,
    image: "/books/hollow-faith.jpg",
    description: "A prophetic call back to authentic, Spirit-filled Christianity — confronting the danger of religious form without transforming power.",
    details: ["Hardcover & Paperback", "Available for delivery across Ghana", "Signed copies available on request"],
  },
  {
    id: "thriving-retirement",
    title: "Thriving in Retirement",
    theme: "Life & Purpose",
    price: 50,
    image: "/books/thriving-retirement.jpg",
    description: "Staying strong & healthy in your golden years — a biblical and practical guide to living with purpose, joy, and continued fruitfulness.",
    details: ["Hardcover & Paperback", "Available for delivery across Ghana", "Signed copies available on request"],
  },
  {
    id: "the-three-powers",
    title: "The Three Powers",
    theme: "Spiritual Life",
    price: 100,
    image: "/books/the-three-powers.png",
    description: "Understanding the forces that shape your spiritual destiny — equipping believers to walk in genuine biblical authority.",
    details: ["Hardcover & Paperback", "Available for delivery across Ghana", "Signed copies available on request"],
  },
  {
    id: "the-sticky-couple",
    title: "The Sticky Couple",
    theme: "Marriage & Family",
    price: 50,
    image: "/books/the-sticky-couple.png",
    description: "Building a marriage that holds through every season — scriptural wisdom for couples who choose to hold on together through every trial.",
    details: ["Hardcover & Paperback", "Available for delivery across Ghana", "Signed copies available on request"],
  },
  {
    id: "stranger-in-my-own-country",
    title: "Stranger in My Own Country",
    theme: "Identity & Culture",
    price: 100,
    image: "/books/stranger-country.png",
    description: "Navigating faith, identity, and belonging in a changing world — remaining anchored when the ground beneath us shifts.",
    details: ["Hardcover & Paperback", "Available for delivery across Ghana", "Signed copies available on request"],
  },
  {
    id: "when-friends-fight",
    title: "When Friends Fight",
    theme: "Relationships",
    price: 25,
    image: "/books/when-friends-fight.png",
    description: "Healing and restoring broken relationships — pastoral wisdom for understanding conflict and walking the path of genuine reconciliation.",
    details: ["Hardcover & Paperback", "Available for delivery across Ghana", "Signed copies available on request"],
  },
  {
    id: "building-a-christian-home",
    title: "Building a Christian Home",
    theme: "Family & Marriage",
    price: 25,
    image: "/books/building-a-christian-home.png",
    description: "Laying foundations that will stand the test of time — timeless wisdom for families navigating modern life with biblical truth.",
    details: ["Hardcover & Paperback", "Available for delivery across Ghana", "Signed copies available on request"],
  },
  {
    id: "empowered-meaningful",
    title: "Empowered to Make Life Meaningful",
    theme: "Purpose & Growth",
    price: 100,
    image: "/books/empowered-meaningful.png",
    description: "Living with intention, passion, and lasting impact — moving beyond routine existence into a life of genuine significance.",
    details: ["Hardcover & Paperback", "Available for delivery across Ghana", "Signed copies available on request"],
  },
  {
    id: "born-to-blossom",
    title: "Born to Blossom",
    theme: "Identity & Purpose",
    price: 40,
    image: "/books/born-to-blossom.png",
    description: "Discovering the fullness of who God made you to be — a call to flourish beyond limitation and step into your God-given potential.",
    details: ["Hardcover & Paperback", "Available for delivery across Ghana", "Signed copies available on request"],
  },
  {
    id: "forgive-god",
    title: "Forgive God!",
    theme: "Faith & Healing",
    price: 70,
    image: "/books/forgive-god.png",
    description: "Wrestling honestly with pain, disappointment, and divine silence — a compassionate guide toward honest faith and genuine healing.",
    details: ["Hardcover & Paperback", "Available for delivery across Ghana", "Signed copies available on request"],
  },
];

function AddToCartButton({ book }: { book: typeof books[0] }) {
  const { addItem, items } = useCart();
  const inCart = items.some((i) => i.id === book.id);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({ id: book.id, title: book.title, price: book.price, image: book.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold w-full justify-center transition-all duration-300 hover:-translate-y-0.5"
      style={{
        background: added || inCart ? "var(--forest)" : "var(--gold)",
        color: "white",
      }}
    >
      {added || inCart ? <Check size={15} /> : <ShoppingCart size={15} />}
      {added ? "Added!" : inCart ? "In Cart" : "Add to Cart"}
    </button>
  );
}

export default function StorePage() {
  const { count } = useCart();

  return (
    <div style={{ background: "var(--warm-white)" }}>
      {/* Hero */}
      <div
        className="pt-32 pb-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--deep-blue) 100%)" }}
      >
        <FadeIn>
          <span className="text-xs uppercase tracking-widest font-medium" style={{ color: "var(--gold)" }}>
            Bookstore
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Order Your Copy
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            Secure your copy of Rev. Dr. Fred P. Deegbe's books. Delivered across Ghana with care.
          </p>
          {count > 0 && (
            <Link
              href="/store/checkout"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              style={{ background: "var(--gold)", color: "white" }}
            >
              <ShoppingCart size={16} />
              View Cart ({count} item{count > 1 ? "s" : ""})
            </Link>
          )}
        </FadeIn>
      </div>

      {/* Books grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {books.map((book, i) => (
            <FadeIn key={book.id} delay={i * 0.1}>
              <div
                className="rounded-2xl overflow-hidden flex flex-col h-full"
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                }}
              >
                {/* Cover image */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
                  <span
                    className="absolute bottom-4 left-4 text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full"
                    style={{ background: "var(--gold)", color: "white" }}
                  >
                    {book.theme}
                  </span>
                </div>

                {/* Info */}
                <div className="p-8 flex flex-col flex-1">
                  <h2
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--navy)" }}
                  >
                    {book.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--warm-gray)" }}>
                    {book.description}
                  </p>

                  {/* Details */}
                  <ul className="flex flex-col gap-2 mb-6">
                    {book.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs" style={{ color: "var(--warm-gray)" }}>
                        <Check size={13} style={{ color: "var(--gold)", flexShrink: 0 }} />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-3xl font-bold" style={{ color: "var(--navy)", fontFamily: "var(--font-heading)" }}>
                          GHS {book.price}
                        </span>
                        <span className="text-xs ml-2" style={{ color: "var(--warm-gray)" }}>per copy</span>
                      </div>
                    </div>
                    <AddToCartButton book={book} />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Floating cart bar */}
      {count > 0 && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-2xl flex items-center gap-6"
          style={{
            background: "var(--navy)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
            border: "1px solid rgba(201,168,76,0.3)",
          }}
        >
          <span className="text-white text-sm font-medium">
            {count} item{count > 1 ? "s" : ""} in cart
          </span>
          <Link
            href="/store/checkout"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: "var(--gold)", color: "white" }}
          >
            <ShoppingCart size={14} />
            Checkout
          </Link>
        </div>
      )}

      {/* Trust badges */}
      <section className="py-16 px-6" style={{ background: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🔒", title: "Secure Payment", desc: "All payments are processed securely via Paystack" },
            { icon: "🚚", title: "Ghana-Wide Delivery", desc: "Books delivered to your door across all regions" },
            { icon: "✍️", title: "Signed Copies", desc: "Request a signed copy at checkout — subject to availability" },
          ].map((badge) => (
            <div key={badge.title}>
              <div className="text-3xl mb-3">{badge.icon}</div>
              <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--navy)", fontFamily: "var(--font-heading)" }}>
                {badge.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--warm-gray)" }}>{badge.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
