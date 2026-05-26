import React from "react";
import Navbar from "./components/Navbar.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HeroPage from "./pages/HeroPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import TimelinePage from "./pages/TimelinePage.jsx";

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-white selection:bg-teal-300 selection:text-slate-950">
      <Navbar />
      <main>
        <HeroPage />
        <AboutPage />
        <TimelinePage />
        <ProjectsPage />
        <ContactPage />
      </main>
    </div>
  );
}
