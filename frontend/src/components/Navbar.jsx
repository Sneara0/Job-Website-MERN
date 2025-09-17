import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import Logo from "../assets/workbridge.png";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [role, setRole] = useState(null);
  const [name, setName] = useState(null);

  // Load role and name from localStorage
  useEffect(() => {
    setRole(localStorage.getItem("role"));
    setName(localStorage.getItem("name"));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  const navLinks = [
    { key: "home", path: "/" },
    { key: "jobs", path: "/jobs" },
    {
      key: "services",
      dropdown: [
        { key: "webDev", path: "/services/webdev" },
        { key: "frontend", path: "/services/frontend" },
        { key: "backend", path: "/services/backend" },
        { key: "mobile", path: "/services/mobile" },
        { key: "uiux", path: "/services/uiux" },
      ],
    },
    {
      key: "aboutUs",
      dropdown: [
        { key: "overview", path: "/about/overview" },
        { key: "mission", path: "/about/mission" },
        { key: "values", path: "/about/values" },
        { key: "team", path: "/about/team" },
      ],
    },
    {
      key: "courses",
      dropdown: [
        { key: "react", path: "/courses/react" },
        { key: "node", path: "/courses/node" },
        { key: "python", path: "/courses/python" },
      ],
    },
  ];

  // Admin link
  if (role === "admin") navLinks.push({ key: "postJob", path: "/postjob" });

  // If not logged in
  if (!role) {
    navLinks.push({ key: "login", path: "/login" });
    navLinks.push({ key: "register", path: "/register" });
  }

  return (
    <div className="relative">
      <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg sticky top-2 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={Logo}
                alt="Work Bridge"
                className="h-12 w-12 rounded-full border-2 border-white shadow-lg"
              />
              <span className="ml-2 text-3xl font-extrabold text-white">Work Bridge</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map(({ key, path, dropdown }) =>
                dropdown ? (
                  <div
                    key={key}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center font-semibold text-white hover:text-black transition-colors">
                      {t(`navbar.${key}`)}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </button>
                    {openDropdown === key && (
                      <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                        {dropdown.map((item) => (
                          <Link
                            key={item.key}
                            to={item.path}
                            className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
                          >
                            {t(`navbar.${item.key}`)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={key}
                    to={path}
                    className="font-semibold text-white hover:text-black transition-colors"
                  >
                    {t(`navbar.${key}`)}
                  </Link>
                )
              )}

              {/* Show name and logout if logged in */}
              {role && (
                <div className="flex items-center space-x-4">
                  <span className="text-white font-medium">{name}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    {t("navbar.logout")}
                  </button>
                </div>
              )}

              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-black"
              >
                {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 pt-4 pb-3 space-y-3 transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
          }`}
        >
          {navLinks.map(({ key, path, dropdown }) =>
            dropdown ? (
              <div key={key}>
                <p className="text-white font-semibold">{t(`navbar.${key}`)}</p>
                {dropdown.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className="block ml-4 text-white hover:text-black py-1 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(`navbar.${item.key}`)}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={key}
                to={path}
                className="block text-white font-semibold hover:text-black py-1 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t(`navbar.${key}`)}
              </Link>
            )
          )}

          {role && (
            <div className="flex items-center space-x-2">
              <span className="text-white font-medium">{name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                {t("navbar.logout")}
              </button>
            </div>
          )}

          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
}
