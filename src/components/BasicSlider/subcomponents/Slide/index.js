import React, { useRef, useEffect } from 'react';

export default function Slide({ getHeight, currentSlide, i, img, logo, copy, title, twoColumns }) {
  const slide = useRef(null);

  useEffect(() => {
    if (currentSlide === i) {
      getHeight(slide);
    }
  }, [currentSlide]);


  return (
    <div
      ref={slide}
      className={`basic-slider__item ${
        currentSlide === i ? 'visible' : ''
      } ${i < currentSlide ? 'prev-slide' : ''}`}
    >
      <div className={`img-container ${!twoColumns ? 'img-container--headshot' : ''}`}>
        {img && <img className="img-photo" src={img} alt="company" />}
        {logo && <img className={`img-logo ${twoColumns ? 'img-logo--columns' : ''}`} src={logo} alt="company logo" />}
      </div>
      { twoColumns && <><div className="number">{ i + 1 }</div> <h3>{title}</h3></> }
      <div className="column-container" style={{ columns: `${twoColumns ? '2' : 'unset'}` }}>
        { !twoColumns && <><div className="number">{ i + 1 }</div><h3>{title}</h3></> }
        <p dangerouslySetInnerHTML={{ __html: copy }} />
      </div>
    </div>
  );
}
