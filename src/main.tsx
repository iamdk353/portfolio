import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import "./index.css";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className="p-3 md:p-10 max-w-[2340px]">
      <Nav />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </div>
  );
}
