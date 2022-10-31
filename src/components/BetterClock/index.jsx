import React from 'react';
import useClock from '../../hooks/useClock';
import './styles.scss';

BetterClock.propTypes = {};

function BetterClock() {
  const { timeString } = useClock();

  return (
    <div className="better-clock">
      <div className="better-clock__time">{timeString}</div>
    </div>
  );
}

export default BetterClock;
