import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import ad1 from "../assets/ads/ad1.jpg";
import ad2 from "../assets/ads/ad2.jpeg";

export default function Advertise() {
  const ads = [ad1, ad2];

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 tracking-tight">
          Featured Job Advertisements
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1} // default for mobile
          breakpoints={{
            640: { slidesPerView: 1 },   // sm - mobile
            768: { slidesPerView: 2 },   // md - tablet
            1024: { slidesPerView: 2 },  // lg - small desktop
            1280: { slidesPerView: 3 },  // xl - large desktop
          }}
          className="rounded-3xl shadow-lg bg-white"
        >
          {ads.map((ad, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center px-2 py-4"
            >
              <div className="w-full flex justify-center">
                <img
                  src={ad}
                  alt={`Advertisement ${index + 1}`}
                  className="w-full max-h-80 object-contain rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
