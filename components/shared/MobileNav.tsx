import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems"


const MobileNav = () => {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className="align-middle">
                    <Image src="assets/icons/menu.svg" alt="menu" width={24} height={24} />
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white">
                    <Image src="assets/images/logo.svg" alt="Events" width={128} height={38} />
                    <Separator className="border border-gray-500" />
                    <NavItems />
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav
