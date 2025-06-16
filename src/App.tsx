import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeExamples from './components/CodeExamples';
import Installation from './components/Installation';
import Resources from './components/Resources';
import Footer from './components/Footer';
import MindMap from './components/MindMap';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <CodeExamples />
      <Installation />
      <Resources />
    </>
  );
}

function App() {
  useEffect(() => {
    document.title = "MRpro - PyTorch-based MRI Reconstruction";
    
    // Add pattern background utility classes
    const style = document.createElement('style');
    style.textContent = `
      .pattern-dots {
        background-image: radial-gradient(currentColor 2px, transparent 2px);
      }
      .pattern-size-4 {
        background-size: 24px 24px;
      }
      .pattern-opacity-10 {
        opacity: 0.1;
      }
      .pattern-bg-white {
        background-color: #ffffff;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/overview" element={<MindMap />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;