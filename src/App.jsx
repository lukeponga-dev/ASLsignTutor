import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Learn from './pages/Learn';

// Placeholder for Dashboard
function Dashboard() {
  return (
    <div className="page-content container flex-center" style={{ height: '100vh' }}>
      <div className="glass-panel p-8 text-center">
        <h2>Progress Tracking</h2>
        <p className="text-secondary">Coming soon in Phase 2</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
