'use client';

import './sun-and-moon.css';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

export default function SunAndMoon() {
  const { theme } = useTheme();
  let isDark = theme === 'dark';
  let isLight = theme === 'light';
  return (
    <div
      className={clsx(
        isLight && 'day',
        'sun-and-moon fixed min-h-screen min-w-screen'
      )}
    >
      <div className="sun-and-moon-wrapper">
        <div className="day_background" />
        <div className="clouds">
          <div className="cloud" />
          <div className="cloud" />
          <div className="cloud" />
          <div className="cloud" />
          <div className="cloud" />
        </div>
        <div className="stars">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
        <div className="planet">
          <div className="sleep-bubbles">
            <div className="zzz1" />
            <div className="zzz2" />
            <div className="zzz3" />
          </div>
          <div className="face">
            <div className="eye">
              <div className="eye-in" />
            </div>
            <div className="mouth" />
            <div className="eye">
              <div className="eye-in" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
