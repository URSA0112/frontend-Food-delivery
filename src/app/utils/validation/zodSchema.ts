import { z } from "zod";

export const formSchema = z.object({
    email: z.string()
        .min(4, { message: "Username must be at least 2 characters.", })
        .email({ message: "Invalid email address" }),
    password: z.string()
        .min(8, { message: "Must have at least 8 character" })
        .regex(/[^A-Za-z0-9]/, {
            message: "Password must include at least one special character",
        }),
    confirmPassword: z.string()
  })
    .refine((formSchema) => formSchema.password === formSchema.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"]
    });
  
  
  