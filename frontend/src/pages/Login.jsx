import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);

      // Save user info in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role); // <-- use res.data.user
      localStorage.setItem("name", res.data.user.name); // <-- use res.data.user

      alert(t("login.success"));

      // Redirect based on role
      if (res.data.user.role === "admin") {
        navigate("/dashboard"); // Admin dashboard page
      } else {
        navigate("/jobs"); // User sees jobs page
      }
    } catch (error) {
      alert(t("login.failed"));
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          {t("login.title")}
        </h2>

        <input
          type="email"
          name="email"
          placeholder={t("login.email")}
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />

        <input
          type="password"
          name="password"
          placeholder={t("login.password")}
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
        >
          {t("login.title")}
        </button>
      </form>
    </div>
  );
};

export default Login;
