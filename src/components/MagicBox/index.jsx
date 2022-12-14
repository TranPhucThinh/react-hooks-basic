import React from 'react';
import useMagicBox from '../../hooks/useMagicBox';
import './MagicBox.scss';

function MagicBox() {
  const color = useMagicBox();

  return <div className="magic-box" style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
