import { useEffect, useRef } from "react";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Project/Projects";
import Contact from "./Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer className="site-footer">
        Designed &amp; built by <span>Kiruthika A</span> — Java Full Stack Developer, Bangalore
      </footer>
    </div>
  );
}

export default App;
