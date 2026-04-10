import ExoplanetHunter from './components/ExoplanetHunter';
import LunarBenefits from './components/LunarBenefits';
import SeleneRoadmap from './components/SeleneRoadmap'; 
import LunarCraterScene from './components/LunarCraterScene'; // <-- Import the new 3D scene
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
        <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0' }}>Infrastructure & Power Transmission</h2>
        <p style={{ color: '#a0aec0', fontSize: '1.2rem', marginBottom: '2rem' }}>
          Explore the stark contrast between the illuminated energy-harvesting rim and the cryogenic processing floor. Drag to rotate the camera.
        </p>
        <LunarCraterScene />
      </section>

      {/* SECTION 5: The Interactive Game */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 2rem 6rem 2rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0' }}>Live Simulations</h2>
          <p style={{ color: '#a0aec0', fontSize: '1.2rem' }}>Test the processing power of the Shackleton Crater cluster below.</p>
        </div>
        <ExoplanetHunter />
      </main>

    </div>
  );
}

export default App;