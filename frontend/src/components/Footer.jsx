import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 shadow-xl pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">{t("footer.companyName")}</h2>
          <p className="text-gray-400 text-sm">{t("footer.companyDesc")}</p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300"><FaInstagram /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">{t("footer.services")}</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/jobs" className="hover:text-yellow-400 transition-colors duration-300">{t("footer.jobListings")}</Link></li>
            <li><Link to="/postjob" className="hover:text-yellow-400 transition-colors duration-300">{t("footer.postJob")}</Link></li>
            <li><Link to="/academy" className="hover:text-yellow-400 transition-colors duration-300">{t("footer.courses")}</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">{t("footer.contact")}</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">{t("footer.company")}</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/aboutus" className="hover:text-yellow-400 transition-colors duration-300">{t("footer.aboutUs")}</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400 transition-colors duration-300">{t("footer.ourServices")}</Link></li>
            <li><Link to="/" className="hover:text-yellow-400 transition-colors duration-300">{t("footer.home")}</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-2 text-gray-300">
          <h3 className="text-xl font-semibold mb-4 text-white">{t("footer.contact")}</h3>
          <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-yellow-400" /> {t("footer.address")}, {t("footer.city")}</p>
          <p className="flex items-center gap-2"><FaEnvelope className="text-yellow-400" /> {t("footer.email")}</p>
          <p className="flex items-center gap-2"><FaPhone className="text-yellow-400" /> {t("footer.phone")}</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} WorkBridge. {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
