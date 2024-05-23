'use client'
import { navbarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { AlignJustify, X } from 'lucide-react';

interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className={cn('relative container mx-auto flex items-center justify-between p-8 shadow-sm  bg-white rounded-md', className)}>
            <div className='flex items-center gap-2'>
                <Image
                    src='/images/Icon.svg'
                    width={50}
                    height={50}
                    alt='logo'
                />
                <h2 className='font-bold text-2xl text-primary pt-5'>ProperLand</h2>
            </div>
            <div className='hidden md:flex gap-6 items-center'>
                {navbarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                    return (
                        <Link href={item.route} key={item.label} className='flex items-center'>
                            <p className={cn('text-2xl font-kufan text-content hover:text-primary', isActive && 'text-primary')}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}
            </div>
            <div className='hidden md:flex'>
                <Button size='lg'>Contact</Button>
            </div>
            <div className='md:hidden flex items-center'>
                <button onClick={toggleMenu} className={cn(
                    'p-3 rounded',
                    isOpen ? 'bg-secondary text-primary' : 'bg-primary text-white'
                )}>
                    {isOpen ? <X className='w-6 h-6' /> : <AlignJustify className='w-6 h-6' />}
                </button>
            </div>
            {isOpen && (
                <div className='absolute top-full left-0 w-full bg-white shadow-md md:hidden'>
                    <div className='flex flex-col items-center py-4'>
                        {navbarLinks.map((item) => {
                            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                            return (
                                <Link href={item.route} key={item.label} className='flex items-center py-2'>
                                    <p className={cn('text-lg font-semibold font-source hover:text-primary', isActive && 'text-primary')}>
                                        {item.label}
                                    </p>
                                </Link>
                            )
                        })}
                        <Button size='lg' className='mt-4'>Contact</Button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
