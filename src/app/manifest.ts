import { siteConfig } from '@/config/site';
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#040507',
    theme_color: '#040507',
    icons: []
  };
}
