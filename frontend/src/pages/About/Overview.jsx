import React from "react";
import { useTranslation } from "react-i18next";

// Dummy images (replace with your own)
import office1 from "../../assets/company/office1.jpeg";
import office2 from "../../assets/company/office2.jpeg";
import office3 from "../../assets/company/office3.jpg";

export default function Overview() {
  const { t } = useTranslation();

  const facts = t("about.overview.facts_list", { returnObjects: true });
  const timeline = t("about.overview.timeline", { returnObjects: true });
  const gallery = [office1, office2, office3];

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-16">
      {/* === Title & Desc === */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          {t("about.overview.title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t("about.overview.desc")}
        </p>
      </div>

      {/* === History === */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
          {t("about.overview.history_title")}
        </h2>
        <p className="text-gray-700 text-lg">{t("about.overview.history_desc")}</p>
      </div>

      {/* === Quick Facts === */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {t("about.overview.facts_title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
            >
              <p className="text-gray-800 font-medium text-lg">{fact}</p>
            </div>
          ))}
        </div>
      </div>

      {/* === Gallery === */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {t("about.overview.gallery_title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Company ${index + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>

      {/* === Responsive Timeline === */}
      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center">
          {t("about.overview.timeline_title")}
        </h2>

        {/* Timeline container */}
        <div className="relative flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-12 md:space-y-0">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
            >
              {/* Circle */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold shadow-lg mb-4">
                {item.year}
              </div>
              {/* Event */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition max-w-sm">
                <p className="text-gray-700">{item.event}</p>
              </div>
            </div>
          ))}

          {/* Horizontal line (desktop only) */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-1 bg-indigo-200 -z-10"></div>
        </div>
      </div>
    </div>
  );
}
