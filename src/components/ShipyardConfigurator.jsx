import React, { useState, useEffect } from 'react';

export default function ShipyardConfigurator() {
  const [shipType, setShipType] = useState('science');
  const [progress, setProgress] = useState(0);
  const [isBuilding, setIsBuilding] = useState(false);

  const shipData = {
    science: { name: "Astra-1 (Deep Space Lab)", components: ["Sensor Array", "Fusion Core", "Zifo AI Module"], color: "#38bdf8" },
    industrial: { name: "Terra-Hauler (Mining Vessel)", components: ["Excavation Drills", "Heavy Shielding", "Cargo Hold"], color: "#fbbf24" },
    exploration: { name: "Odyssey (Crewed Explorer)", components: ["Habitation Ring", "Life Support", "Thermal Radiators"], color: "#f87171" }
  };

  useEffect(() => {
    let interval;
    if (isBuilding && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 1, 100));
      }, 50);
    } else {
      setIsBuilding(false);
    }
    return () => clearInterval(interval);
  }, [isBuilding, progress]);

  const handleBuild = () => {
    setProgress(0);
    setIsBuilding(true);
  };

  return (
    <div style={{ background: '#0f172a', padding: '3rem', borderRadius: '20px', border: '1px solid #334155', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
      <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1.5rem' }}>Lunar Gantry: Construction Hub</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        
        {/* Selection Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p style={{ color: '#94a3b8' }}>Select a Zifo-branded hull to initiate crater-side assembly:</p>
          {Object.keys(shipData).map((key) => (
            <button
              key={key}
              onClick={() => { setShipType(key); setProgress(0); }}
              style={{
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #1e293b',
                cursor: 'pointer',
                textAlign: 'left',
                background: shipType === key ? '#1e293b' : 'transparent',
                color: shipType === key ? shipData[key].color : '#94a3b8',
                fontWeight: 'bold',
                transition: '0.2s'
              }}
            >
              {shipData[key].name}
            </button>
          ))}
          
          <button 
            onClick={handleBuild}
            disabled={isBuilding}
            style={{
              marginTop: '1rem',
              padding: '1.2rem',
              borderRadius: '8px',
              border: 'none',
              background: shipData[shipType].color,
              color: '#020617',
              fontWeight: 'bold',
              cursor: 'pointer',
              opacity: isBuilding ? 0.5 : 1
            }}
          >
            {isBuilding ? 'ASSEMBLING...' : 'INITIATE CONSTRUCTION'}
          </button>
        </div>

        {/* Visual Gantry Status */}
        <div style={{ background: '#020617', padding: '2rem', borderRadius: '12px', border: '1px dashed #334155', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Structural Integrity</span>
              <span style={{ color: shipData[shipType].color, fontSize: '0.8rem' }}>{progress}%</span>
            </div>
            <div style={{ height: '8px', width: '100%', background: '#1e293b', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${progress}%`, background: shipData[shipType].color, transition: 'width 0.1s linear' }}></div>
            </div>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <h4 style={{ color: '#fff', fontSize: '1rem', margin: '0 0 0.5rem 0' }}>Manifest Modules:</h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#94a3b8', fontSize: '0.9rem' }}>
              {shipData[shipType].components.map((c, i) => (
                <li key={i} style={{ marginBottom: '0.3rem', color: progress > (i+1)*30 ? '#fff' : '#475569' }}>
                  {progress > (i+1)*30 ? '✅' : '⏳'} {c}
                </li>
              ))}
            </ul>
          </div>
          
          {progress === 100 && (
            <div style={{ marginTop: '1.5rem', textAlign: 'center', color: shipData[shipType].color, fontWeight: 'bold', animation: 'pulse 2s infinite' }}>
              READY FOR LAUNCH
            </div>
          )}
        </div>
      </div>
    </div>
  );
}