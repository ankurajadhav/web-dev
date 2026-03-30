import React from 'react';

export function HospitalSVG({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 800 600" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Main Building Body */}
      <rect x="200" y="150" width="400" height="400" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.1" strokeWidth="2" />
      <rect x="150" y="250" width="100" height="300" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeOpacity="0.1" strokeWidth="2" />
      <rect x="550" y="250" width="100" height="300" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeOpacity="0.1" strokeWidth="2" />
      
      {/* Windows Grid */}
      {[...Array(8)].map((_, i) => (
        [...Array(6)].map((_, j) => (
          <rect 
            key={`${i}-${j}`}
            x={230 + j * 60} 
            y={180 + i * 45} 
            width="30" 
            height="25" 
            fill="currentColor" 
            fillOpacity="0.05" 
          />
        ))
      ))}
      
      {/* Entrance */}
      <rect x="350" y="480" width="100" height="70" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.2" />
      <line x1="400" y1="480" x2="400" y2="550" stroke="currentColor" strokeOpacity="0.2" />
      
      {/* Medical Cross */}
      <circle cx="400" cy="100" r="40" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
      <rect x="390" y="80" width="20" height="40" fill="currentColor" fillOpacity="0.3" />
      <rect x="380" y="90" width="40" height="20" fill="currentColor" fillOpacity="0.3" />
      
      {/* Helipad on side building */}
      <ellipse cx="600" cy="250" rx="40" ry="15" stroke="currentColor" strokeOpacity="0.1" />
      <text x="592" y="255" fill="currentColor" fillOpacity="0.2" fontSize="14" fontWeight="bold">H</text>
      
      {/* Decorative Lines */}
      <path d="M100 550 L700 550" stroke="currentColor" strokeOpacity="0.1" strokeWidth="4" />
      <path d="M200 150 L600 150" stroke="currentColor" strokeOpacity="0.1" strokeWidth="2" />
    </svg>
  );
}
