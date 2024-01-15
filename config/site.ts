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
    }
  ],
  links: {
    github: 'https://github.com/boken-io'
  }
};
