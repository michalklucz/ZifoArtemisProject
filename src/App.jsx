import ExoplanetHunter from './components/ExoplanetHunter';
import './App.css'; // Optional: You can style your app further here

function App() {
  return (
    <div style={{ background: '#050a1f', minHeight: '100vh', color: 'white' }}>
      
      {/* Hero Section with Video */}
      <header style={{ position: 'relative', height: '60vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <video 
          autoPlay loop muted playsInline 
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6, zIndex: 0 }}
        >
          {/* Ensure your video is in the 'public' folder and named 'landing.mp4' */}
          <source src="/landing.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>Project Artemis Compute</h1>
          <p style={{ fontSize: '1.2rem', color: '#a0aec0' }}>The Zifo Lunar Data Center</p>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <ExoplanetHunter />
      </main>

    </div>
  );
}

export default App;