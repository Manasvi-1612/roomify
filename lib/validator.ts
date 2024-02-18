import * as z from "zod"

export const eventFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    firstName: z.string().min(3, 'First Name must be at least 3 characters'),
    lastName: z.string().min(3, 'Last Name must be at least 3 characters'),
})

export const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
})