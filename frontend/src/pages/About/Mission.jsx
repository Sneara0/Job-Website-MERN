import React from "react";
import { useTranslation } from "react-i18next";

export default function Mission() {
  const { t } = useTranslation();

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* Mission */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{t("about.mission.title")}</h1>
        <p className="text-lg text-gray-700">{t("about.mission.desc")}</p>
      </div>

      {/* Vision */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">{t("about.mission.vision_title")}</h2>
        <p className="text-gray-700">{t("about.mission.vision_desc")}</p>
      </div>

      {/* Values */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">{t("about.mission.values_title")}</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {t("about.mission.values_list", { returnObjects: true }).map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
