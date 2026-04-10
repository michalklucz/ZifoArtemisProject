import ExoplanetHunter from './components/ExoplanetHunter';
import LunarBenefits from './components/LunarBenefits';
import SeleneRoadmap from './components/SeleneRoadmap'; 
import LunarCraterScene from './components/LunarCraterScene';
import ShipyardConfigurator from './components/ShipyardConfigurator'; // <-- New import
import './App.css';

function App() {
  return (
    <div style={{ background: '#050a1f', minHeight: '100vh', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* ... Previous Sections (Hero, Roadmap, Benefits, 3D Scene) ... */}

      {/* SECTION 5: WHAT NEXT? (The Shipyard) */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '6rem 2rem' }}>
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
            <source src="/shipyard.mp4" type="video/mp4" />
          </video>
        </div>

        {/* SHIPYARD CONFIGURATOR */}
        <ShipyardConfigurator />
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '4rem', color: '#475569', borderTop: '1px solid #1e293b' }}>
        <p>© 2026 Project Artemis Compute • Powered by Zifo AI Infrastructure</p>
      </footer>
    </div>
  );
}

export default App;