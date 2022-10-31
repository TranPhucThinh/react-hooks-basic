import React, { useEffect, useRef, useState } from 'react';

const randomColor = (currentColor) => {
  const COLOR = ['red', 'blue', 'black', 'pink', 'violet'];

  const currentIndex = COLOR.indexOf(currentColor);
  let newIndex = currentIndex;

  while (newIndex === currentIndex) {
    newIndex = Math.trunc(Math.random() * 5);
  }

  return COLOR[newIndex];
};

function useMagicBox() {
  const [color, setColor] = useState('transparent');
  const colorRef = useRef('transparent');

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);

      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useMagicBox;
