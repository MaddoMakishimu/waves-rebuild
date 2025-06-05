import React from 'react';
import Waves from './components/Waves/Waves.jsx';

console.log("Waves component:", Waves);

function App() {
  return (
    <div className="App">
      <h1>Testing Waves Below</h1>
      <Waves
        lineColor="#ff009b"
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
    </div>
  );
}

export default App;
