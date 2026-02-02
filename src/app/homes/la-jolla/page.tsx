"use client";
import { useState } from "react";

export default function LaJollaDetails() {
  const images = ["/images/la-jolla/la-jolla-1.jpg", "/images/la-jolla/la-jolla-2.jpg", "/images/la-jolla/la-jolla-3.jpg", "/images/la-jolla/la-jolla-4.jpg", "/images/la-jolla/la-jolla-5.jpg"];
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <main className="bg-red-100 min-h-screen pt-28 pb-12 px-4 md:px-8 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <a href="/" className="inline-flex items-center text-gray-500 hover:text-black mb-6 transition-colors font-medium">← Back to All Homes</a>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Mobile Home for Sale – La Jolla</h1>
          <p className="text-xl text-green-600 font-semibold mt-2">$185,000</p>
        </div>
        <div className="relative group mb-6 overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
          <img src={images[activeIndex]} alt="La Jolla" className="w-full h-[350px] md:h-[600px] object-cover" />
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100">←</button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100">→</button>
        </div>
        <div className="bg-gray-50 p-6 md:p-10 rounded-3xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-4">Property Features</h2>
          <p className="text-gray-700 text-lg mb-6">Spacious 4-bedroom, 3-bathroom home. Our most spacious model available.</p>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <ul className="space-y-4">
              <li>✅ Delivery and setup available</li>
              <li>✅ Flexible payment plans offered</li>
              <li className="font-bold text-green-700">💰 Only 10% down payment required</li>
            </ul>
            <a href="sms:+13022301063?body=Hi! I am interested in the 4-bedroom La Jolla for $185,000." className="bg-blue-600 text-white py-4 rounded-xl font-bold text-lg text-center shadow-lg hover:bg-blue-700">Send Text Message</a>
          </div>
        </div>
      </div>
    </main>
  );
}