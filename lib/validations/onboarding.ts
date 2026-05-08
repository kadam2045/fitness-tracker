import { z } from "zod";

export const step1Schema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const step2Schema = z.object({
  dob: z.string().min(1, "Date of birth is required"),
  gender: z.enum(["male", "female", "other", "prefer-not-to-say"], {
    message: "Please select a gender",
  }),
  height: z.number().min(50, "Height must be at least 50cm").max(250, "Height must be at most 250cm"),
  weight: z.number().min(20, "Weight must be at least 20kg").max(300, "Weight must be at most 300kg"),
  unit: z.enum(["metric", "imperial"]),
});

export const step3Schema = z.object({
  goals: z.array(z.string()).min(1, "Please select at least one goal").max(3, "You can select up to 3 goals"),
});

export const step4Schema = z.object({
  activityLevel: z.enum(["sedentary", "lightly-active", "moderately-active", "very-active", "athlete"], {
    message: "Please select an activity level",
  }),
});

export const step5Schema = z.object({
  avatar: z.any().optional(), // We'll handle file validation separately or as a string URL
  username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username must be at most 20 characters"),
  bio: z.string().max(160, "Bio must be at most 160 characters").optional(),
  notifications: z.boolean(),
});

export const onboardingSchema = z.object({
  ...step1Schema.shape,
  ...step2Schema.shape,
  ...step3Schema.shape,
  ...step4Schema.shape,
  ...step5Schema.shape,
});

export type OnboardingData = z.infer<typeof onboardingSchema>;
export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;
export type Step4Data = z.infer<typeof step4Schema>;
export type Step5Data = z.infer<typeof step5Schema>;
