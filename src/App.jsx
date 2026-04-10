import React from 'react';
import ExoplanetHunter from './components/ExoplanetHunter';
import LunarBenefits from './components/LunarBenefits';
import SeleneRoadmap from './components/SeleneRoadmap'; 
import LunarCraterScene from './components/LunarCraterScene';
import ShipyardConfigurator from './components/ShipyardConfigurator';
import './App.css';

function App() {
  return (
    <div style={{ background: '#050a1f', minHeight: '100vh', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* SECTION 1: Hero Video */}
      <header style={{ position: 'relative', height: '70vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <video 
          autoPlay loop muted playsInline 
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, zIndex: 0 }}
        >
          <source src="/landing.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
            Project Artemis Compute
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#e2e8f0', maxWidth: '600px', margin: '0 auto' }}>
            The Zifo Lunar Data Center
          </p>
        </div>
      </header>

      {/* SECTION 2: Project Selene Pitch & Roadmap */}
      <SeleneRoadmap />

      {/* SECTION 3: The Presentation (Left-to-Right Scroll) */}
      <LunarBenefits />

      {/* SECTION 4: 3D Infrastructure Overview */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0' }}>Infrastructure & Power Transmission</h2>
          <p style={{ color: '#a0aec0', fontSize: '1.2rem' }}>
            Explore the stark contrast between the illuminated energy-harvesting rim and the cryogenic processing floor. Drag to rotate the camera.
          </p>
        </div>
        <LunarCraterScene />
      </section>

      {/* SECTION 5: The Interactive Game */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 2rem 4rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0' }}>Live Simulations</h2>
          <p style={{ color: '#a0aec0', fontSize: '1.2rem' }}>Test the processing power of the Shackleton Crater cluster below.</p>
        </div>
        <ExoplanetHunter />
      </main>

      {/* SECTION 6: WHAT NEXT? (The Shipyard) */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '6rem 2rem', borderTop: '1px solid #1e293b' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Beyond Compute: Phase IV</h2>
          <p style={{ color: '#a0aec0', fontSize: '1.4rem', maxWidth: '700px', margin: '0 auto' }}>
            Once the AI foundation is set, the Moon becomes our industrial gateway. 
            Welcome to the Zifo Lunar Shipyard.
          </p>
        </div>

        {/* SHIPYARD VIDEO PLAYER */}
        <div style={{ width: '100%', borderRadius: '24px', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 30px 60px rgba(0,0,0,0.7)' }}>
          <video autoPlay loop muted playsInline style={{ width: '100%', display: 'block' }}>
            {/* Make sure the shipyard video is saved as shipyard.mp4 in your public folder */}
            <source src="/shipyard.mp4" type="video/mp4" />
          </video>
        </div>

        {/* SHIPYARD CONFIGURATOR */}
        <ShipyardConfigurator />
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '4rem', color: '#475569', borderTop: '1px solid #0f172a', background: '#020617' }}>
        <p>© 2026 Project Artemis Compute • Powered by Zifo AI Infrastructure</p>
      </footer>
      
    </div>
  );
}

export default App;