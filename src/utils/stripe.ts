"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK!);

export async function startSubscription(priceId: string, accessToken: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscriptions/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ priceId }),
  });

  if (!res.ok) throw new Error("Erro ao criar assinatura");

  const { sessionId } = await res.json();
  const stripe = await stripePromise;
  await stripe?.redirectToCheckout({ sessionId });
}
