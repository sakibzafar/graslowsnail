// pages/faq.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Head from 'next/head';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const [state, handleSubmit] = useForm("mknlqlgq");
  const [captchaValue, setCaptchaValue] = useState(null);

  const onCaptchaChange = (value:any) => {
    setCaptchaValue(value);
  };

  if (state.succeeded) {
      return(
      <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-md bg-green-100 p-6 rounded-xl shadow-md">
            <p className="text-center font-medium text-green-700">Thanks for reaching out! Ill get back to you soon!</p>
          </div>
      </div>
      );
  }

  return (
    <div className="container mx-auto px-4 mt-20 mb-20">
  <p className="text-4xl  font-regular mb-8 text-center font-['Koulen']">Don't be shy</p>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-100 p-6 rounded-xl shadow-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              className="w-full p-2 border rounded-md"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-600 text-xs mt-1"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-2 border rounded-md"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-600 text-xs mt-1"
            />
          </div>

          {/* Add reCAPTCHA */}
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={onCaptchaChange}
          />

          <div className="flex justify-end">
            <button type="submit" disabled={state.submitting || !captchaValue} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>

  );
}

