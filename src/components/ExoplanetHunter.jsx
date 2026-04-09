import { useState } from 'react';

export default function ExoplanetHunter() {
  const [compute, setCompute] = useState(10);
  const isDiscovered = compute > 85;

  // Generate a messy or clean light curve based on the compute slider
  const generateLightCurve = () => {
    let points = "";
    for (let i = 0; i <= 100; i++) {
      let baseBrightness = 50;
      // Create the planetary transit dip in the middle
      if (i > 40 && i < 60) baseBrightness = 80; 
      
      // Noise reduces as compute increases
      const noiseAmplitude = (100 - compute) / 2;
      const noise = (Math.random() - 0.5) * noiseAmplitude;
      
      points += `${i * 6},${baseBrightness + noise} `;
    }
    return points;
  };

  return (
    <div style={{ background: '#0b132b', color: '#fff', padding: '2rem', borderRadius: '12px', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#4facfe', marginTop: 0 }}>Exoplanet Hunter Module</h2>
      <p>Filter deep space cosmic noise using Lunar Compute.</p>

      {/* The Visual Graph */}
      <div style={{ background: '#1c2541', height: '150px', margin: '2rem 0', border: '1px solid #3a506b', position: 'relative' }}>
        <svg width="100%" height="100%" viewBox="0 0 600 150" preserveAspectRatio="none">
          <polyline 
            points={generateLightCurve()} 
            fill="none" 
            stroke={isDiscovered ? "#4facfe" : "#5bc0be"} 
            strokeWidth="3" 
          />
        </svg>
      </div>

      {/* The Controls */}
      <div>
        <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 'bold' }}>
          Lunar Compute Allocation: {compute}%
        </label>
        <input 
          type="range" 
          min="10" 
          max="100" 
          value={compute} 
          onChange={(e) => setCompute(e.target.value)}
          style={{ width: '100%', cursor: 'pointer' }}
        />
      </div>

      {/* The Results Dashboard */}
      <div style={{ marginTop: '2rem', padding: '1rem', background: isDiscovered ? '#1a365d' : '#2b2d42', borderRadius: '8px' }}>
        <h3>Status: {isDiscovered ? '🚀 EXOPLANET CONFIRMED' : 'Processing Raw Telemetry...'}</h3>
        {isDiscovered && (
          <p style={{ color: '#4facfe' }}>Atmospheric Analysis: H2O and CH4 signatures detected.</p>
        )}
      </div>
    </div>
  );
}