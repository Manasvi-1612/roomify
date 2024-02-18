'use client'
import axios from "axios";
import { Button } from "../ui/button"
import Link from "next/link"
import { redirect, useRouter } from "next/navigation";


const Logout = () => {
    const router = useRouter()
    async function handleClick() {
        try {
            const response = await axios.get("/api/users/logout");
            if (response) {
                router.refresh()
                router.push("/sign-up")
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
