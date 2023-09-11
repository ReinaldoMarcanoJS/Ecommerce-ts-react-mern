import { z } from "zod";

const registerSchema = z.object({
  name: z.string({
    required_error: "Username is required",
  }),
  lastname: z.string({
    required_error: "lastname is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "must be a valid e-mail address",
    }),
  password: z
    .string({
      required_error: "password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

const loginSchema = z.object({
  email: z
    .string({
      required_error: "email es required",
    })
    .email({
      message: "Email is not Invalid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

export { registerSchema, loginSchema };
