export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Bilboken',
  description: 'Administrer drivstoff-priser',
  navItems: [
    {
      label: 'Biler',
      href: '/vehicles'
    },
    {
      label: 'Statistikk',
      href: '/stats'
    }
  ],
  navMenuItems: [
    {
      label: 'Biler',
      href: '/vehicles'
    },
    {
      label: 'Statistikk',
      href: '/stats'
    },
    {
      label: 'Logg ut',
      href: '/logout',
      color: 'danger'
    }
  ],
  links: {
    github: 'https://github.com/boken-io'
  }
};
