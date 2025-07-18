// schema (frontend / backend)
import { z } from "zod";

export const optionalString = z.string().trim().optional().or(z.literal(""));

export const optionalEmail = z
  .string()
  .trim()
  .email("Must be a valid email")
  .optional();

export const mustEmail = z.string().trim().email("Must be a valid email");

export const imageFile = z
  .custom<File | undefined>()
  .refine(
    (file) => !file || (file instanceof File && file.type.startsWith("image/")),
    "Must be an image file"
  )
  .refine(
    (file) => !file || file.size <= 1024 * 1024 * 4,
    "File size must be less than 4MB"
  );
