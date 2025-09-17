import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Jobs = () => {
  const { t } = useTranslation();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

              <button className="mt-5 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                {t("jobs.applyNow")}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
