import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const reference = req.nextUrl.searchParams.get("reference");

  if (!reference) {
    return NextResponse.json({ status: "error", message: "No reference provided" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await res.json();

    if (!data.status) {
      return NextResponse.json({ status: "error", message: data.message }, { status: 400 });
    }

    const transaction = data.data;

    if (transaction.status !== "success") {
      return NextResponse.json({ status: "failed", message: "Transaction not successful" }, { status: 400 });
    }

    return NextResponse.json({
      status: "success",
      reference: transaction.reference,
      amount: transaction.amount / 100, // convert back to GHS
      currency: transaction.currency,
      customer: transaction.customer,
      paid_at: transaction.paid_at,
    });
  } catch (err) {
    console.error("Paystack verify error:", err);
    return NextResponse.json({ status: "error", message: "Verification failed" }, { status: 500 });
  }
}
