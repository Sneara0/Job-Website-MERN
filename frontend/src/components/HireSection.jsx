import React from "react";
import { useTranslation } from "react-i18next";

// Dashboard images
import dashboard1 from "../assets/dashboard3.jpeg"; // main sharp image
import dashboard2 from "../assets/dashboard4.jpeg"; // blurred background image

export default function HireSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
          {t("about.hire.title")}
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          {t("about.hire.subtitle")}
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8">
          {t("about.hire.description")}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-2xl font-bold text-green-600">
              {t("about.hire.users.number")}
            </h3>
            <p className="text-gray-600">{t("about.hire.users.label")}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-2xl font-bold text-green-600">
              {t("about.hire.applications.number")}
            </h3>
            <p className="text-gray-600">{t("about.hire.applications.label")}</p>
          </div>
        </div>

        {/* Dashboard Images */}
        <div className="relative w-full flex justify-center items-center">
          {/* Blurred background image */}
          <img
            src={dashboard2}
            alt="Background dashboard"
            className="absolute w-full max-w-5xl h-auto object-cover rounded-2xl z-10 opacity-30 blur-md"
          />

          {/* Main sharp image */}
          <img
            src={dashboard1}
            alt="Main dashboard"
            className="relative z-20 rounded-2xl shadow-xl max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
