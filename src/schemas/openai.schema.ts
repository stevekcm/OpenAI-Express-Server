import { z } from "zod";

export const completeSchema = z
  .object({
    model: z.string().max(256).default("text-davinci-003"),
    prompt: z.string().max(1024),
  })
  .strict();

export const retrieveSchema = z
  .object({
    model: z.string().max(256),
  })
  .strict();

export type Complete = z.infer<typeof completeSchema>;
export type Retrieve = z.infer<typeof retrieveSchema>;
