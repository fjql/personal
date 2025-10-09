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

const ctfs = defineCollection({
  loader: glob({
    pattern: '*.{md,mdx}',
    base: './src/content/ctfs'
  }),
  schema: () => z.object({
    ctf: z.string(),
    chalTitle: z.string(),
    chalDesc: z.string()
  })
})

export const collections = { blog, ctfs };
