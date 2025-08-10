
import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    abstract: z.string().optional(),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
  }),
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    body: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    synopsis: z.string().optional(),
    status: z.string().optional(),
    started: z.string().optional(),
    updated: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const library = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.enum(['book','film','anime','music','artist','article','game']).default('book'),
    title: z.string(),
    author: z.string().optional(),
    year: z.string().optional(),
    link: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    quotes: z.array(z.string()).optional(),
  }),
});

export const collections = { essays, notes, projects, library };
