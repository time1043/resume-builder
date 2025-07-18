import { EditorFormProps } from "@/lib/types";
import GeneralInfoForm from "../forms/GeneralInfoForm";
import PersonalInfoForm from "../forms/PersonalInfoForm";

interface Step {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}

export const steps: Step[] = [
  { title: "General Info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal Info", component: PersonalInfoForm, key: "personal-info" },
  // {
  //   title: "Work experience",
  //   component: WorkExperienceForm,
  //   key: "work-experience",
  // },
  // { title: "Education", component: EducationForm, key: "education" },
  // { title: "Skills", component: SkillsForm, key: "skills" },
  // {
  //   title: "Summary",
  //   component: SummaryForm,
  //   key: "summary",
  // },
];
