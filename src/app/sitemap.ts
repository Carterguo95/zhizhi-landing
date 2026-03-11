import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://zhizhi.one',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Future additions for static or dynamic routes can be added here
        // {
        //   url: 'https://zhizhi.one/docs',
        //   lastModified: new Date(),
        //   changeFrequency: 'monthly',
        //   priority: 0.8,
        // },
    ];
}
