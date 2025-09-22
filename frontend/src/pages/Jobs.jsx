import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Jobs = () => {
  const { t } = useTranslation();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // === Modal states ===
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs");
        setJobs(res.data);
      } catch (err) {
        setError(t("jobs.error"));
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [t]);

  // === Handle CV Upload ===
  const handleCvSubmit = async (e) => {
    e.preventDefault();
    if (!cvFile) {
      alert(t("jobs.selectFile"));
      return;
    }

    const formData = new FormData();
    formData.append("cv", cvFile);
    formData.append("jobId", selectedJob._id);

    try {
      setUploading(true);
      await axios.post("http://localhost:5000/api/apply", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(t("jobs.success"));
      setShowModal(false);
      setCvFile(null);
    } catch (err) {
      console.error("Error uploading CV:", err);
      alert(t("jobs.failed"));
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-lg text-gray-600 animate-pulse">{t("jobs.loading")}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        {t("jobs.title")}
      </h1>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-600">{t("jobs.noJobs")}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-[1.02]"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{job.title}</h2>
              <p className="text-blue-600 font-medium mb-1">{job.company}</p>
              <p className="text-gray-500 text-sm">{job.location}</p>

              <p className="text-gray-700 mt-3 line-clamp-3">{job.description}</p>

              <div className="mt-4 flex flex-col gap-1 text-sm">
                <p className="text-green-600 font-medium">
                  {t("jobs.salary")}: ${job.salary}
                </p>
                <p className="text-gray-600">
                  {t("jobs.type")}: {job.type}
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedJob(job);
                  setShowModal(true);
                }}
                className="mt-5 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                {t("jobs.applyNow")}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* === CV Upload Modal === */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] md:w-[500px]">
            <h2 className="text-xl font-bold mb-4">
              {t("jobs.applyFor")} {selectedJob?.title}
            </h2>
            <form onSubmit={handleCvSubmit} className="space-y-4">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setCvFile(e.target.files[0])}
                className="w-full border p-2 rounded"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  {t("jobs.cancel")}
                </button>
                <button
                  type="submit"
                  disabled={uploading}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  {uploading ? t("jobs.uploading") : t("jobs.submitCv")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
