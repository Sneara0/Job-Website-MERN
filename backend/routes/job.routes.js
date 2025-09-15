const express = require("express");
const router = express.Router();
const { addJob, deleteJob, updateJob, getAllJobs } = require("../controllers/job.controller.js");
const authMiddleware = require("../Middleware/authMiddleware.js");
const adminMiddleware = require("../Middleware/admin.middleware.js");


router.post("/add", authMiddleware, adminMiddleware, addJob);


router.put("/update/:id", authMiddleware, adminMiddleware, updateJob);

router.delete("/:id", authMiddleware, adminMiddleware, deleteJob);


router.get("/", getAllJobs);

module.exports = router;
