import React from 'react'

import { useTranslation } from "react-i18next";

export default function Team() {
  const { t } = useTranslation();
  const members = t("about.team.members", { returnObjects: true });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t("about.team.title")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {members.map((member, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
