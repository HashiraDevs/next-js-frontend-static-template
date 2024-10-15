import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { FiMail, FiPhone } from 'react-icons/fi';
import { BsFacebook, BsInstagram } from 'react-icons/bs';


const Footer = () => {
    return (
        <>
            <div className="bg-white h-auto flex flex-col items-center text-center lg:text-start justify-center w:h-dvh lg:flex-row gap-16 lg:justify-around lg:items-start p-8 md:p-16 border-t dark:bg-black">
                Footer
            </div>

            {/* Copyright Section */}
            <div className="w-full bg-gray-900 text-center text-white py-4 dark:bg-black">
                <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
        </>
    );
};

export default Footer;
