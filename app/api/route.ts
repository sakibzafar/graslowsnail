import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const POST = async (req: NextApiRequest) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the actual Price ID of the product you want to sell
          price: 'price_1NkxOFJ93I2Tg3FXcDgL8q6b',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/about",
    });
    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
};

