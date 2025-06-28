import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EditorFormProps } from "@/lib/types";
import { ResumeValues } from "@/lib/validation/Resume";
import {
  personalInfoSchema,
  PersonalInfoValues,
} from "@/lib/validation/PersonalInfo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useRef } from "react";
import { useForm } from "react-hook-form";

export default function PersonalInfoForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<PersonalInfoValues>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: resumeData.firstName || "",
      lastName: resumeData.lastName || "",
      jobTitle: resumeData.jobTitle || "",
      city: resumeData.city || "",
      country: resumeData.country || "",
      phone: resumeData.phone || "",
      email: resumeData.email || "",
    },
  });

  // 创建优化的更新函数，避免在每个字段中重复创建
  const updateResumeData = useCallback(
    (field: keyof PersonalInfoValues, value: any) => {
      setResumeData((prevData: ResumeValues) => ({
        ...prevData,
        [field]: value,
      }));
    },
    [setResumeData]
  );

  const photoInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="mx-auto max-w-xl space-y-6">
      {/* Title */}
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">Personal info</h2>
        <p className="text-sm text-muted-foreground">Tell us about yourself.</p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form className="space-y-3">
          {/* Form: Photo */}
          <FormField
            control={form.control}
            name="photo"
            render={({ field: { value, ...fieldValues } }) => (
              <FormItem>
                <FormLabel>Your photo</FormLabel>
                <div className="flex items-center gap-2">
                  <FormControl>
                    <Input
                      {...fieldValues}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        fieldValues.onChange(file);
                        updateResumeData("photo", file || null);
                      }}
                      ref={photoInputRef}
                    />
                  </FormControl>
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={() => {
                      fieldValues.onChange(null);
                      updateResumeData("photo", null);
                      if (photoInputRef.current) {
                        photoInputRef.current.value = "";
                      }
                    }}
                  >
                    Remove
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field: First Name, Last Name */}
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        updateResumeData("firstName", e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        updateResumeData("lastName", e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Field: Job Title */}
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      updateResumeData("jobTitle", e.target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field: City, Country */}
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        updateResumeData("city", e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        updateResumeData("country", e.target.value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Field: Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    onChange={(e) => {
                      field.onChange(e);
                      updateResumeData("phone", e.target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Field: Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    onChange={(e) => {
                      field.onChange(e);
                      updateResumeData("email", e.target.value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
