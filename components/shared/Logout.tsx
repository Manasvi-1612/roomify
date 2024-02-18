'use client'
import axios from "axios";
import { Button } from "../ui/button"
import Link from "next/link"
import { redirect, useRouter } from "next/navigation";
import useAuth from "@/context/useAuth";
import toast from "react-hot-toast";


const Logout = () => {
    const router = useRouter()

    const {setAuthStatus} = useAuth()

    async function handleClick() {
        try {
            const response = await axios.get("/api/users/logout");
            if (response) {
                router.refresh()
                router.push("/sign-up")
                setAuthStatus(false)
                toast.success("Logout successfully. Goodbye ✌️")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Button className="rounded-full" size={"lg"} onClick={handleClick}>
            Logout
        </Button>

    )
}

export default Logout
