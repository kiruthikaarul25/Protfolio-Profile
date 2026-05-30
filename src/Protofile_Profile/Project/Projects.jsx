import { useState, useEffect, useRef } from "react";
import "./Project.css";

const ALL_PROJECTS = [
  { title:"ShieldHer", desc:"Women's safety app with real-time SOS alerts, GPS location sharing, and emergency contact notifications. Designed to empower women with immediate help.", tech:["React.js","Node.js","Socket.io","MongoDB","Leaflet Maps"], features:["Real-time SOS alert system","Live GPS location sharing","Emergency contact management","Shake-to-alert gesture"], icon:"shield", iconBg:"rgba(244,114,182,0.12)", iconColor:"#db2777", badge:"New", badgeBg:"rgba(244,114,182,0.1)", badgeColor:"#db2777", cat:"fullstack", isNew:true },
  { title:"SportsZone", desc:"Full-featured sports e-commerce platform with product catalog, cart management, order tracking, and an admin dashboard for inventory control.", tech:["React.js","Spring Boot","MySQL","Tailwind CSS","REST API"], features:["Product catalog with filters","Shopping cart & checkout","Order tracking system","Admin inventory dashboard"], icon:"ball-football", iconBg:"rgba(34,197,94,0.1)", iconColor:"#15803d", badge:"New", badgeBg:"rgba(34,197,94,0.1)", badgeColor:"#15803d", cat:"fullstack", isNew:true },
  { title:"Zivvo Chatbox", desc:"Real-time chat application with WebSocket messaging, user authentication, message history, and typing indicators for seamless communication.", tech:["React.js","Node.js","Socket.io","Express","MongoDB"], features:["Real-time WebSocket messaging","Typing indicators","Message history & search","File sharing support"], icon:"message-2", iconBg:"rgba(37,99,235,0.1)", iconColor:"#2563eb", badge:"New", badgeBg:"rgba(37,99,235,0.1)", badgeColor:"#2563eb", cat:"fullstack", isNew:true },
  { title:"AI Career Growth Platform", desc:"AI-powered career guidance platform analyzing skills, recommending learning paths, and predicting career trajectories using machine learning.", tech:["Python","Flask","MySQL","CSS","Scikit-learn"], features:["AI skill gap analysis","Personalized learning paths","Career trajectory prediction","Resume score checker"], icon:"robot", iconBg:"rgba(99,102,241,0.1)", iconColor:"#6366f1", badge:"Featured", badgeBg:"rgba(99,102,241,0.1)", badgeColor:"#6366f1", cat:"fullstack", isNew:false },
  { title:"Event Management System", desc:"Full stack web app to create, manage, and organize events with attendee registration, scheduling, and notification systems.", tech:["HTML","CSS","Java","Spring Boot","MySQL"], features:["Event creation & scheduling","Attendee registration","Email notifications","Admin dashboard"], icon:"calendar-event", iconBg:"rgba(234,179,8,0.1)", iconColor:"#92400e", badge:"Full Stack", badgeBg:"rgba(234,179,8,0.1)", badgeColor:"#92400e", cat:"fullstack", isNew:false },
  { title:"Job Portal", desc:"Full stack job portal with role-based access for job seekers, employers, and admins to manage listings and applications.", tech:["HTML","CSS","Java","Servlets","JDBC","MySQL"], features:["Role-based authentication","Job search & apply","Employer job posting","Application tracking"], icon:"briefcase", iconBg:"rgba(56,189,248,0.1)", iconColor:"#0284c7", badge:"Full Stack", badgeBg:"rgba(56,189,248,0.1)", badgeColor:"#0284c7", cat:"fullstack", isNew:false },
  { title:"Portfolio Website", desc:"Personal developer portfolio built with React.js and SCSS featuring smooth animations, responsive design, and dynamic project showcase.", tech:["React.js","SCSS","CSS","Vite"], features:["Fully responsive layout","Smooth scroll transitions","Dynamic project filtering","Light theme design"], icon:"world", iconBg:"rgba(99,102,241,0.1)", iconColor:"#4f46e5", badge:"Frontend", badgeBg:"rgba(99,102,241,0.1)", badgeColor:"#4f46e5", cat:"frontend", isNew:false },
  { title:"Responsive UI Kit", desc:"A collection of 10+ responsive UI components — cards, navbars, forms, modals — built with pure HTML, CSS, and Sass.", tech:["HTML","CSS","Sass","JavaScript"], features:["10+ reusable components","Mobile-first design","Cross-browser compatible","Dark mode variants"], icon:"palette", iconBg:"rgba(244,114,182,0.1)", iconColor:"#db2777", badge:"Frontend", badgeBg:"rgba(244,114,182,0.1)", badgeColor:"#db2777", cat:"frontend", isNew:false },
  { title:"CRUD Application", desc:"Clean CRUD app demonstrating full database operations with Java and JDBC, including form validation and error handling.", tech:["Java","JDBC","MySQL","HTML","CSS"], features:["Create / Read / Update / Delete","Form validation","Error handling","Connection pooling"], icon:"database", iconBg:"rgba(34,197,94,0.1)", iconColor:"#15803d", badge:"Java", badgeBg:"rgba(34,197,94,0.1)", badgeColor:"#15803d", cat:"java", isNew:false },
  { title:"Auth System", desc:"Secure login and registration system with session management, password hashing, and role-based access control using Java Servlets.", tech:["Java","Servlets","JDBC","MySQL","HTML"], features:["Secure password hashing","Session management","Role-based access","Remember me feature"], icon:"lock", iconBg:"rgba(234,179,8,0.1)", iconColor:"#92400e", badge:"Java", badgeBg:"rgba(234,179,8,0.1)", badgeColor:"#92400e", cat:"java", isNew:false },
];

const FILTERS = [
  {k:"all",l:"All"},{k:"fullstack",l:"Full Stack"},
  {k:"frontend",l:"Frontend"},{k:"java",l:"Java"},{k:"new",l:"New"},
];

const Projects = () => {
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [activeF, setActiveF] = useState("all");
  const sectionRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 350);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current?.querySelectorAll(".reveal,.reveal-left,.reveal-right")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = ALL_PROJECTS.filter((p) => {
    const mc = activeF === "all" ? true : activeF === "new" ? p.isNew : p.cat === activeF;
    const q = debounced.toLowerCase();
    const mq = !q || p.title.toLowerCase().includes(q) || p.tech.some((t) => t.toLowerCase().includes(q));
    return mc && mq;
  });

  return (
    <div className="projects-section" ref={sectionRef}>
      <div className="sec-header reveal">
        <div className="sec-label"><i className="ti ti-layout-grid" aria-hidden="true"></i> Projects</div>
        <h2 className="sec-title">What I've Built</h2>
        <div className="sec-divider"></div>
      </div>

      <div className="proj-controls reveal">
        <div className="search-wrap">
          <i className="ti ti-search" aria-hidden="true"></i>
          <input
            type="text" value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects or technology..."
            aria-label="Search projects"
          />
        </div>
        <div className="ftabs">
          {FILTERS.map((f) => (
            <button
              key={f.k}
              className={`ftab${activeF === f.k ? " active" : ""}`}
              onClick={() => setActiveF(f.k)}
            >{f.l}</button>
          ))}
        </div>
      </div>

      <div className="proj-grid reveal">
        {filtered.length > 0 ? filtered.map((p) => (
          <div className="proj-card" key={p.title}>
            <div className="proj-top">
              <div className="proj-icon" style={{background:p.iconBg}}>
                <i className={`ti ti-${p.icon}`} style={{fontSize:"1.3rem",color:p.iconColor}} aria-hidden="true"></i>
              </div>
              <span className="proj-badge" style={{background:p.badgeBg,color:p.badgeColor}}>{p.badge}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="proj-features">
              {p.features.map((f) => (
                <div className="proj-feat" key={f}>
                  <i className="ti ti-check" aria-hidden="true"></i>{f}
                </div>
              ))}
            </div>
            <div className="proj-tech">
              {p.tech.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
            </div>
            <div className="proj-footer">
              <a href="https://github.com/kiruthikaarul25" target="_blank" rel="noreferrer" className="proj-link">
                <i className="ti ti-brand-github" aria-hidden="true"></i> Code
              </a>
              <a href="#" className="proj-link ml">
                <i className="ti ti-external-link" aria-hidden="true"></i> Live
              </a>
            </div>
          </div>
        )) : (
          <div className="no-res">
            <i className="ti ti-search-off" aria-hidden="true"></i>
            <p>No projects found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
