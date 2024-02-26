import React, { useEffect } from 'react';
import './OnDemand.css';

const OnDemand = () => {
  // Parse the query parameters from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const text = urlParams.get('text') || 'Default Text';
  const nextLink = urlParams.get('nextLink') || '/';

  useEffect(() => {
    // Redirect after 5 seconds (5000 milliseconds)
    const redirectTimeout = setTimeout(() => {
      window.location.href = nextLink;
    }, 3000);

    // Clear timeout if the component is unmounted before redirection
    return () => clearTimeout(redirectTimeout);
  }, [nextLink]);

  return (
    <div className='OnDemand-container'>
      <h1>{text}</h1>
      <p>Redirecting to next page in 5 seconds...</p>
    </div>
  );
};

export default OnDemand;
