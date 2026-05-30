import { useEffect, useRef } from "react";
import "./About.scss";

const TECH = [
  {l:"Java",c:"#f89820"},{l:"Spring Boot",c:"#6db33f"},{l:"React.js",c:"#61dafb"},
  {l:"JavaScript ES6+",c:"#f7df1e"},{l:"HTML5 / CSS3",c:"#e34f26"},{l:"MySQL",c:"#4479a1"},
  {l:"REST APIs",c:"#2563eb"},{l:"Git & GitHub",c:"#f05032"},{l:"Bootstrap",c:"#563d7c"},
  {l:"Hibernate",c:"#6db33f"},{l:"Servlets",c:"#ff7800"},{l:"JDBC",c:"#3178c6"},
];
const DSA = [
  {l:"Arrays & Strings",c:"#2563eb"},{l:"Linked List",c:"#2563eb"},
  {l:"Stack & Queue",c:"#2563eb"},{l:"Searching & Sorting",c:"#2563eb"},
  {l:"Recursion",c:"#2563eb"},{l:"Big-O Complexity",c:"#2563eb"},
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current?.querySelectorAll(".reveal,.reveal-left,.reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-section" ref={sectionRef}>
      <div className="sec-header reveal">
        <div className="sec-label">
          <i className="ti ti-user" aria-hidden="true"></i> About
        </div>
        <h2 className="sec-title">Who I Am</h2>
        <div className="sec-divider"></div>
      </div>

      <div className="about-layout">
        {/* LEFT */}
        <div>
          <div className="about-card reveal-left">
            <p>I am <strong>KIRUTHIKA A</strong>, a motivated Java Full Stack Developer with a strong foundation in both front-end and back-end development. I specialize in designing and developing scalable web applications using Java, Spring Boot, React, and modern web technologies.</p>
            <p>I'm passionate about building user-centric applications that solve real-world problems. From responsive UIs to robust backend APIs, I enjoy every layer of the stack. Currently open to full-time opportunities and freelance projects.</p>
            <p>When I'm not coding, I explore new technologies, contribute to open-source, and continuously upskill through certifications and hands-on projects.</p>
            <div className="meta-row">
              <span className="meta-chip"><i className="ti ti-map-pin" aria-hidden="true" style={{fontSize:"0.9rem"}}></i>Bangalore, India</span>
              <span className="meta-chip"><i className="ti ti-briefcase" aria-hidden="true" style={{fontSize:"0.9rem"}}></i>Open to work</span>
              <span className="meta-chip"><i className="ti ti-school" aria-hidden="true" style={{fontSize:"0.9rem"}}></i>B.E. Graduate</span>
            </div>
          </div>

          <div className="skills-wrap reveal">
            <div className="skills-label">Technical Skills</div>
            <div className="chips-row">
              {TECH.map((s) => (
                <div className="chip" key={s.l}>
                  <span className="chip-dot" style={{background:s.c}}></span>{s.l}
                </div>
              ))}
            </div>
            <div className="skills-label">DSA &amp; Problem Solving</div>
            <div className="chips-row">
              {DSA.map((s) => (
                <div className="chip" key={s.l}>
                  <span className="chip-dot" style={{background:s.c}}></span>{s.l}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right-col reveal-right">
          <div className="about-card">
            <div className="card-head">
              <div className="card-icon" style={{background:"rgba(34,197,94,0.1)",color:"#15803d"}}>
                <i className="ti ti-building" aria-hidden="true"></i>
              </div>
              <h4>Internships</h4>
            </div>
                        <div className="intern-item">
              <span className="intern-tag">6 months</span>
              <h5>Java Full Stack Traniee — Besant Technologies</h5>
              <p>Successfully completed multiple full-stack web development projects using HTML, CSS, JavaScript, Java, Spring Boot, Hibernate, and SQL.</p>
            </div>
            <div className="intern-item">
              <span className="intern-tag">2 months</span>
              <h5>Web Development Intern — CodeXodus</h5>
              <p>Worked with HTML, CSS, JavaScript, and Java to develop and enhance web applications with responsive, user-friendly interfaces.</p>
            </div>
            <div className="intern-item">
              <span className="intern-tag">15 days</span>
              <h5>Full Stack Intern — ETS Academy</h5>
              <p>Focused on full stack development — HTML, CSS, JS, Java, and database integration to build dynamic web applications.</p>
            </div>
          </div>

          <div className="about-card">
            <div className="card-head">
              <div className="card-icon" style={{background:"rgba(234,179,8,0.1)",color:"#92400e"}}>
                <i className="ti ti-certificate" aria-hidden="true"></i>
              </div>
              <h4>Certifications</h4>
            </div>
            {[
              "Full Stack Web Developer — CodeXodus",
              "Java Programming — CodeXodus",
              "Cloud Computing Introduction — Infosys",
              "Basics of Python — Infosys",
              "SQL & Relational Databases — IBM",
            ].map((c) => (
              <div className="cert-item" key={c}>
                <span className="cert-dot"></span>{c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
