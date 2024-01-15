'use client';

import './sun-and-moon.css';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
export default function SunAndMoon() {
  const { theme } = useTheme();
  let isDark = theme === 'dark';
  let isLight = theme === 'light';

  console.log(isDark, isLight);

  return (
    <div
      className={clsx(
        isLight && 'day',
        'sun-and-moon fixed min-h-screen min-w-screen'
      )}
    >
      <div className="sun-and-moon-wrapper">
        <div className="nightbg"></div>
        <div className="zzz1"></div>
        <div className="zzz2"></div>
        <div className="zzz3"></div>
        <div className="planet">
          <div className="face">
            <div className="eye">
              <div className="eye-in"></div>
            </div>
            <div className="mouth"></div>
            <div className="eye">
              <div className="eye-in"></div>
            </div>
          </div>
        </div>
        <div className="star pos-star1"></div>
        <div className="star pos-star2"></div>
        <div className="star pos-star3"></div>
      </div>
    </div>
  );
}
