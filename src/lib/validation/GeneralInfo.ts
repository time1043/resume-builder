import { z } from "zod";
import { optionalString } from ".";

export const generalInfoSchema = z.object({
  title: optionalString,
  description: optionalString,
});

export type GeneralInfoValues = z.infer<typeof generalInfoSchema>;
