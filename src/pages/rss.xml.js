
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('essays');
  return rss({
    title: 'Does Not Compute — Essays',
    description: 'Research and reflections on systems, collapse, and what comes after.',
    site: context.site,
    items: posts.map((p) => ({
      link: `/essays/${p.slug}/`,
      title: p.data.title,
      pubDate: new Date(p.data.date),
      description: p.data.abstract || ''
    })),
  });
}
