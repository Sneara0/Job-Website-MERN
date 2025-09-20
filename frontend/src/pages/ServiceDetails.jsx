import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

// HD images import
import webdevImg from "../assets/services/webdev.jpeg";
import frontendImg from "../assets/services/frontend.jpeg";
import backendImg from "../assets/services/backend.jpeg";
import mobileImg from "../assets/services/mobile.jpeg";
import uiuxImg from "../assets/services/uiux.jpeg";

const imageMap = {
  webdev: webdevImg,
  frontend: frontendImg,
  backend: backendImg,
  mobile: mobileImg,
  uiux: uiuxImg,
};

const ServiceDetails = () => {
  const { t } = useTranslation();
  const { service } = useParams();

  const data = t(`servicesPage.${service}`, { returnObjects: true });
  const imageSrc = imageMap[service];

  if (!data)
    return (
      <p className="text-center mt-10 text-red-500">Service not found</p>
    );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-16">
      {/* Card */}
      <div className="bg-white shadow-2xl rounded-3xl max-w-4xl w-full overflow-hidden">
        {/* Image */}
        <div className="w-1/2 mx-auto h-48 md:h-64 overflow-hidden">
          <img
            src={imageSrc}
            alt={data.title}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 py-8 text-center">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            {data.title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg mb-6">{data.description}</p>

          {/* Modules */}
          <h2 className="text-2xl md:text-3xl font-semibold text-pink-500 mb-6">
            Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.modules.map((mod, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-xl p-4 shadow-lg transform hover:scale-105 transition duration-300 font-medium text-white"
              >
                {mod}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
