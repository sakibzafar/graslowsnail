// pages/faq.tsx

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 mt-20">
        <h1 className="text-3xl font-bold mb-8">FAQs</h1>

        <section className="faq-section space-y-6">
          <div className="faq-item">
            <h2 className="text-xl font-semibold">1. What is GRASLOWSNAIL.com?</h2>
            <p className="text-gray-600">GRASLOWSNAIL.com is a platform where we showcase unique and breathtaking photos captured by [Your Name/Your Brand]. Users can view these photos and have the option to purchase a physical copy of any photo they admire.</p>
          </div>
          
          <div className="faq-item">
            <h2 className="text-xl font-semibold">2. How can I purchase a photo?</h2>
            <p className="text-gray-600">Simply browse through our gallery, select the photo you'd like to purchase, choose the desired size, and click on the "Buy Now" or "Add to Cart" button. You'll be guided through a secure checkout process powered by Stripe.</p>
          </div>

          {/* ... Continue with other questions and answers ... */}

          <div className="faq-item">
            <h2 className="text-xl font-semibold">3. I have a specific question not covered here. How can I reach out?</h2>
            <p className="text-gray-600">We're here to help! Feel free to contact us at <a href="mailto:support@yourwebapp.com" className="text-blue-500 underline">support@yourwebapp.com</a>, and our team will get back to you as soon as possible.</p>
          </div>
        </section>
    </div>
  )
}

