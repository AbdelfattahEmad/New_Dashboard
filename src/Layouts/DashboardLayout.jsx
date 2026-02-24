import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import "../assets/Styles/_layout.scss";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <section className="home_layout">
      <div className="Sidebar">
        <Sidebar isOpen={isOpen} />
      </div>

      <div
        className={`layout_content ${isOpen
          ? "sidebar-open"
          : "sidebar-closed"}`}
      >
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
