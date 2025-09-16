import React from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 flex flex-col items-center relative overflow-hidden">

      {/* Floating Decorative Shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-300 rounded-full opacity-30 animate-spin-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 rounded-full opacity-20 animate-spin-slow"></div>
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-purple-300 rounded-full opacity-25 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 animate-spin-slow"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-200 rounded-full opacity-15 animate-pulse-slow"></div>
  {/* Stats Section: Total Jobs & Companies */}
      <section className="mt-20 px-6 md:px-20 text-center z-10">
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {/* Total Jobs */}
          <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <h3 className="text-3xl md:text-4xl font-bold text-white">12,000+</h3>
            <p className="text-white mt-2 font-medium">{t("home.totalJobs")}</p>
          </div>

          {/* Companies */}
          <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <h3 className="text-3xl md:text-4xl font-bold text-white">500</h3>
            <p className="text-white mt-2 font-medium">{t("home.companies")}</p>
          </div>
        </div>
      </section>
    

      {/* Career Future Section */}
      <section className="mt-20 px-6 md:px-20 text-center max-w-3xl z-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          {t("home.careerFuture")}
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          {t("home.careerFutureDesc")}
        </p>
      </section>

    

      {/* Decorative Shapes Overlays */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-300 rounded-full opacity-10 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-green-300 rounded-full opacity-10 animate-pulse-slow"></div>
    </div>
  );
}
