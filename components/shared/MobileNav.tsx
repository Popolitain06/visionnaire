'use client'
import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { UserButton } from "@clerk/nextjs";
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { navLinks } from '@/constants'


const MobileNav = () => {

  const pathname = usePathname();

  return (
    <header className='header'>
      <Link href='/' className='flrx items-center gap-2 md:py-2'>
        <Image
        src="/logo-text.png" 
        alt="logo"
        width={180}
        height={28}/>
      </Link>

      <nav className='flex gap-2'>

        <SignedIn>
          <UserButton afterSignOutUrl='/'/>

            <Sheet>
              <SheetTrigger>
                <Image 
                src="/assets/icons/menu.svg" 
                alt="menu" 
                width={32} 
                height={32}
                className='cursor-pointer'/>

              </SheetTrigger>
              <SheetContent className='sheet-content' >
                <>
                  <Image src="/logo-text.png" alt='logo' width={152} height={23} />

                  <ul className="header-nav_elements">
                    {navLinks.slice(0, 6).map((link) => {
                      const isActive = link.route === pathname

                      return (
                        <li key={link.route} className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}>
                          <Link className="sidebar-link cursor-pointer" href={link.route}>
                            <Image 
                              src={link.icon}
                              alt="logo"
                              width={24}
                              height={24}
                            />
                            {link.label}
                          </Link>
                        </li>
                      )
                    })}
                 </ul>
                
                
                
                
                </>
              </SheetContent>
            </Sheet>



        </SignedIn>

        <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>




      </nav>
    </header>
  )
}

export default MobileNav