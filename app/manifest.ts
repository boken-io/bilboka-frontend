import { siteConfig } from '@/config/site';
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#040507',
    theme_color: '#040507',
    icons: [
      {
        src: '/apple-icon',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  };
}
