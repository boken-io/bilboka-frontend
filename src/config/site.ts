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
  /* found at https://www.ios-resolution.com/
     - copy only the logical width and height values
  */
  resolutions: [
    { width: 430, height: 932, ratio: 3, device: 'iPhone 15 Pro Max' },
    { width: 393, height: 852, ratio: 3, device: 'iPhone 15 Pro' },
    { width: 430, height: 932, ratio: 3, device: 'iPhone 15 Plus' },
    { width: 393, height: 852, ratio: 3, device: 'iPhone 15' },
    { width: 1024, height: 1366, ratio: 2, device: 'iPad Pro (6th gen 12.9)' },
    { width: 834, height: 1194, ratio: 2, device: 'iPad Pro (6th gen 11)' },
    { width: 820, height: 1180, ratio: 2, device: 'iPad 10th gen' },
    { width: 428, height: 926, ratio: 3, device: 'iPhone 14 Plus' },
    { width: 430, height: 932, ratio: 3, device: 'iPhone 14 Pro Max' },
    { width: 393, height: 852, ratio: 3, device: 'iPhone 14 Pro' },
    { width: 390, height: 844, ratio: 3, device: 'iPhone 14' },
    { width: 375, height: 667, ratio: 2, device: 'iPhone SE 3rd gen' },
    { width: 820, height: 1180, ratio: 2, device: 'iPad Air (5th gen)' },
    { width: 744, height: 1133, ratio: 2, device: 'iPad Mini (6th gen)' },
    { width: 390, height: 844, ratio: 3, device: 'iPhone 13' },
    { width: 375, height: 812, ratio: 3, device: 'iPhone 13 mini' },
    { width: 428, height: 926, ratio: 3, device: 'iPhone 13 Pro Max' },
    { width: 390, height: 844, ratio: 3, device: 'iPhone 13 Pro' },
    { width: 810, height: 1080, ratio: 2, device: 'iPad 9th gen' },
    { width: 1024, height: 1366, ratio: 2, device: 'iPad Pro (5th gen 12.9)' },
    { width: 834, height: 1194, ratio: 2, device: 'iPad Pro (5th gen 11)' },
    { width: 820, height: 1180, ratio: 2, device: 'iPad Air (4th gen)' },
    { width: 390, height: 844, ratio: 3, device: 'iPhone 12' },
    { width: 375, height: 812, ratio: 3, device: 'iPhone 12 mini' },
    { width: 428, height: 926, ratio: 3, device: 'iPhone 12 Pro Max' },
    { width: 390, height: 844, ratio: 3, device: 'iPhone 12 Pro' },
    { width: 810, height: 1080, ratio: 2, device: 'iPad 8th gen' },
    { width: 375, height: 667, ratio: 2, device: 'iPhone SE 2nd gen' },
    { width: 1024, height: 1366, ratio: 2, device: 'iPad Pro (4th gen 12.9)' },
    { width: 834, height: 1194, ratio: 2, device: 'iPad Pro (4th gen 11)' },
    { width: 810, height: 1080, ratio: 2, device: 'iPad 7th gen' },
    { width: 414, height: 896, ratio: 3, device: 'iPhone 11 Pro Max' },
    { width: 375, height: 812, ratio: 3, device: 'iPhone 11 Pro' },
    { width: 414, height: 896, ratio: 2, device: 'iPhone 11' },
    { width: 320, height: 568, ratio: 2, device: 'iPod touch 7th gen' },
    { width: 768, height: 1024, ratio: 2, device: 'iPad Mini (5th gen)' },
    { width: 834, height: 1112, ratio: 2, device: 'iPad Air (3rd gen)' },
    { width: 1024, height: 1366, ratio: 2, device: 'iPad Pro (3rd gen 12.9)' },
    { width: 834, height: 1194, ratio: 2, device: 'iPad Pro (3rd gen 11)' },
    { width: 414, height: 896, ratio: 2, device: 'iPhone XR' },
    { width: 414, height: 896, ratio: 3, device: 'iPhone XS Max' },
    { width: 375, height: 812, ratio: 3, device: 'iPhone XS' },
    { width: 768, height: 1024, ratio: 2, device: 'iPad 6th gen' },
    { width: 375, height: 812, ratio: 3, device: 'iPhone X' },
    { width: 414, height: 736, ratio: 3, device: 'iPhone 8 Plus' },
    { width: 375, height: 667, ratio: 2, device: 'iPhone 8' },
    { width: 1024, height: 1366, ratio: 2, device: 'iPad Pro (2nd gen 12.9)' },
    { width: 834, height: 1112, ratio: 2, device: 'iPad Pro (2nd gen 10.5)' },
    { width: 768, height: 1024, ratio: 2, device: 'iPad 5th gen' },
    { width: 414, height: 736, ratio: 3, device: 'iPhone 7 Plus' },
    { width: 375, height: 667, ratio: 2, device: 'iPhone 7' },
    { width: 320, height: 568, ratio: 2, device: 'iPhone SE 1st gen' },
    { width: 768, height: 1024, ratio: 2, device: 'iPad Pro (1st gen 9.7”)' },
    { width: 1024, height: 1366, ratio: 2, device: 'iPad Pro (1st gen 12.9)' },
    { width: 414, height: 736, ratio: 3, device: 'iPhone 6s Plus' },
    { width: 375, height: 667, ratio: 2, device: 'iPhone 6s' },
    { width: 768, height: 1024, ratio: 2, device: 'iPad mini 4' },
    { width: 320, height: 568, ratio: 2, device: 'iPod touch 6th gen' },
    { width: 768, height: 1024, ratio: 2, device: 'iPad Air 2' },
    { width: 768, height: 1024, ratio: 2, device: 'iPad mini 3' },
    { width: 414, height: 736, ratio: 3, device: 'iPhone 6 Plus' },
    { width: 375, height: 667, ratio: 2, device: 'iPhone 6' },
    { width: 768, height: 1024, ratio: 2, device: 'iPad mini 2' },
    { width: 768, height: 1024, ratio: 2, device: 'iPad Air' },
    { width: 320, height: 568, ratio: 2, device: 'iPhone 5C' },
    { width: 320, height: 568, ratio: 2, device: 'iPhone 5S' },
    { width: 768, height: 1024, ratio: 2, device: 'iPad 4th gen' },
    { width: 768, height: 1024, ratio: 1, device: 'iPad mini' },
    { width: 320, height: 568, ratio: 2, device: 'iPod touch 5th gen' },
    { width: 320, height: 568, ratio: 2, device: 'iPhone 5' },
    { width: 768, height: 1024, ratio: 2, device: 'iPad 3rd gen' },
    { width: 320, height: 480, ratio: 2, device: 'iPhone 4S' },
    { width: 768, height: 1024, ratio: 1, device: 'iPad 2' },
    { width: 320, height: 480, ratio: 2, device: 'iPod touch 4th gen' },
    { width: 320, height: 480, ratio: 2, device: 'iPhone 4' },
    { width: 768, height: 1024, ratio: 1, device: 'iPad 1st gen' },
    { width: 320, height: 480, ratio: 1, device: 'iPod touch 3rd gen' },
    { width: 320, height: 480, ratio: 1, device: 'iPhone 3GS' },
    { width: 320, height: 480, ratio: 1, device: 'iPod touch 2nd gen' },
    { width: 320, height: 480, ratio: 1, device: 'iPhone 3G' },
    { width: 320, height: 480, ratio: 1, device: 'iPod touch 1st gen' },
    { width: 320, height: 480, ratio: 1, device: 'iPhone 1st gen' }
  ],
  links: {
    github: 'https://github.com/boken-io'
  }
};
