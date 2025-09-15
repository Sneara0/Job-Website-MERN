import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const PostJob = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    title: "", company: "", location: "", salary: "", type: "Full-time", description: "",
  });

  const role = localStorage.getItem("role"); // ✅ role সরাসরি নাও

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (role !== "admin") return alert("Only admin can post jobs");

    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/api/jobs/add", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert(t("postJob.success") || "Job posted successfully!");
      setFormData({ title: "", company: "", location: "", salary: "", type: "Full-time", description: "" });
    } catch (error) {
      alert(t("postJob.failed") || "Failed to post job");
      console.error(error);
    }
  };

  if (role !== "admin") {
    return <h2 className="text-xl text-center mt-10">Only admin can access this page</h2>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">{t("postJob.title") || "Post a Job"}</h2>
        {["title","company","location","salary"].map(field => (
          <input
            key={field}
            type={field==="salary"?"number":"text"}
            name={field}
            placeholder={t(`postJob.${field}`) || field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
        ))}
        <select name="type" value={formData.type} onChange={handleChange} className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
          <option value="Full-time">{t("postJob.fullTime") || "Full-time"}</option>
          <option value="Part-time">{t("postJob.partTime") || "Part-time"}</option>
          <option value="Internship">{t("postJob.internship") || "Internship"}</option>
        </select>
        <textarea name="description" placeholder={t("postJob.description") || "Job Description"} value={formData.description} onChange={handleChange} className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" required/>
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">{t("postJob.submit") || "Submit"}</button>
      </form>
    </div>
  );
};

export default PostJob;
