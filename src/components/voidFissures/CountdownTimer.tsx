import { useState, useEffect } from 'react';

export default function CountdownTimer({ expiry }: { expiry: string }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(expiry));

  useEffect(() => {
    if (timeLeft.total <= 0) return;

    const interval = setInterval(() => {
      const remaining = getTimeRemaining(expiry);
      setTimeLeft(remaining);
      if (remaining.total <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [expiry, timeLeft.total]);

  if (timeLeft.total <= 0) {
    return <span className="text-red-400">Expired</span>;
  }

  return (
    <span className="text-[10px] italic text-gray-400">
      {String(timeLeft.hours).padStart(2, '0')}:
      {String(timeLeft.minutes).padStart(2, '0')}:
      {String(timeLeft.seconds).padStart(2, '0')}
    </span>
  );
}

function getTimeRemaining(endtime: string) {
  const total = Date.parse(endtime) - Date.now();
  const totalSeconds = Math.floor(total / 1000);

  const hours = Math.max(0, Math.floor(totalSeconds / 3600));
  const minutes = Math.max(0, Math.floor((totalSeconds % 3600) / 60));
  const seconds = Math.max(0, totalSeconds % 60);

  return { total, hours, minutes, seconds };
}
