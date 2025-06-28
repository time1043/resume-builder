import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EditorFormProps } from "@/lib/types";
import { ResumeValues } from "@/lib/validation/Resume";
import {
  generalInfoSchema,
  GeneralInfoValues,
} from "@/lib/validation/GeneralInfo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

export default function GeneralInfoForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<GeneralInfoValues>({
    resolver: zodResolver(generalInfoSchema),
    defaultValues: {
      title: resumeData.title || "",
      description: resumeData.description || "",
    },
  });

  // 创建优化的更新函数，避免在每个字段中重复创建
  const updateResumeData = useCallback(
    (field: keyof GeneralInfoValues, value: any) => {
      setResumeData((prevData: ResumeValues) => ({
        ...prevData,
        [field]: value,
      }));
    },
    [setResumeData]
  );

  return (
    <div className="mx-auto max-w-xl space-y-6">
      {/* Title */}
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">General info</h2>
        <p className="text-sm text-muted-foreground">
          This will not appear on your resume.
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form className="space-y-3">
          {/* Field: Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="My cool resume"
                    autoFocus
                    onChange={(e) => {
                      field.onChange(e);
                      updateResumeData("title", e.target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field: description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="A resume for next job"
                    onChange={(e) => {
                      field.onChange(e);
                      updateResumeData("description", e.target.value);
                    }}
                  />
                </FormControl>
                <FormDescription>
                  Describe what this resume is for.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
