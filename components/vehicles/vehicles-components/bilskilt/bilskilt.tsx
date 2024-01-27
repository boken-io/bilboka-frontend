import styles from './bilskilt.module.css';

export default function BilskiltPage(props: { children: string }) {
  function addSpacing(tegnkombinasjon: string): string {
    return [tegnkombinasjon.slice(0, 2), ' ', tegnkombinasjon.slice(2)].join(
      ''
    );
  }

  return (
    <div
      className="dark:brightness-50"
      style={{ transform: 'scale(0.4)', transformOrigin: 'left' }}
    >
      <div className={styles.bilskilt}>
        <div className={styles.flagg}>
          <svg
            version="1.0"
            viewBox="0 0 213.33 469.33"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              transform="scale(-1,1)"
              x="-213.33"
              width="213.33"
              height="469.33"
              style={{ fill: '#039', strokeWidth: '1.0667' }}
            />
            <g
              transform="matrix(.97915 0 0 1.0213 -8 0)"
              style={{ fill: '#fff' }}
              aria-label="N"
            >
              <path
                d="m176.49 395.13h-31.048l-53.034-85.761v85.761h-29.538v-124.95h38.517l45.566 71.579v-71.579h29.538z"
                style={{ fill: '#fff', strokeWidth: '1.0667px' }}
              />
            </g>
            <rect
              x="23.645"
              y="62.481"
              width="165.92"
              height="120.67"
              style={{ fill: '#ef2b2d', strokeWidth: '1.0667' }}
            />
            <rect
              x="68.895"
              y="62.481"
              width="30.167"
              height="120.67"
              style={{ fill: '#fff', strokeWidth: '1.0667' }}
            />
            <rect
              x="23.645"
              y="107.73"
              width="165.92"
              height="30.167"
              style={{ fill: '#fff', strokeWidth: '1.0667' }}
            />
            <rect
              x="76.437"
              y="62.481"
              width="15.083"
              height="120.67"
              style={{ fill: '#002868', strokeWidth: '1.0667' }}
            />
            <rect
              x="23.645"
              y="115.27"
              width="165.92"
              height="15.083"
              style={{ fill: '#002868', strokeWidth: '1.0667' }}
            />
          </svg>
        </div>
        <div className={styles.kjennemerke}>{addSpacing(props.children)}</div>
      </div>
    </div>
  );
}
