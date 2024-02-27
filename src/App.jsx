import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isConfused, setIsConfused] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsConfused((IsConfused) => !IsConfused);
    }, 3000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <>
      <h1>I am confused: {String(isConfused)}</h1>
    </>
  );
}

export default App;
