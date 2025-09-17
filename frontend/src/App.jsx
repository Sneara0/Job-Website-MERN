import React from 'react'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import PostJob from "./pages/PostJob.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Footer from './components/Footer.jsx';
import ServiceDetails from "./pages/ServiceDetails.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Overview from "./pages/About/Overview.jsx";
import Mission from "./pages/About/Mission.jsx";
import Values from "./pages/About/Values.jsx";
import Team from "./pages/About/Team";
import TrustedCompanies from './components/TrustedCompanies.jsx';
import FeaturedJobs from "./components/FeaturedJobs.jsx"

import Advertise from "./components/Advertise.jsx"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      
      

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

  <Route path="/services/:service" element={<ServiceDetails />} />
    <Route path="/courses/:course" element={<CourseDetails />} />
    <Route path="/about/overview" element={<Overview />} />
      <Route path="/about/mission" element={<Mission />} />
      <Route path="/about/values" element={<Values />} />
       <Route path="/about/team" element={<Team />} />
      


        
        <Route
          path="/postjob"
          element={
            <ProtectedRoute adminOnly={true}>
              <PostJob />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Advertise/>
      <TrustedCompanies/>
      <FeaturedJobs/>

      <Footer/>
    </>
  );
}

export default App;
