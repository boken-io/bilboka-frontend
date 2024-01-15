'use client';

import './ground.css';

export default function Ground() {
  return (
    <div className="fixed bottom-0 container">
      <div className="country-wrap min-h-screen">
        <div className="grass" />
        <div className="street">
          <div className="car">
            <div className="car-body">
              <div className="car-top-back">
                <div className="back-curve" />
              </div>
              <div className="car-gate" />
              <div className="car-top-front">
                <div className="wind-sheild" />
              </div>
              <div className="bonet-front" />
              <div className="stepney" />
            </div>
            <div className="boundary-tyre-cover">
              <div className="boundary-tyre-cover-back-bottom" />
              <div className="boundary-tyre-cover-inner" />
            </div>
            <div className="tyre-cover-front">
              <div className="boundary-tyre-cover-inner-front" />
            </div>
            <div className="base-axcel" />
            <div className="front-bumper" />
            <div className="tyre">
              <div className="gap" />
            </div>
            <div className="tyre front">
              <div className="gap" />
            </div>
            <div className="car-shadow" />
          </div>
        </div>
        <div className="street-stripe" />
        <div className="hill" />
      </div>
    </div>
  );
}
