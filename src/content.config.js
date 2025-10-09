import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '*.{md,mdx}',
    base: './src/content/blog'
  }),
  schema: () => z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    modDate: z.coerce.date().optional()
  })
});

export const collections = { blog };
