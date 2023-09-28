// Import NextResponse for sending the response object
import { NextRequest, NextResponse } from 'next/server';

// Initialize the Stripe library with your secret key from environment variables
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Define an async function to handle POST requests
export const POST = async (req: NextRequest) => {
  try {
    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      // Define line items for the checkout session (i.e., what you're selling)
      line_items: [
        {
          // Provide the actual Price ID of the product you want to sell
          price: 'price_1NkxOFJ93I2Tg3FXcDgL8q6b',
          // Define the quantity of this item
          quantity: 1,
        },
      ],
      // Define the mode of the checkout session (in this case, "payment")
      mode: 'payment',
      // Define URLs where users should be redirected upon success and cancellation
      success_url: "http://localhost:3000/paymentSuccessful",
      cancel_url: "http://localhost:3000/paymentFailed",
    });
    
    // If the session is successfully created, return a JSON response with the session ID
    return NextResponse.json({ sessionId: session.id });
  } catch (err: any) {
    // Log any errors for debugging
    console.log(err);
    // If there's an error, return it in the response along with the appropriate status code
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
