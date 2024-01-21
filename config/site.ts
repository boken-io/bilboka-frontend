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
  links: {
    github: 'https://github.com/boken-io'
  }
};
