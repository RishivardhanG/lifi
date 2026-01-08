// src/App.jsx
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ProblemsSection from "./components/ProblemsSection";
import TechnologySection from "./components/TechnologySection";
import ApplicationsSection from "./components/ApplicationsSection";
import ComparisonSection from "./components/ComparisonSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans">
      <Nav />
      <Hero />
      <ProblemsSection />
      <TechnologySection />
      <ApplicationsSection />
      <ComparisonSection />
      <Footer />
    </div>
  );
}

export default App;
