const Job = require("../models/job.model.js");

// Add Job
const addJob = async (req, res) => {
  try {
    const { title, company, location, salary, description } = req.body;

    if (!title || !company || !location || !salary || !description) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (isNaN(salary)) {
      return res.status(400).json({ message: "Salary must be a number." });
    }

    const newJob = new Job({
      title,
      company,
      location,
      salary: Number(salary),
      description,
      postedBy: req.user.id,
    });

    await newJob.save();

    res.status(201).json({
      message: "Job posted successfully!",
      job: newJob,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong.",
      error: error.message,
    });
  }
};

// Delete Job
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    await Job.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Job
const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    const { title, company, location, salary, description } = req.body;
    job.title = title || job.title;
    job.company = company || job.company;
    job.location = location || job.location;
    job.salary = salary !== undefined ? Number(salary) : job.salary;
    job.description = description || job.description;

    await job.save();
    res.status(200).json({ message: "Job updated successfully!", job });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addJob, deleteJob, updateJob, getAllJobs };
