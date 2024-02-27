import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isConfused, setIsConfused] = useState(true);

  useEffect(() => {
    const stateOfMind = () => {
      setInterval(() => {
        setIsConfused((IsConfused) => !IsConfused);
      }, 3000); 
    };

    stateOfMind();
  }, []); 

  return (
    <>
      <h1>I am confused: {String(isConfused)}</h1>
    </>
  );
}

export default App;
