import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeSidebar(); // close sidebar after clicking a link
  };

 function dark(){
  let body=document.body;
  body.style.backgroundColor="black";
  body.style.color="white";
 }
 function light(){
  let body=document.body;
  document.body.style.backgroundColor="white";
  body.style.color="black";
 }
  return (
    <>
    <title>Portfolio Profile</title>
      <nav className="navbar">
        <h2>My Profile</h2>

        <div className="hamburger" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="nav-buttons">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/About")}>About</button>
          <button onClick={() => navigate("/Projects")}>Projects</button>
          <button onClick={() => navigate("/Contact")}>Contact</button>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSidebar}>✕</button>
        <div className="sidebar-buttons">
          <button onClick={() => handleNavigation("/")}>Home</button>
          <button onClick={() => handleNavigation("/About")}>About</button>
          <button onClick={() => handleNavigation("/Projects")}>Projects</button>
          <button onClick={() => handleNavigation("/Contact")}>Contact</button>
        </div>
      </div>

       
  
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
};

export default Navbar;