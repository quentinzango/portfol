import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.string().or(z.date()),
    img: z.string(),
    img_alt: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()),
    additionalImages: z.array(
      z.object({
        src: z.string(),
        alt: z.string().optional(),
      })
    ).optional(),
  }),
});

export const collections = { work };