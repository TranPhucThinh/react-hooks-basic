import React from 'react';
import useClock from '../../hooks/useClock';

Clock.propTypes = {};

function Clock() {
  const { timeString } = useClock();

  return <p style={{ fontSize: 42 }}>{timeString}</p>;
}

export default Clock;
