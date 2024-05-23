'use client'
import { navbarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { cn } from '@/lib/utils';

const Navbar = () => {
    const pathname = usePathname();
  return (
    <nav className='container mx-auto flex justify-between p-7'>
        <div className='flex gap-2 p-5'>
            <Image
            src='/images/Icon.svg'
            width={40}
            height={40}
            alt='logo'
            />
            <h2 className='font-bold mt-6 text-xl text-primary'>ProperLand</h2>
        </div>
        <div className='flex gap-4'>
            {navbarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                return (
                 <Link href={item.route} key={item.label} className='flex items-center'>
                    <p className='text-lg font-semibold'>
                      {item.label}
                      </p>
                    </Link>
                  
                )
            })}
        </div>

    </nav>
  )
}

export default Navbar