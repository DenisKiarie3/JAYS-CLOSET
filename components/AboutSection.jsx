import React from "react";
import { Heart, Sparkles, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-20 mt-[60px]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
          Welcome to <span className="text-pink-600">JAYS-CLOSET</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Where fashion meets confidence. We empower women with styles that speak volumes — bold, elegant, and always on trend.
        </p>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* 1: Our Style */}
          <div className="p-6 border border-pink-100 rounded-xl shadow hover:shadow-md transition bg-pink-50">
            <div className="mb-4 text-pink-600">
              <Sparkles size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Style</h3>
            <p className="text-gray-600 leading-relaxed">
              Trendy and timeless pieces designed for every woman’s wardrobe — from casual charm to glam nights out.
            </p>
          </div>

          {/* 2: Our Mission */}
          <div className="p-6 border border-pink-100 rounded-xl shadow hover:shadow-md transition bg-pink-50">
            <div className="mb-4 text-pink-600">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To redefine fashion for modern women in Kenya — by blending quality, affordability, and elegance.
            </p>
          </div>

          {/* 3: Our Promise */}
          <div className="p-6 border border-pink-100 rounded-xl shadow hover:shadow-md transition bg-pink-50">
            <div className="mb-4 text-pink-600">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Our Promise</h3>
            <p className="text-gray-600 leading-relaxed">
              Exceptional service, fast delivery, and curated collections that keep you feeling confident and beautiful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
