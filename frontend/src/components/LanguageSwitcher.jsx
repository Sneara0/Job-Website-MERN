import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: "en", label: "EN" },
    { code: "bn", label: "বাংলা" },
  ];

  return (
    <div className="flex space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-4 py-1 font-medium rounded-full transition-all duration-300
            ${i18n.language === lang.code
              ? "bg-blue-600 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105"}
          `}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
