"use client";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { navLinks } from '@/lib/constants';
import NavLink from './NavLink';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site-config';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import SiteLogo from './SiteLogo';
import ThemeToggler from './ThemeToggler';


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;
        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 150);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ease-in-out ${isScrolling ? '-translate-y-full' : 'translate-y-0'} dark:bg-black`}
        >
            <div className="px-4 lg:px-32 xl:px-40 flex justify-between items-center">
                <Link href={siteConfig.links.home} className="flex items-center space-x-2">
                    <SiteLogo />
                </Link>
                <nav className="hidden lg:flex space-x-20 items-center">
                    {navLinks.map(({ name, link }) => (
                        <NavLink key={name} link={link} name={name} />
                    ))}
                </nav>
                <div className='flex items-center justify-center'>
                    <Button asChild className='hidden lg:block lg:text-lg'>
                        <Link href={""}>Contact us</Link>
                    </Button>
                    <ThemeToggler />
                </div>
                <button className="lg:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <IoClose size={24} /> : <BiMenu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden">
                    <nav className="px-4 py-4 flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out transform origin-top">
                        {navLinks.map(({ name, link }) => (
                            <NavLink key={name} link={link} name={name} />
                        ))}
                        <Button asChild>
                            <Link href={""}>Contact us</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
};


export default Header;
