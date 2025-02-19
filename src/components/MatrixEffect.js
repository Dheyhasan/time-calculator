// Combined TypingEffect and MatrixEffect Component with white, smooth, and fast animations.

import React, { useEffect, useState } from 'react';
import styles from '../MatrixEffect.module.css';

function CombinedEffect() {
  const [matrixLines, setMatrixLines] = useState([]);

  useEffect(() => {
    const generateMatrixLines = () => {
      const linesArray = [];
      for (let i = 0; i < 7; i++) {
        const numbersArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 10));
        linesArray.push(numbersArray);
      }
      setMatrixLines(linesArray);
    };

    generateMatrixLines();
    const interval = setInterval(generateMatrixLines, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-32">
      {/* Typing Effect */}
      <div className="text-center text-white">
        <h1 className="text-3xl font-bold">
          I’m here to help you <br /> calculate your times!
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          Free to use. Easy to try. Just <br /> ask and Time AI can help with writing, <br /> learning, brainstorming, and more.
        </p>
      </div>

      {/* Smooth, Fast Matrix Effect */}
      <div className={styles.matrixContainer}>
        {matrixLines.map((line, index) => (
          <div key={index} className={styles.matrixLine}>
            {line.map((num, idx) => (
              <span key={idx} className={styles.matrixNumber}>{num}</span>
            ))}
            {line.map((num, idx) => (
              <span key={`dup-${idx}`} className={styles.matrixNumber}>{num}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CombinedEffect;
