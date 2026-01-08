import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <div className="bg-[#030303] min-h-screen text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Hero />
      <ProjectDetails />
    </div>
  );
}

export default App;
