import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const books = defineCollection({
  loader: glob({ base: "./src/content/books", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.url(),
      usa: z.url(),
    }),
  }),
});

export const collections = { books };
