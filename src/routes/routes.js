import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// context
import { AuthContext } from "../context/AuthContext";

// screens
import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Header from "../components/Header";
import Contact from "../screens/Contact";
import About from "../screens/About";
import Schedule from "../screens/Schedule";
import ScheduleDetails from "../screens/ScheduleDetails";
import OurServices from "../screens/Ourservices";

export default function Router() {
  const { isAuthenticated, setisAuthenticated } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Header />
      {isAuthenticated ? (
        <Routes>
          <Route exact path="/schedule" element={<Schedule />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/schedule-details" element={<ScheduleDetails />} />
          <Route exact path="/ourservices" element={<OurServices />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/ourservices" element={<OurServices />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          
        </Routes>
      )}
    </BrowserRouter>
  );
}
