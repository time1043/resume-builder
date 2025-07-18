import { ResumeValues } from "./validation/Resume";

// export interface EditorFormProps {
//   resumeData: ResumeValues;
//   setResumeData: (
//     data: ResumeValues | ((prev: ResumeValues) => ResumeValues)
//   ) => void;
// }

export interface EditorFormProps {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
}

// export const resumeDataInclude = {
//   workExperiences: true,
//   educations: true,
// } satisfies Prisma.ResumeInclude;

// export type ResumeServerData = Prisma.ResumeGetPayload<{
//   include: typeof resumeDataInclude;
// }>;
