import { z } from "zod";
import { generalInfoSchema } from "./GeneralInfo";
import { personalInfoSchema } from "./PersonalInfo";

export const resumeSchema = z.object({
  ...generalInfoSchema.shape,
  ...personalInfoSchema.shape,
});

export type ResumeValues = Omit<z.infer<typeof resumeSchema>, "photo"> & {
  id?: string;
  photo?: File | string | null; // file -> url
};
