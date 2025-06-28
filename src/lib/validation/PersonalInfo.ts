import { z } from "zod";
import { imageFile, optionalString } from "./type";

export const personalInfoSchema = z.object({
  photo: imageFile,
  firstName: optionalString,
  lastName: optionalString,
  jobTitle: optionalString,
  city: optionalString,
  country: optionalString,
  phone: optionalString,
  email: optionalString,
});

export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;
