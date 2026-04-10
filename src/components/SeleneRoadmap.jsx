import { useState } from 'react';

export default function SeleneRoadmap() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 0,
      phase: "Phase I: Edge Era",
      years: "2040–2045",
      scale: "1–10 MW",
      objective: "Lunar Local Compute",
      details: "Primary use is processing local mining data and rover autonomy. Establishing the first 'Data Ark' for Earth backup. Deployment in Lunar Lava Tubes provides natural thermal stability and radiation protection.",
      tech: "NASA HPSC Processors"
    },
    {
      id: 1,
      phase: "Phase II: Training Era",
      years: "2045–2055",
      scale: "100 MW – 1 GW",
      objective: "Global AI Offloading",
      details: "Massive GPU clusters training 'Foundation Models' for Earth corporations. Data is beamed back via LunaNet (15+ Gb/s Earth-Moon laser links). Powered by Fission Surface Power (FSP) and 3D-printed regolith shielding.",
      tech: "Fission Surface Power"
    },
    {
      id: 2,
      phase: "Phase III: Planetary Era",
      years: "2055–2060+",
      scale: "5 GW+",
      objective: "The Solar System Hub",
      details: "Fully autonomous, self-repairing nodes. The Moon becomes the primary compute and 'Routing Hub' for Mars and Deep Space missions, completely untethered from Earth's civilian power grids.",
      tech: "Autonomous Self-Repair"
    }
  ];

  const pitchDeck = [
    { title: "The Vision", text: "Establishing the Moon as the solar system’s HPC hub, offloading Earth’s environmental burden while enabling deep-space autonomy." },
    { title: "Earth's Data Wall", text: "Terrestrial AI energy demands are competing with civilian grids, while liquid cooling reaches unsustainable ecological limits." },
    { title: "The Lunar Solution", text: "Passive radiative cooling into the 4K vacuum of space, combined with 24/7 solar abundance at the Peaks of Eternal Light." },
    { title: "Data Sovereignty", text: "Absolute physical security and data preservation in a location entirely beyond the reach of terrestrial conflict and regulatory risks." }
  ];

  return (
    <section style={{ padding: '6rem 2rem', background: '#020617', borderTop: '1px solid #1e293b' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Pitch Deck Grid */}
        <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#f8fafc', marginBottom: '1rem' }}>Project Selene-Compute</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '3rem' }}>Scaling AI Beyond the Terrestrial Ceiling</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {pitchDeck.map((item, index) => (
              <div key={index} style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155', textAlign: 'left' }}>
                <h4 style={{ color: '#38bdf8', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.5' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Roadmap */}
        <div>
          <h3 style={{ fontSize: '2rem', color: '#f8fafc', marginBottom: '2rem', textAlign: 'center' }}>Infrastructure Scaling Roadmap</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', md: {flexDirection: 'row'} }}>
            
            {/* Timeline Controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', background: '#0f172a', padding: '1rem', borderRadius: '50px', border: '1px solid #1e293b' }}>
              {phases.map((p) => (
                <button 
                  key={p.id}
                  onClick={() => setActivePhase(p.id)}
                  style={{
                    flex: 1, padding: '0.75rem 1rem', borderRadius: '40px', border: 'none', cursor: 'pointer', fontWeight: 'bold', transition: 'all 0.3s',
                    background: activePhase === p.id ? '#38bdf8' : 'transparent',
                    color: activePhase === p.id ? '#020617' : '#94a3b8'
                  }}
                >
                  {p.years}
                </button>
              ))}
            </div>

            {/* Active Phase Display */}
            <div style={{ background: '#0f172a', borderRadius: '16px', padding: '2.5rem', border: '1px solid #38bdf8', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, background: '#38bdf8', color: '#020617', padding: '0.5rem 1.5rem', borderBottomLeftRadius: '16px', fontWeight: 'bold' }}>
                {phases[activePhase].scale}
              </div>
              
              <h3 style={{ fontSize: '1.8rem', color: '#f8fafc', margin: '0 0 0.5rem 0' }}>{phases[activePhase].phase}</h3>
              <h4 style={{ color: '#38bdf8', fontSize: '1.2rem', margin: '0 0 1.5rem 0', textTransform: 'uppercase', letterSpacing: '1px' }}>{phases[activePhase].objective}</h4>
              
              <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                {phases[activePhase].details}
              </p>
              
              <div style={{ display: 'inline-block', background: '#1e293b', padding: '0.5rem 1rem', borderRadius: '8px', color: '#a5b4fc', fontSize: '0.9rem', border: '1px solid #312e81' }}>
                <strong>Key Technology:</strong> {phases[activePhase].tech}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}