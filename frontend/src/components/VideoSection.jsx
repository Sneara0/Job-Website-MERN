import React from "react";
import { useTranslation } from "react-i18next";
import workbridgeVideo from "../assets/videos/workbridge.mp4"; // ✅ তোমার ভিডিও assets ফোল্ডারে রাখতে হবে

export default function VideoSection() {
  const { t } = useTranslation();

  return (
    <section className="mt-20 px-6 md:px-20 w-full max-w-5xl text-center z-10 mx-auto">
      {/* === Heading === */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        {t("home.workbridgeVideoTitle")}
      </h2>
      <p className="text-gray-600 mb-6">{t("home.workbridgeVideoDesc")}</p>

      {/* === Video Player === */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
        <video
          className="w-full h-full object-cover"
          controls
          autoPlay={false}
        >
          <source src={workbridgeVideo} type="video/mp4" />
          {t("home.videoNotSupported")}
        </video>
      </div>
    </section>
  );
}
