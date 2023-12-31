'use client'
import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function PreviewPage({ wantFrame }) {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const pictureWithFramePrice = 'price_1NxIxRJ93I2Tg3FX6MUkw9zP';
    const pictureWithOutFramePrice = 'price_1NxItlJ93I2Tg3FX1x1hSI4x';

        // Calculate the price based on the frame preference with frame price is first/ price witout frame 
        const priceId = wantFrame ? pictureWithFramePrice : pictureWithOutFramePrice;


    fetch('http://localhost:3000/api', { // Make sure this matches your API Route
      method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ priceId })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(session => {
        return stripe.redirectToCheckout({ sessionId: session.sessionId }); // Make sure it's session.sessionId
      })
      .catch((error) => {
        console.error('There was an error redirecting to Stripe Checkout:', error);
      });
  };

  return (
    <section className="bg-white flex flex-col w-96 h-9 rounded-md justify-between">
  <button 
    type="button" 
    role="link" 
    onClick={handleCheckout} 
    className="h-9 bg-black text-white font-semibold cursor-pointer transition-opacity duration-200 hover:opacity-80 shadow-md">
    PURCHASE 
  </button>
</section>

  );
}
