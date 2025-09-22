import React, { useState, useEffect } from "react";

const CvUploadModal = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);

  // App চালু হলে popup আসবে
  useEffect(() => {
    setOpen(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("দয়া করে একটি সিভি বাছাই করুন!");
      return;
    }
    alert(`আপনার সিভি (${file.name}) সফলভাবে জমা হয়েছে ✅`);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[420px] relative animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4">
          আপনার সিভি আপলোড করুন
        </h2>

        {/* CV Upload Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files[0])}
            className="border border-gray-300 p-2 rounded-lg"
          />

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            সিভি জমা দিন
          </button>
        </form>

        {/* Free Course Section */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">ফ্রি কোর্স করুন</p>
          <button className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            এখানে ক্লিক করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default CvUploadModal;
