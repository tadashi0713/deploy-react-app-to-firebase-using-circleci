import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showText, setShowText] = useState(false)
  const onClick = () => setShowText(true)
  return (
    <div className="App">
      <button className="Button" onClick={onClick}>Click</button>
      { showText ? <p className="Text">Hello</p> : null }
    </div>
  );
}

export default App;
