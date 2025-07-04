import React from 'react';
import Waves from './components/Waves/Waves.jsx';

console.log("Waves component:", Waves);

function App() {
  return (
    <div className="landing-background">
      <Waves
        lineColor="#FF4E27"
        backgroundColor="rgba(11, 2, 25, 1)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />

      {/* This is your MP4 noise overlay */}
      <video
        className="noise-overlay"
        src="/Overlay_WebCompatible_1.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

    </div>
  );
}

export default App;
