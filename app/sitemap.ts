import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.AUTH_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: `${process.env.AUTH_URL}/delete`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5
    },
    {
      url: `${process.env.AUTH_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5
    },
    {
      url: `${process.env.AUTH_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7
    }
  ];
}
