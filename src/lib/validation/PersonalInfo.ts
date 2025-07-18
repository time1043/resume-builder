import { z } from "zod";
import { imageFile, optionalEmail, optionalString } from "./base";

export const personalInfoSchema = z.object({
  photo: imageFile,
  firstName: optionalString,
  lastName: optionalString,
  jobTitle: optionalString,
  city: optionalString,
  country: optionalString,
  phone: optionalString,
  email: optionalEmail,
});

export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;
