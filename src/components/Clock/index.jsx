import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {};

const formatTime = (date) => {
  if (!date) return '';

  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
};

function Clock() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const newTimeString = formatTime(time);

      setTimeString(newTimeString);

      return () => {
        clearInterval(time);
      };
    }, 1000);
  });

  return <p style={{ fontSize: 42 }}>{timeString}</p>;
}

export default Clock;
