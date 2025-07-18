"use client";

import { ResumeValues } from "@/lib/validation/Resume";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Breadcrumbs from "./_components/Breadcrumbs";
import Footer from "./_components/Footer";
import { steps } from "./_components/steps";

export default function ResumeEditor() {
  // form data - all
  const [resumeData, setResumeData] = useState<ResumeValues>({});

  // step
  const searchParams = useSearchParams();
  const currentStep = searchParams.get("step") || steps[0].key;

  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("step", key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`); // better than router.push
  }

  const FormComponent = steps.find(
    (step) => step.key === currentStep
  )?.component;

  return (
    <div className="flex grow flex-col">
      {/* Title */}
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your resume. Your progress will be
          saved automatically.
        </p>
      </header>

      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          {/* Left side */}
          <div className="w-full space-y-6 overflow-y-auto p-3 md:w-1/2">
            {/* <GeneralInfoForm /> */}
            <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />
            {FormComponent && (
              <FormComponent
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            )}
          </div>

          {/* Dividing line */}
          <div className="grow md:border-r" />

          {/* Right side */}
          <div className="hidden w-1/2 md:flex">
            <pre>{JSON.stringify(resumeData, null, 2)}</pre>
          </div>
        </div>
      </main>

      <Footer currentStep={currentStep} setCurrentStep={setStep} />
    </div>
  );
}
