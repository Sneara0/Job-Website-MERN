import React from 'react'


import { useTranslation } from "react-i18next";

export default function Mission() {
  const { t } = useTranslation();
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t("about.mission.title")}</h1>
      <p className="text-lg text-gray-700">{t("about.mission.desc")}</p>
    </div>
  );
}
