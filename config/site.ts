export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Bilboken',
  description: 'Administrer drivstoff-priser',
  navItems: [
    {
      label: 'Hjem',
      href: '/'
    },
    {
      label: 'Biler',
      href: '/vehicles'
    },
    {
      label: 'Kontakt oss',
      href: '/contact'
    },
    {
      label: 'Slett meg',
      href: '/delete'
    },
    {
      label: 'Privacy Policy',
      href: '/privacy'
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
    github: 'https://github.com/nextui-org/nextui',
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui.org',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev'
  }
};
