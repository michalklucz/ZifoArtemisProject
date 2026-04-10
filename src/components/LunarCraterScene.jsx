import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Cylinder, Line, Text } from '@react-three/drei';
import * as THREE from 'three';

// Component to animate the power pulsing down the cable
function PowerPulse({ powerFlow }) {
  const pulseRef = useRef();
  
  useFrame((state) => {
    // Animate the pulse moving from Rim (high) to Floor (low)
    const time = state.clock.getElapsedTime();
    const speed = powerFlow / 20; 
    const position = (time * speed) % 1;
    
    // Lerp between Rim position [0, 6, -4] and Floor position [0, -2, 4]
    const x = 0;
    const y = 6 - (8 * position);
    const z = -4 + (8 * position);
    
    if (pulseRef.current) {
      pulseRef.current.position.set(x, y, z);
    }
  });

  return (
    <mesh ref={pulseRef}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshBasicMaterial color="#38bdf8" toneMapped={false} />
    </mesh>
  );
}

export default function LunarCraterScene() {
  const [powerFlow, setPowerFlow] = useState(50);

  return (
    <div style={{ width: '100%', padding: '2rem 0' }}>
      
      {/* 3D Canvas Container */}
      <div style={{ height: '600px', background: '#000', borderRadius: '16px', position: 'relative', overflow: 'hidden', border: '1px solid #1e293b' }}>
        
        {/* HUD Overlay */}
        <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10, background: 'rgba(15, 23, 42, 0.8)', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155', color: 'white', backdropFilter: 'blur(4px)' }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#38bdf8' }}>Lunar South Pole: Shackleton</h3>
          <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>☀️ Rim Surface Temp: <strong style={{color: '#facc15'}}>+102°C</strong></p>
          <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.9rem' }}>❄️ Floor Ambient: <strong style={{color: '#60a5fa'}}>-230°C</strong></p>
          
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>
            Active Power Transmission: {powerFlow} MW
          </label>
          <input 
            type="range" min="10" max="100" value={powerFlow} 
            onChange={(e) => setPowerFlow(e.target.value)}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>

        {/* The 3D Scene */}
        <Canvas shadows camera={{ position: [12, 8, 12], fov: 45 }}>
          {/* Deep space background */}
          <color attach="background" args={['#02040a']} />
          
          {/* Ambient star light (very dim) */}
          <ambientLight intensity={0.05} />
          
          {/* The Sun: Grazing light at a 1.5-degree angle to create deep shadows */}
          <directionalLight position={[20, 1.5, -5]} intensity={2.5} castShadow shadow-bias={-0.0001} />

          {/* CRATER RIM (Illuminated) */}
          <Box position={[0, 4, -6]} args={[15, 4, 6]} receiveShadow castShadow>
            <meshStandardMaterial color="#888888" roughness={0.9} />
          </Box>
          <Text position={[0, 6.5, -6]} color="white" fontSize={0.5} rotation={[0, 0, 0]}>Peaks of Eternal Light</Text>
          
          {/* Solar Arrays on the Rim */}
          <Cylinder position={[-2, 6.5, -5]} args={[1.5, 1.5, 0.1, 16]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <meshStandardMaterial color="#1e3a8a" metalness={0.8} />
          </Cylinder>
          <Cylinder position={[2, 6.5, -5]} args={[1.5, 1.5, 0.1, 16]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <meshStandardMaterial color="#1e3a8a" metalness={0.8} />
          </Cylinder>

          {/* CRATER FLOOR (Permanent Shadow) */}
          <Box position={[0, -3, 4]} args={[15, 2, 10]} receiveShadow>
            <meshStandardMaterial color="#444444" roughness={1} />
          </Box>
          <Text position={[0, -1.8, 8]} color="#60a5fa" fontSize={0.4} rotation={[-Math.PI/4, 0, 0]}>Region of Permanent Shadow</Text>

          {/* Data Center Modules on the Floor */}
          <Box position={[-1, -1.5, 4]} args={[1.5, 1, 3]} receiveShadow>
             <meshStandardMaterial color="#1e293b" />
             {/* Power Indicator Light */}
             <pointLight position={[0, 0.6, 0]} intensity={powerFlow / 20} color="#38bdf8" distance={2} />
          </Box>
          <Box position={[1.5, -1.5, 4]} args={[1.5, 1, 3]} receiveShadow>
             <meshStandardMaterial color="#1e293b" />
             <pointLight position={[0, 0.6, 0]} intensity={powerFlow / 20} color="#38bdf8" distance={2} />
          </Box>

          {/* Transmission Cable running down the crater wall */}
          <Line 
            points={[[0, 6, -4], [0, -2, 4]]} 
            color="#475569" 
            lineWidth={3} 
          />

          {/* Animated Power Flow */}
          <PowerPulse powerFlow={powerFlow} />

          {/* Camera Controls allowing the user to pan around */}
          <OrbitControls maxPolarAngle={Math.PI / 2 - 0.1} minDistance={5} maxDistance={25} />
        </Canvas>
      </div>
    </div>
  );
}