import Link from "next/link"
import Image from "next/image"
import NavItems from "@/components/shared/NavItems"
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex gap-2">
            <Image src="/assets/images/logo.png" alt="Events" width={38} height={38} />
            <h2 className="p-semibold-26">Roomify</h2>
          </Link>

          <p className="text-grey-500 p-regular-14">Experience Efficient Collaboration <br /> Enjoy Ultimate Video Meeting App </p>

        </div>

        <div className="flex flex-col gap-5">
          <NavItems />
          <div className="flex-center gap-3">
            <p className="text-grey-500 p-regular-14">Follow us</p>
            <FaFacebook size={30} />
            <RiInstagramFill size={33} />
            <FaSquareXTwitter size={30}/>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
