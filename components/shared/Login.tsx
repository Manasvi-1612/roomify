'use client'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    // DialogAction
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"
import Link from "next/link"
import { useState } from "react"
import { Label } from "../ui/label"
import { useForm } from "react-hook-form"
import { eventDefaultValues } from "@/constants"
import { loginFormSchema } from "@/lib/validator"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import axios from "axios"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const Login = () => {

    const [active, setActive] = useState(false)

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: eventDefaultValues
    })

    const router = useRouter()


    async function onSubmit(values: z.infer<typeof loginFormSchema>) {
        try {
            const response = await axios.post("/api/users/signin", values);

            if (response) {
                form.reset()
                router.push("/profile")
                toast.success("Login successfully. Welcome 🔥")
            }
        } catch (error: any) {
            toast.error(`${error.message}`)
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>Login</div>
            </DialogTrigger>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <section className="grid grid-cols-2 place-items-center">
                        <DialogTitle className="cursor-pointer" onClick={() => setActive(false)}>Student</DialogTitle>
                        <DialogTitle className="cursor-pointer" onClick={() => setActive(true)}>Company</DialogTitle>
                    </section>

                    <div style={{ display: `${!active ? 'block' : 'none'}` }}>
                        <Label className="text-center block my-3">Login as a student</Label>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
                                <DialogClose>
                                    <Button type="submit" className="w-full my-6">
                                        Login
                                    </Button>
                                </DialogClose>
                            </form>
                        </Form>
                    </div>

                    <div style={{ display: `${active ? 'block' : 'none'}` }}>
                        <Label className="text-center block my-3">Login as a mentor</Label>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
                                <DialogClose>
                                    <Button type="submit" className="w-full my-6">
                                        Login
                                    </Button>
                                </DialogClose>
                            </form>
                        </Form>
                    </div>
                </DialogHeader>
                <label className="text-center block ">New to Roomify? Register (<Link href={'/sign-up'} className="text-blue-500 cursor-pointer"><DialogClose>Student</DialogClose></Link>  / <Link href={'/sign-up/company'} className="text-blue-500 cursor-pointer"><DialogClose>Company</DialogClose></Link>)
                </label>
            </DialogContent>
        </Dialog>
    )
}

export default Login
