import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        jobs: "Jobs",
        services: "Services",
        webDev: "Web Development",
        frontend: "Frontend Development",
        backend: "Backend Development",
        mobile: "Mobile App Development",
        uiux: "UI/UX Design",
        aboutUs: "About Us",
        overview: "Overview",
        mission: "Mission",
        values: "Values",
        team: "Our Team",
        courses: "Courses",
        react: "React Development",
        node: "Node.js Development",
        python: "Python Programming",
        postJob: "Post Job",
        login: "Login",
        register: "Register",
        logout: "Logout",
      },
      jobs: {
        title: "Jobs",
        salary: "Salary",
        type: "Job Type",
        fetchError: "Error fetching jobs",
        noJobs: "No jobs available",
      },
      home: {
        welcome: "Welcome to WorkBridge",
        tagline: "Find your dream job easily",
        exploreJobs: "Explore Jobs",
        learnMore: "Learn More",
        careerFuture: "Your Career, Your Future",
        careerFutureDesc:
          "WorkBridge brings all job opportunities under one roof. Apply quickly, track your applications, and land your dream role effortlessly.",
      },
      register: {
        title: "Register",
        name: "Name",
        email: "Email",
        password: "Password",
        user: "User",
        admin: "Admin",
        registrationSuccess: "Registration successful!",
        registrationFailed: "Registration failed!",
      },
      login: {
        title: "Login",
        email: "Email",
        password: "Password",
        success: "Login successful!",
        failed: "Login failed. Try again.",
      },
      footer: {
        companyName: "WorkBridge",
        companyDesc:
          "WorkBridge connects job seekers and companies in one platform. Find your dream job or post vacancies with ease.",
        services: "Services",
        jobListings: "Job Listings",
        postJob: "Post a Job",
        courses: "Courses",
        contact: "Contact",
        company: "Company",
        aboutUs: "About Us",
        ourServices: "Our Services",
        home: "Home",
        address: "123 WorkBridge Street",
        city: "Dhaka, Bangladesh",
        email: "Email: info@workbridge.com",
        phone: "Phone: +880 1234 567890",
        rights: "All rights reserved.",
      },
      servicesPage: {
        webdev: {
          title: "Web Development",
          description:
            "Full-stack web development course covering frontend and backend.",
          enroll: "Enroll Now",
          modules: [
            "HTML & CSS",
            "JavaScript Basics",
            "React.js",
            "Node.js & Express",
            "MongoDB",
            "Deployment & Hosting",
          ],
        },
        frontend: {
          title: "Frontend Development",
          description: "Focus on building modern and responsive user interfaces.",
          enroll: "Enroll Now",
          modules: [
            "HTML & CSS Advanced",
            "JavaScript ES6+",
            "React.js",
            "Tailwind CSS",
            "Responsive Design",
            "Animations & Transitions",
          ],
        },
        backend: {
          title: "Backend Development",
          description: "Server-side programming, APIs and database management.",
          enroll: "Enroll Now",
          modules: [
            "Node.js & Express",
            "MongoDB / SQL",
            "RESTful APIs",
            "Authentication & Authorization",
            "Error Handling",
            "Deployment",
          ],
        },
        mobile: {
          title: "Mobile App Development",
          description:
            "Develop cross-platform mobile apps using modern frameworks.",
          enroll: "Enroll Now",
          modules: [
            "React Native",
            "UI Design",
            "Navigation",
            "State Management",
            "API Integration",
            "Deployment to App Stores",
          ],
        },
        uiux: {
          title: "UI/UX Design",
          description:
            "Learn user-centered design, prototyping and interaction design.",
          enroll: "Enroll Now",
          modules: [
            "Design Principles",
            "Wireframing & Prototyping",
            "Figma / Adobe XD",
            "Interaction Design",
            "Usability Testing",
            "Portfolio Projects",
          ],
        },
      },
      coursesPage: {
        react: {
          title: "React Development",
          description:
            "Learn modern frontend development using React, hooks, and component-based architecture.",
          modules: [
            "Introduction to React & JSX",
            "Props and State Management",
            "React Router and Navigation",
            "Hooks: useState, useEffect, useContext",
            "Project: Build a Job Portal Frontend",
          ],
        },
        node: {
          title: "Node.js Development",
          description: "Master backend development with Node.js and Express.",
          modules: [
            "Introduction to Node.js",
            "Building REST APIs with Express",
            "Authentication & Authorization",
            "Database Integration with MongoDB",
            "Project: Job Portal Backend",
          ],
        },
        python: {
          title: "Python Programming",
          description:
            "Learn Python from basics to advanced concepts with practical projects.",
          modules: [
            "Python Basics & Data Structures",
            "OOP in Python",
            "Django/Flask Basics",
            "Working with APIs",
            "Project: Job Recommendation System",
          ],
        },
      },
      about: {
        overview: {
          title: "Company Overview",
          desc: "WorkBridge is a platform that connects job seekers and companies...",
        },
        mission: {
          title: "Our Mission",
          desc: "Our mission is to bridge the gap between job seekers and employers by providing a smart, easy-to-use platform that helps people find their dream jobs and companies find the right talent.",
        },
        values: {
          title: "Our Core Values",
          items: [
            "Integrity – We maintain honesty and transparency.",
            "Innovation – We encourage creativity and new ideas.",
            "Collaboration – We believe in teamwork and partnerships.",
            "Excellence – We strive for the highest quality in everything we do.",
          ],
        },
        team: {
          title: "Meet Our Team",
          members: [
            { name: "John Doe", role: "CEO & Founder" },
            { name: "Sarah Lee", role: "Chief Technology Officer" },
            { name: "David Kim", role: "Lead Developer" },
            { name: "Emma Watson", role: "UI/UX Designer" },
          ],
        },
      },
      postJob: {
        title: "Post a Job",
        adminOnly: "Only admin can post jobs",
        success: "Job posted successfully!",
        failed: "Failed to post job",
        submit: "Submit",
        jobTitle: "Job Title",
        company: "Company Name",
        location: "Location",
        salary: "Salary",
        description: "Job Description",
        fullTime: "Full-time",
        partTime: "Part-time",
        internship: "Internship",
      },
    },
  },
  bn: {
    translation: {
      navbar: {
        home: "হোম",
        jobs: "চাকরি",
        services: "সার্ভিসেস",
        webDev: "ওয়েব ডেভেলপমেন্ট",
        frontend: "ফ্রন্টএন্ড ডেভেলপমেন্ট",
        backend: "ব্যাকএন্ড ডেভেলপমেন্ট",
        mobile: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
        uiux: "UI/UX ডিজাইন",
        aboutUs: "আমাদের সম্পর্কে",
        overview: "ওভারভিউ",
        mission: "মিশন",
        values: "মূল্যবোধ",
        team: "আমাদের টিম",
        courses: "কোর্স",
        react: "রিঅ্যাক্ট ডেভেলপমেন্ট",
        node: "নোড.জেএস ডেভেলপমেন্ট",
        python: "পাইথন প্রোগ্রামিং",
        postJob: "চাকরি পোস্ট করুন",
        login: "লগইন",
        register: "রেজিস্টার",
        logout: "লগআউট",
      },
      jobs: {
        title: "চাকরির তালিকা",
        salary: "বেতন",
        type: "চাকরির ধরন",
        fetchError: "চাকরি লোড করতে সমস্যা হয়েছে",
        noJobs: "কোনো চাকরি পাওয়া যায়নি",
      },
      home: {
        welcome: "ওয়ার্কব্রিজ এ স্বাগতম",
        tagline: "সহজেই আপনার স্বপ্নের চাকরি খুঁজুন",
        exploreJobs: "চাকরি দেখুন",
        learnMore: "আরও জানুন",
        careerFuture: "আপনার ক্যারিয়ার, আপনার ভবিষ্যত",
        careerFutureDesc:
          "ওয়ার্কব্রিজ সমস্ত চাকরির সুযোগ একত্রিত করে। দ্রুত আবেদন করুন, আপনার অ্যাপ্লিকেশন ট্র্যাক করুন এবং সহজেই আপনার স্বপ্নের চাকরি অর্জন করুন।",
      },
      register: {
        title: "রেজিস্টার",
        name: "নাম",
        email: "ইমেইল",
        password: "পাসওয়ার্ড",
        user: "ইউজার",
        admin: "অ্যাডমিন",
        registrationSuccess: "রেজিস্ট্রেশন সফল হয়েছে!",
        registrationFailed: "রেজিস্ট্রেশন ব্যর্থ হয়েছে!",
      },
      login: {
        title: "লগইন",
        email: "ইমেইল",
        password: "পাসওয়ার্ড",
        success: "লগইন সফল হয়েছে!",
        failed: "লগইন ব্যর্থ হয়েছে। পুনরায় চেষ্টা করুন।",
      },
      footer: {
        companyName: "ওয়ার্কব্রিজ",
        companyDesc:
          "ওয়ার্কব্রিজ চাকরিপ্রার্থীদের এবং কোম্পানিগুলিকে এক প্ল্যাটফর্মে সংযুক্ত করে। সহজেই আপনার স্বপ্নের চাকরি খুঁজুন বা চাকরি পোস্ট করুন।",
        services: "সেবা",
        jobListings: "চাকরির তালিকা",
        postJob: "চাকরি পোস্ট করুন",
        courses: "কোর্স",
        contact: "যোগাযোগ",
        company: "কোম্পানি",
        aboutUs: "আমাদের সম্পর্কে",
        ourServices: "আমাদের সেবা",
        home: "হোম",
        address: "123 ওয়ার্কব্রিজ স্ট্রিট",
        city: "ঢাকা, বাংলাদেশ",
        email: "ইমেইল: info@workbridge.com",
        phone: "ফোন: +880 1832346270",
        rights: "সর্বস্বত্ব সংরক্ষিত।",
      },
      servicesPage: {
        webdev: {
          
           title: "ওয়েব ডেভেলপমেন্ট",
          description:
            "ফ্রন্টএন্ড এবং ব্যাকএন্ড সহ ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট কোর্স।",
          enroll: "এখন নাম লেখান",
          modules: [
            "HTML & CSS",
            "JavaScript Basics",
            "React.js",
            "Node.js & Express",
            "MongoDB",
            "ডিপ্লয়মেন্ট & হোস্টিং",
          ],
        },
        frontend: {
          title: "ফ্রন্টএন্ড ডেভেলপমেন্ট",
          description: "আধুনিক এবং রেসপন্সিভ ইউজার ইন্টারফেস তৈরি করুন।",
          enroll: "এখন নাম লেখান",
          modules: [
            "উন্নত HTML & CSS",
            "JavaScript ES6+",
            "React.js",
            "Tailwind CSS",
            "রেসপন্সিভ ডিজাইন",
            "অ্যানিমেশন & ট্রানজিশন",
          ],
        },
        backend: {
          title: "ব্যাকএন্ড ডেভেলপমেন্ট",
          description: "সার্ভার-সাইড প্রোগ্রামিং, API এবং ডাটাবেস ম্যানেজমেন্ট।",
          enroll: "এখন নাম লেখান",
          modules: [
            "Node.js & Express",
            "MongoDB / SQL",
            "RESTful APIs",
            "Authentication & Authorization",
            "এরর হ্যান্ডলিং",
            "ডিপ্লয়মেন্ট",
          ],
        },
        mobile: {
          title: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
          description:
            "আধুনিক ফ্রেমওয়ার্ক ব্যবহার করে ক্রস-প্ল্যাটফর্ম অ্যাপ তৈরি করুন।",
          enroll: "এখন নাম লেখান",
          modules: [
            "React Native",
            "UI ডিজাইন",
            "নেভিগেশন",
            "স্টেট ম্যানেজমেন্ট",
            "API ইন্টিগ্রেশন",
            "অ্যাপ স্টোরে ডিপ্লয়মেন্ট",
          ],
        },
        uiux: {
          title: "UI/UX ডিজাইন",
          description:
            "ইউজার-সেন্ট্রিক ডিজাইন, প্রোটোটাইপিং এবং ইন্টারঅ্যাকশন ডিজাইন শিখুন।",
          enroll: "এখন নাম লেখান",
          modules: [
            "ডিজাইন প্রিন্সিপল",
            "ওয়্যারফ্রেমিং & প্রোটোটাইপিং",
            "Figma / Adobe XD",
            "ইন্টারঅ্যাকশন ডিজাইন",
            "ইউজার টেস্টিং",
            "পোর্টফোলিও প্রজেক্ট",
          ],
        },
      },
      coursesPage: {
        react: {
          title: "রিয়্যাক্ট ডেভেলপমেন্ট",
          description:
            "রিয়্যাক্ট, হুকস এবং কম্পোনেন্ট-ভিত্তিক আর্কিটেকচার ব্যবহার করে আধুনিক ফ্রন্টএন্ড ডেভেলপমেন্ট শিখুন।",
          modules: [
            "রিয়্যাক্ট ও JSX পরিচিতি",
            "প্রপস ও স্টেট ম্যানেজমেন্ট",
            "রিয়্যাক্ট রাউটার ও নেভিগেশন",
            "হুকস: useState, useEffect, useContext",
            "প্রজেক্ট: জব পোর্টাল ফ্রন্টএন্ড বানানো",
          ],
        },
        node: {
          title: "নোড.জেএস ডেভেলপমেন্ট",
          description:
            "নোড.জেএস এবং এক্সপ্রেস দিয়ে ব্যাকএন্ড ডেভেলপমেন্টে দক্ষতা অর্জন করুন।",
          modules: [
            "নোড.জেএস পরিচিতি",
            "এক্সপ্রেস দিয়ে REST API তৈরি",
            "অথেন্টিকেশন ও অথরাইজেশন",
            "MongoDB এর সাথে ডাটাবেজ কানেকশন",
            "প্রজেক্ট: জব পোর্টাল ব্যাকএন্ড",
          ],
        },
        python: {
          title: "পাইথন প্রোগ্রামিং",
          description:
            "বেসিক থেকে এডভান্স পর্যন্ত পাইথন শিখুন বাস্তব প্রজেক্ট সহ।",
          modules: [
            "পাইথন বেসিক ও ডাটা স্ট্রাকচার",
            "পাইথনে অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং",
            "Django/Flask বেসিকস",
            "API নিয়ে কাজ",
            "প্রজেক্ট: জব রিকমেন্ডেশন সিস্টেম",
          ],
        },
      },
      about: {
        overview: {
          title: "কোম্পানির পরিচিতি",
          desc: "WorkBridge একটি প্ল্যাটফর্ম যা চাকরিপ্রার্থী এবং কোম্পানিগুলোকে একত্রে যুক্ত করে...",
        },
        mission: {
          title: "আমাদের লক্ষ্য",
          desc: "আমাদের লক্ষ্য হলো চাকরিপ্রার্থী এবং নিয়োগকর্তার মধ্যে সেতুবন্ধন তৈরি করা। একটি সহজ ও স্মার্ট প্ল্যাটফর্মের মাধ্যমে মানুষকে তাদের স্বপ্নের চাকরি খুঁজে পেতে এবং কোম্পানিগুলোকে সঠিক প্রতিভা খুঁজে পেতে সহায়তা করা।",
        },
        values: {
          title: "আমাদের মূল মূল্যবোধ",
          items: [
            "সততা – আমরা সততা ও স্বচ্ছতা বজায় রাখি।",
            "নবতর উদ্ভাবন – আমরা সৃজনশীলতা ও নতুন ধারণাকে উৎসাহিত করি।",
            "সহযোগিতা – আমরা দলগত কাজ ও অংশীদারিত্বে বিশ্বাসী।",
            "গুণগত মান – আমরা সর্বোচ্চ মান ধরে রাখার চেষ্টা করি।",
          ],
        },
        team: {
          title: "আমাদের টিমকে জানুন",
          members: [
            { name: "জন ডো", role: "সিইও ও প্রতিষ্ঠাতা" },
            { name: "সারাহ লি", role: "প্রধান প্রযুক্তি কর্মকর্তা" },
            { name: "ডেভিড কিম", role: "লিড ডেভেলপার" },
            { name: "এমা ওয়াটসন", role: "ইউআই/ইউএক্স ডিজাইনার" },
          ],
        },
      },
      postJob: {
        title: "চাকরির পোস্ট",
        adminOnly: "শুধুমাত্র অ্যাডমিন চাকরি পোস্ট করতে পারবে",
        success: "চাকরি সফলভাবে পোস্ট হয়েছে!",
        failed: "চাকরি পোস্ট করা যায়নি",
        submit: "জমা দিন",
        jobTitle: "চাকরির শিরোনাম",
        company: "কোম্পানির নাম",
        location: "অবস্থান",
        salary: "বেতন",
        description: "চাকরির বর্ণনা",
        fullTime: "পূর্ণকালীন",
        partTime: "আংশিককালীন",
        internship: "ইন্টার্নশিপ",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

