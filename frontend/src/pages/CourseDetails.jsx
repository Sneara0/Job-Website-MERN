import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CourseDetails = () => {
  const { t } = useTranslation();
  const { course } = useParams();

  const data = t(`coursesPage.${course}`, { returnObjects: true });

  if (!data) return <p className="text-center mt-10 text-red-500">Course not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center">{data.title}</h1>
      <p className="text-gray-700 text-center mb-6">{data.description}</p>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Modules:</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {data.modules.map((module, index) => (
            <li key={index}>{module}</li>
          ))}
        </ul>

        <div className="mt-6 text-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            {t("enrollNow", "Enroll Now")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
