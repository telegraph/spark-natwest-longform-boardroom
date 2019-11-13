import React, { useEffect, useState } from 'react';
import HeroSVG from '../svgs/HeroSVG';
import ReadMore from '../ReadMore';

import './style.scss';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // On mount
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="hero">
      <div className={`hero__content ${loaded ? 'visible' : ''}`}>
        <h1>
          View from the
          <br />
          boardroom
        </h1>
        <p>
          Research by NatWest  has pinpointed some of the biggest challenges and opportunities that mid-sized businesses face today. Amid rising political uncertainty and economic instability, how can different industries take steps to stay ahead?
        </p>
      </div>
      <div className={`hero__art ${loaded ? 'visible-art' : ''}`}>
        <HeroSVG />
      </div>
      <ReadMore content="Scroll to read on" />
    </div>
  );
}

export default Hero;
