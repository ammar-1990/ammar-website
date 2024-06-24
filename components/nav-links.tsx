'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {}

const NavLinks = (props: Props) => {
    const pathname = usePathname()

    const links = [
        {
            Label:"Portfolio",
            href:'/portfolio',
                 active:pathname === '/services'
        },
        {
            Label:"Services",
            href:'/services',
            active:pathname === '/portfolio'
        },
        {
            Label:"About",
            href:'/about',
            active:pathname === '/about'
        },

    ]


  return (
    <nav className="hidden md:block">
        <ul className="flex items-center gap-24">
            {links.map((link)=><li key={link.Label}><Link className="font-semibold tracking-wider text-sm  transition"  href={link.href}>{link.Label}</Link></li>)}
        </ul>
    </nav>
  )
}

export default NavLinks