import Confetti from "react-confetti";
import React, { useState, useRef, useEffect } from "react";
import style from "../styles/app.module.css";

export default function App() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);


  useEffect(() => {
    setHeight(500);
    setWidth(700);

    // Show confetti for 3 seconds
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 30000);
  }, []);

  return (
    <div className={style.container}>
      {showConfetti && (
        <Confetti numberOfPieces={50} width={width} height={height} />
      )}
      <h1 style={{color:'black', textAlign:'center'}}>hello</h1>
    </div>
  );
}
