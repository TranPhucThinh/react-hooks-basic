import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {};

const getRandomColor = () => {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const colorRandom = Math.trunc(Math.random() * 5);
  return COLOR_LIST[colorRandom];
};

function ColorBox() {
  const [color, setColor] = useState('deeppink');

  const handleClickBox = () => {
    const newColor = getRandomColor();
    setColor(newColor);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleClickBox}
    >
      COLOR BOX
    </div>
  );
}

export default ColorBox;
