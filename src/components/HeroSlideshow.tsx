"use client";

import { useState, useEffect } from "react";

const images = [
    { src: "https://photos.smugmug.com/photos/i-RNVWFxM/0/K7gsbJRPPGcdWXQ6M75LKb8pQK6LTmsSGt9F2HN8L/X4/i-RNVWFxM-X4.jpg", position: "center 70%" },
    { src: "https://photos.smugmug.com/photos/i-prXdM5H/0/MZBfrRN299mZhb5XvWGsKRmpJ8PP2KxCt4GCvpSDS/X4/i-prXdM5H-X4.jpg", position: "center 15%" },
    { src: "https://photos.smugmug.com/photos/i-nJNZTgH/0/NDqHnS66TbPksxkhGW77hvSPBXzrGPgLkDrw8Ttmf/X4/i-nJNZTgH-X4.jpg", position: "center" },
  // add your SmugMug direct image links here
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative h-[70vh] pt-20">
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: "cover",
            backgroundPosition: image.position,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 h-full flex flex-col justify-center text-white">
        <h1 className="text-5xl font-serif mb-4">
          Business Attorneys for the New Age
        </h1>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current
                ? "bg-white"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}