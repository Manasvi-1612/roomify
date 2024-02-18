"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react";
import { eventFormSchema } from "@/lib/validator";
import { eventDefaultValues } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import Login from "./Login";
import toast from "react-hot-toast";

type FormProps = {
    role: "student" | "company"
}

const EventForm = (role: FormProps) => {

    const form = useForm<z.infer<typeof eventFormSchema>>({
        resolver: zodResolver(eventFormSchema),
        defaultValues: eventDefaultValues
    })

    async function onSubmit(values: z.infer<typeof eventFormSchema>) {

        try {
            const response = await axios.post("/api/users/signup", { values, role });

            if (response) {
                form.reset()
                toast.success("Signup successfully. Now login 🔥")
            }
        } catch (error: any) {
            toast.error(`${error.message}`)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 border-2 p-10 bg-white rounded-3xl">
                <div className="flex flex-col gap-5 md:flex-row">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input placeholder="Email" {...field} className="input-field" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl className="h-72">
                                    <Input type="password" placeholder="password" {...field} className="input-field" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                                        <Input placeholder="John" {...field} className="input-field" />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                                        <Input placeholder="Doe" {...field} className="input-field" />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    size="lg"
                    disabled={form.formState.isSubmitting}
                    className="button col-span-2 w-full"
                >{form.formState.isSubmitting ? (
                    'Signing up...'
                ) : `Signup`}</Button>

                <label className="flex-center gap-2 text-blue-600">
                    <p className="text-black">Already Registered ? </p>
                    <Login />
                </label>
            </form>
        </Form>
    )
}

export default EventForm

