import React from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 flex flex-col items-center relative overflow-hidden">

     
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-300 rounded-full opacity-30 animate-spin-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-300 rounded-full opacity-20 animate-spin-slow"></div>
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-purple-300 rounded-full opacity-25 animate-pulse-slow"></div>

     
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-20 py-32 z-10 max-w-4xl">
        
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
          {t("home.welcome")}
        </h1>

        <p className="text-gray-700 text-lg md:text-xl mt-6 leading-relaxed">
          {t("home.tagline")}. {t("home.exploreJobs")} 
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mt-10 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
            {t("home.exploreJobs")}
          </button>
          <button className="bg-white border border-blue-600 text-blue-600 px-8 py-3 rounded-lg shadow hover:bg-blue-50 transition transform hover:scale-105">
            {t("home.learnMore")}
          </button>
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

 
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 animate-spin-slow"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-200 rounded-full opacity-15 animate-pulse-slow"></div>

    </div>
  );
}
