import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Astro v5 Content Layer：Markdown 文件放在 src/content/blog/ */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default('随笔'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
