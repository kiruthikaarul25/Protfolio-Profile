import { useEffect, useRef, useState } from "react";
import "./Home.scss";
import kee from "./kee.jpeg";

const Home = () => {
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-section">
      {/* LEFT */}
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="pulse-dot"></span>
          Available for opportunities
        </div>
        <h1>
          Crafting Digital<br />
          Experiences as<br />
          <span className="name-highlight">Kiruthika A</span>
        </h1>
        <p className="hero-role">Java Full Stack Developer</p>
        <p className="hero-desc">
          Building scalable web applications with React, Spring Boot and modern
          technologies. Focused on clean code, thoughtful UI and impactful user experiences.
        </p>
        <div className="hero-btns">
          <button className="btn-dark" onClick={() => scrollTo("#projects")}>
            View Projects <i className="ti ti-arrow-right" aria-hidden="true"></i>
          </button>
          <button className="btn-outline" onClick={() => scrollTo("#contact")}>
            Get In Touch
          </button>
        </div>
        <div className="hero-stats">
          {[
            { num: "10", label: "Projects" },
            { num: "2", label: "Internships" },
            { num: "5", label: "Certifications" },
            { num: "13", label: "Technologies" },
          ].map((s) => (
            <div className="h-stat" key={s.label}>
              <div className="num">{s.num}<span>+</span></div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="profile-ring">
          {!imgError ? (
            <img
              className="profile-img"
              src={kee}
              alt="Kiruthika A"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="profile-avatar-fallback">KA</div>
          )}
        </div>
      </div>

      <div className="scroll-cue">
        <div className="scroll-line"></div>
        scroll
      </div>
    </div>
  );
};

export default Home;
