import React from "react";
import { useTranslation } from "react-i18next";

export default function Mission() {
  const { t } = useTranslation();

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8 bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 rounded-3xl shadow-lg">
      {/* Mission */}
      <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white drop-shadow-lg">
          {t("about.mission.title")}
        </h1>
        <p className="text-white text-lg md:text-xl">
          {t("about.mission.desc")}
        </p>
      </div>

      {/* Vision */}
      <div className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white drop-shadow-md">
          {t("about.mission.vision_title")}
        </h2>
        <p className="text-white text-lg md:text-xl">
          {t("about.mission.vision_desc")}
        </p>
      </div>

      {/* Values */}
      <div className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-white drop-shadow-md">
          {t("about.mission.values_title")}
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-white text-lg md:text-xl">
          {t("about.mission.values_list", { returnObjects: true }).map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
