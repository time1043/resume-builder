import { ResumeValues } from "./validation/Resume";

export interface EditorFormProps {
  resumeData: ResumeValues;
  setResumeData: (
    data: ResumeValues | ((prev: ResumeValues) => ResumeValues)
  ) => void;
}
