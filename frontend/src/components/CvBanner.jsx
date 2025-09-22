import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const courses = [
  { name: "React", path: "react" },
  { name: "Node.js", path: "node" },
  { name: "Python", path: "python" },

];

const CvBanner = () => {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`relative z-50 p-8 md:p-12 max-w-4xl mx-auto mt-20 rounded-3xl shadow-2xl transform transition-all duration-700 ease-out
        bg-gradient-to-r from-green-200 via-green-100 to-green-300
        animate-gradient-x
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
    >
      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute top-4 right-4 text-red-600 font-bold text-2xl hover:scale-110 transition-transform z-50"
      >
        ✕
      </button>

      {/* Text Content */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 leading-snug mb-4">
          বিনা খরচে শিখুন <br />
          <span className="text-green-800">CV লেখার কৌশল</span>,{" "}
          <span className="text-green-800">ইন্টারভিউ টেকনিক</span> <br />
          এবং আরও অনেক কিছু
        </h2>

        <p className="text-green-900 mb-6 text-lg">
          সহজে শিখুন এবং আপনার ক্যারিয়ারকে এগিয়ে নিন। এখনি শুরু করুন!
        </p>

        {/* Dynamic Courses Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          {courses.map((course, index) => (
            <button
              key={index}
              onClick={() => navigate(`/courses/${course.path}`)}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold shadow-lg transform transition-transform hover:scale-110 hover:-translate-y-1 active:scale-95"
            >
              {course.name} কোর্স করতে
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CvBanner;
