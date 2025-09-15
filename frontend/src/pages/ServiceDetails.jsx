import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { t } = useTranslation();
  const { service } = useParams();

  const data = t(`servicesPage.${service}`, { returnObjects: true });

  if (!data) return <p className="text-center mt-10 text-red-500">Service not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center">{data.title}</h1>
      <p className="text-gray-700 text-center mb-6">{data.description}</p>

      <h2 className="text-2xl font-semibold mb-3">Modules</h2>
      <ul className="list-disc list-inside mb-6">
        {data.modules.map((mod, index) => (
          <li key={index} className="text-gray-600 mb-1">{mod}</li>
        ))}
      </ul>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        {data.enroll}
      </button>
    </div>
  );
};

export default ServiceDetails;
