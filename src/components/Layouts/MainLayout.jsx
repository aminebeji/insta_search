import React from "react";
import "./../../styles/main.css";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
function MainLayout({ children }) {
  return (
    <div className="main_container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
