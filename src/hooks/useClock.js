import { useEffect, useState } from 'react';

const formatTime = (date) => {
  if (!date) return '';

  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);

  return `${hours}:${minutes}:${seconds}`;
};

function useClock() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const time = setInterval(() => {
      const now = new Date();
      const newTimeString = formatTime(now);

      setTimeString(newTimeString);
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return { timeString };
}

export default useClock;
