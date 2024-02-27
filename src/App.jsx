import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isConfused, setIsConfused] = useState(true);

  setInterval(() => {
    setIsConfused((prevIsConfused) => !prevIsConfused);
  }, 3000); 

  return (
    <>
      <h1>I am confused: {String(isConfused)}</h1>
    </>
  );
}

export default App;
