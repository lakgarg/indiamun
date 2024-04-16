import React, { useState, useEffect } from 'react';
import './OnDemand.css';

const OnDemand = () => {
  // Parse the query parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const text = urlParams.get('text') || 'Default Text';
  const nextLink = urlParams.get('nextLink') || '/';

  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = nextLink;
    }, 5000);

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => {
      clearTimeout(redirectTimeout);
      clearInterval(intervalId);
    };
  }, [nextLink]);

  return (
    <div className='OnDemand-container'>
      <h1>{text}</h1>
      <p>Redirecting to next page in {timeLeft} seconds...</p>
    </div>
  );
};

export default OnDemand;