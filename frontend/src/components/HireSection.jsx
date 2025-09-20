import React from "react";
import { useTranslation } from "react-i18next";
import dashboard1 from "../assets/dashboard3.jpeg";
import dashboard2 from "../assets/dashboard4.jpeg";

const HireSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            {t("about.hire.title")}
          </h2>
          <p className="text-xl text-gray-800 mb-2">
            {t("about.hire.subtitle")}
          </p>
          <p className="text-gray-600 mb-8">
            {t("about.hire.description")}
          </p>

          {/* === Stats === */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                {t("about.hire.usersNumber")}
              </h3>
              <p className="text-gray-600">{t("about.hire.usersLabel")}</p>
            </div>
            <div className="bg-white shadow rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                {t("about.hire.applicationsNumber")}
              </h3>
              <p className="text-gray-600">{t("about.hire.applicationsLabel")}</p>
            </div>
          </div>
        </div>

        {/* === Image Section === */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          <img
            src={dashboard1}
            alt={t("about.hire.title")}
            className="w-72 md:w-96 rounded-2xl shadow-lg relative z-10"
          />
          <img
            src={dashboard2}
            alt={t("about.hire.title")}
            className="w-72 md:w-96 rounded-2xl shadow-lg absolute top-10 left-1/2 transform -translate-x-1/2 rotate-6"
          />
        </div>
      </div>
    </section>
  );
};

export default HireSection;
