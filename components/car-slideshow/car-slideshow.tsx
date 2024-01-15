'use client';
import './slideshow.css';

export default function CarSlideshow() {
  return (
    <div className="fixed bottom-0 container">
      <div className="country-wrap min-h-screen">
        <div className="sun"></div>
        <div className="grass"></div>
        <div className="street">
          <div className="car">
            <div className="car-body">
              <div className="car-top-back">
                <div className="back-curve"></div>
              </div>
              <div className="car-gate"></div>
              <div className="car-top-front">
                <div className="wind-sheild"></div>
              </div>
              <div className="bonet-front"></div>
              <div className="stepney"></div>
            </div>
            <div className="boundary-tyre-cover">
              <div className="boundary-tyre-cover-back-bottom"></div>
              <div className="boundary-tyre-cover-inner"></div>
            </div>
            <div className="tyre-cover-front">
              <div className="boundary-tyre-cover-inner-front"></div>
            </div>
            <div className="base-axcel"></div>
            <div className="front-bumper"></div>
            <div className="tyre">
              <div className="gap"></div>
            </div>
            <div className="tyre front">
              <div className="gap"></div>
            </div>
            <div className="car-shadow"></div>
          </div>
        </div>
        <div className="street-stripe"></div>
        <div className="hill"></div>
      </div>
    </div>
  );
}
