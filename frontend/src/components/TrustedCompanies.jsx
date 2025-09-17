import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import logo1 from "../assets/companies/logo1.png";
import logo2 from "../assets/companies/logo2.png";
import logo3 from "../assets/companies/logo3.jpeg";
import logo4 from "../assets/companies/logo4.jpeg";
import logo5 from "../assets/companies/logo5.png";

const logos = [logo1, logo2, logo3, logo4, logo5];

export default function TrustedCompanies() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          {t("home.trustedCompanies")}
        </h2>

        {/* Scroll container */}
        <div className="overflow-x-hidden"> {/* scrollbar hidden */}
          <motion.div
            className="flex space-x-8 md:space-x-12 flex-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-32 h-16 md:w-40 md:h-20 flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="h-full object-contain rounded-lg" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
