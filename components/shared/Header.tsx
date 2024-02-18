'use client'

import Image from "next/image"
import Link from "next/link"
import NavItems from "@/components/shared/NavItems"
import MobileNav from "@/components/shared/MobileNav"
import Login from "./Login"
import Signup from "./Signup"
import { getToken } from "@/lib/actions/user.actions"
import { Button } from "../ui/button"
import Logout from "./Logout"
import { useEffect, useState } from "react"


const Header = () => {
  const [token, setToken] = useState(false)

  const checkToken = async () => {
    const token = await getToken()
    console.log(token)
    if (token) {
      setToken(true)
    }
  }

  useEffect(() => {
    checkToken()
  }, [])

  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="flex gap-2">
          <Image src="/assets/images/logo.png" alt="Events" width={38} height={38} />
          <h2 className="p-semibold-26">Roomify</h2>
        </Link>

        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>
        <div className="flex w-32 justify-end gap-3">
          <MobileNav />

          {token ? (
            <Logout />
          ) : (
            <div className="flex gap-3">
              <Button className="rounded-full" size={'lg'}>
                <Login />
              </Button>
              <Signup />
            </div>
          )}

        </div>
      </div>
    </header>
  )
}

export default Header
