import React from 'react';

export default function LunarBenefits() {
  const benefits = [
    {
      id: 1,
      title: "Infinite Cryogenic Cooling",
      subtitle: "The Thermal Advantage",
      description: "Earth data centers consume billions of gallons of water and massive amounts of electricity just to prevent servers from melting. The floors of lunar polar craters exist in permanent shadow, maintaining a natural ambient temperature of -230°C. Cooling requires zero active energy.",
      metric: "Ambient Temp: -230°C",
      color: "#00b4d8"
    },
    {
      id: 2,
      title: "Uninterrupted Solar Power",
      subtitle: "The Energy Advantage",
      description: "By placing solar arrays on the 'Peaks of Eternal Light'—the rims of polar craters—we can harvest unfiltered, continuous solar energy 24/7, 365 days a year. No clouds, no atmosphere, and no night cycle means endless zero-carbon power.",
      metric: "Energy Uptime: 99.99%",
      color: "#ffd166"
    },
    {
      id: 3,
      title: "Vacuum Preservation",
      subtitle: "The Hardware Advantage",
      description: "Without oxygen, moisture, or atmospheric dust, hardware degradation is fundamentally altered. Server components do not rust or suffer from terrestrial humidity. Once shielded from radiation beneath a layer of lunar regolith, servers have a vastly extended operational lifespan.",
      metric: "Atmospheric Interference: 0%",
      color: "#ef476f"
    },
    {
      id: 4,
      title: "Unhindered Hyperscale",
      subtitle: "The Spatial Advantage",
      description: "Terrestrial AI scaling is bottlenecked by a lack of land and power grid capacity near human populations. The Moon provides boundless, uninhabited real estate, allowing humanity to scale computational infrastructure without competing for Earth's vital ecological resources.",
      metric: "Ecological Impact: Zero",
      color: "#06d6a0"
    }
  ];

  return (
    <section style={{ padding: '4rem 0', overflow: 'hidden' }}>
      <div style={{ padding: '0 2rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0' }}>Why the Moon?</h2>
        <p style={{ color: '#a0aec0', fontSize: '1.2rem', lineHeight: '1.6' }}>
          Solving Earth's greatest AI bottlenecks by moving compute off-world. Swipe or scroll horizontally to explore the strategic advantages.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        gap: '2rem',
        padding: '2rem',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
      }}>
        {benefits.map((benefit) => (
          <div 
            key={benefit.id} 
            style={{
              minWidth: '350px',
              maxWidth: '400px',
              backgroundColor: '#1c2541',
              borderRadius: '16px',
              padding: '2.5rem',
              scrollSnapAlign: 'center',
              borderTop: `4px solid ${benefit.color}`,
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h4 style={{ color: benefit.color, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', margin: '0 0 1rem 0' }}>
                {benefit.subtitle}
              </h4>
              <h3 style={{ fontSize: '1.8rem', margin: '0 0 1rem 0', lineHeight: '1.2' }}>
                {benefit.title}
              </h3>
              <p style={{ color: '#cbd5e1', lineHeight: '1.6', fontSize: '1rem' }}>
                {benefit.description}
              </p>
            </div>
            
            <div style={{ 
              marginTop: '2rem', 
              padding: '1rem', 
              backgroundColor: '#0b132b', 
              borderRadius: '8px',
              borderLeft: `3px solid ${benefit.color}`
            }}>
              <strong style={{ fontFamily: 'monospace', color: '#fff' }}>{benefit.metric}</strong>
            </div>
          </div>
        ))}
        {/* Spacer to allow scrolling past the last card nicely */}
        <div style={{ minWidth: '2rem' }}></div>
      </div>
    </section>
  );
}