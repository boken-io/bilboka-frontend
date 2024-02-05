export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Bilboken',
  description: 'Administrer drivstoff-priser',
  protectedRoutes: ['/vehicles', '/stats'],
  navItems: [
    {
      label: 'Mine biler',
      href: '/vehicles'
    },
    {
      label: 'Statistikk',
      href: '/stats'
    }
  ],
  navMenuItems: [
    {
      label: 'Mine biler',
      href: '/vehicles'
    },
    {
      label: 'Statistikk',
      href: '/stats'
    },
    {
      label: 'Logg ut',
      href: '/api/auth/signout',
      color: 'danger'
    }
  ],
  resolutions: [
    { width: 430, height: 932, ratio: 3, orientation: 'landscape' },
    { width: 393, height: 852, ratio: 3, orientation: 'landscape' },
    { width: 428, height: 926, ratio: 3, orientation: 'landscape' },
    { width: 390, height: 844, ratio: 3, orientation: 'landscape' },
    { width: 375, height: 812, ratio: 3, orientation: 'landscape' },
    { width: 414, height: 896, ratio: 3, orientation: 'landscape' },
    { width: 414, height: 896, ratio: 2, orientation: 'landscape' },
    { width: 414, height: 736, ratio: 3, orientation: 'landscape' },
    { width: 375, height: 667, ratio: 2, orientation: 'landscape' },
    { width: 320, height: 568, ratio: 2, orientation: 'landscape' },
    { width: 1024, height: 1366, ratio: 2, orientation: 'landscape' },
    { width: 834, height: 1194, ratio: 2, orientation: 'landscape' },
    { width: 820, height: 1180, ratio: 2, orientation: 'landscape' },
    { width: 834, height: 1112, ratio: 2, orientation: 'landscape' },
    { width: 810, height: 1080, ratio: 2, orientation: 'landscape' },
    { width: 768, height: 1024, ratio: 2, orientation: 'landscape' },
    { width: 744, height: 1133, ratio: 2, orientation: 'landscape' },
    { width: 430, height: 932, ratio: 3, orientation: 'portrait' },
    { width: 393, height: 852, ratio: 3, orientation: 'portrait' },
    { width: 428, height: 926, ratio: 3, orientation: 'portrait' },
    { width: 390, height: 844, ratio: 3, orientation: 'portrait' },
    { width: 375, height: 812, ratio: 3, orientation: 'portrait' },
    { width: 414, height: 896, ratio: 3, orientation: 'portrait' },
    { width: 414, height: 896, ratio: 2, orientation: 'portrait' },
    { width: 414, height: 736, ratio: 3, orientation: 'portrait' },
    { width: 375, height: 667, ratio: 2, orientation: 'portrait' },
    { width: 320, height: 568, ratio: 2, orientation: 'portrait' },
    { width: 1024, height: 1366, ratio: 2, orientation: 'portrait' },
    { width: 834, height: 1194, ratio: 2, orientation: 'portrait' },
    { width: 820, height: 1180, ratio: 2, orientation: 'portrait' },
    { width: 834, height: 1112, ratio: 2, orientation: 'portrait' },
    { width: 810, height: 1080, ratio: 2, orientation: 'portrait' },
    { width: 768, height: 1024, ratio: 2, orientation: 'portrait' },
    { width: 744, height: 1133, ratio: 2, orientation: 'portrait' }
  ],
  links: {
    github: 'https://github.com/boken-io'
  }
};
