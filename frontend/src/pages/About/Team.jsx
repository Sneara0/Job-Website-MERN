import React from "react";
import { useTranslation } from "react-i18next";


import team1 from "../../assets/team/team2.jpeg";
import team2 from "../../assets/team/team1.jpeg";
import team3 from "../../assets/team/team3.jpeg";
import team4 from "../../assets/team/team4.jpeg";

export default function Team() {
  const { t } = useTranslation();
  const members = t("about.team.members", { returnObjects: true });

  // Add images manually
  const membersWithImages = [
    { ...members[0], img: team1 },
    { ...members[1], img: team2 },
    { ...members[2], img: team3 },
    { ...members[3], img: team4 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">{t("about.team.title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {membersWithImages.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 p-6"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-indigo-500"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-indigo-600 font-medium mt-1">{member.role}</p>
              <p className="text-gray-500 mt-2 text-sm">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
