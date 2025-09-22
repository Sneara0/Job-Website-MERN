import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

import ad1 from "../assets/ads/ad1.jpg";
import ad2 from "../assets/ads/ad3.jpg";

export default function Advertise() {
  const { t } = useTranslation(); 

  const ads = [ad1, ad2];

  return (
    <section className="w-full py-10 bg-gray-200">
      <div className="max-w-3xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black tracking-tight">
          {t("advertise.title")}
        </h2>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-3xl shadow-lg bg-gray-200"
        >
          {ads.map((ad, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center px-2 py-8"
            >
              <div className="w-full flex justify-center">
                <img
                  src={ad}
                  alt={`Advertisement ${index + 1}`}
                  className="max-h-80 object-contain rounded-xl shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
