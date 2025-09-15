import React from 'react'


import { useTranslation } from "react-i18next";

export default function Values() {
  const { t } = useTranslation();
  const values = t("about.values.items", { returnObjects: true });

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t("about.values.title")}</h1>
      <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
        {values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
