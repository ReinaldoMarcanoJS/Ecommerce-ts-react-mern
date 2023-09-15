"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
const registerSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Username is required",
    }),
    lastname: zod_1.z.string({
        required_error: "lastname is required",
    }),
    email: zod_1.z
        .string({
        required_error: "Email is required",
    })
        .email({
        message: "must be a valid e-mail address",
    }),
    password: zod_1.z
        .string({
        required_error: "password is required",
    })
        .min(6, {
        message: "Password must be at least 6 characters",
    }),
});
exports.registerSchema = registerSchema;
const loginSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: "email es required",
    })
        .email({
        message: "Email is not Invalid",
    }),
    password: zod_1.z
        .string({
        required_error: "Password is required",
    })
        .min(6, {
        message: "Password must be at least 6 characters",
    }),
});
exports.loginSchema = loginSchema;
