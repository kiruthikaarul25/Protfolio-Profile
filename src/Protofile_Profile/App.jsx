import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from ".//Project/Projects";
import Contact from "./Contact/Contact";

function App() {
  return (
  
    <BrowserRouter>
     <Nav/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;