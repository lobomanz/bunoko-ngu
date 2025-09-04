// PageWrapper.js
import React, { useEffect, useState } from 'react';
import './PageWrapper.css';

function PageWrapper({ children }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false); // start fade out
    const timeout = setTimeout(() => setActive(true), 50); // small delay to trigger fade in
    return () => clearTimeout(timeout);
  }, [children]); // re-run on page change

  return <div className={`page ${active ? 'active' : ''}`}>{children}</div>;
}

export default PageWrapper;
