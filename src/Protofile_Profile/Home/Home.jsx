import React from "react";
import "./Home.scss";
import profile from "./kee.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      <section className="hero">
        <div className="left">
          <img src={profile} alt="profile" />
        </div>
        <div className="right">
          <h1>Hi, I'm Kiruthika 👋</h1>
          <h3>Java Full Stack Developer</h3>
          <p>
            Passionate developer skilled in Front-end, Backend and Database .
          </p>
        </div>
        <div className="but">
          <button className="butt" onClick={() => navigate("/Projects")}>Projects</button>
          <button className="butt" onClick={() => navigate("/Contact")}>Contact</button>

        </div>
      </section>
    </div>
  );
};

export default Home;