import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Import course images
import reactImg from "../assets/services/react.jpeg";
import nodeImg from "../assets/services/node.jpeg";
import pythonImg from "../assets/services/python.png";

const imageMap = {
  react: reactImg,
  node: nodeImg,
  python: pythonImg,
};

const CourseDetails = () => {
  const { t } = useTranslation();
  const { course } = useParams();

  const data = t(`coursesPage.${course}`, { returnObjects: true });
  const imageSrc = imageMap[course];

  if (!data)
    return (
      <p className="text-center mt-10 text-red-500 text-xl font-semibold">
        Course not found
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex flex-col items-center px-4 py-16">
      {/* Card */}
      <div className="bg-white shadow-2xl rounded-3xl max-w-4xl w-full overflow-hidden transform hover:scale-105 transition duration-500">
        
        {/* Image: smaller container but real resolution */}
        <div className="w-full md:w-2/3 mx-auto h-48 md:h-64 overflow-hidden rounded-t-3xl">
          <img
            src={imageSrc}
            alt={data.title}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content below image */}
        <div className="px-6 md:px-12 py-8 text-center">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            {data.title}
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-base md:text-lg mb-6">{data.description}</p>

          {/* Modules */}
          <h2 className="text-2xl md:text-3xl font-semibold text-pink-500 mb-6">
            Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.modules.map((mod, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 rounded-xl p-4 shadow-lg transform hover:scale-105 transition duration-300 font-medium text-gray-800"
              >
                {mod}
              </div>
            ))}
          </div>

 
          <div className="mt-8">
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition transform">
              {t("enrollNow", "Enroll Now")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
