"use client"
import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
      };

    return (
        <>
        <nav className="bg-gray-800 bg-gradient-to-r from-[#6a11cbe6] to-[#2575fce6] p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <div className="text-white text-2xl font-bold">Spectra</div>
                </Link>

                <div className="hidden font-semibold md:flex space-x-4">
                    <NavLink href="/" title="Home" />
                    <NavLink href="/AboutUS" title="About" />
                    <NavLink href="/Reso" title="Resources" />
                    <NavLink href="/ContactUs" title="Contact" />
                    <NavLink href="/Tools" title="Tools" />
                </div>

                <div className="md:hidden">
                    <button
                        className="text-white p-2 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                
            </div>
        </nav>
        {isMobileMenuOpen && (
            <div className="font-semibold top-full left-0 right-0 bg-gray-800 p-4 z-10">
                <div className="flex flex-col space-y-2">
                    <NavLink href="/" title="Home" onClick={toggleMobileMenu} />
                    <NavLink href="/AboutUS" title="About" onClick={toggleMobileMenu} />
                    <NavLink
                        href="/Reso"
                        title="Resources"
                        onClick={toggleMobileMenu}
                    />
                    <NavLink
                        href="/ContactUs"
                        title="Contact"
                        onClick={toggleMobileMenu}
                    />
                </div>
            </div>
        )}
        </>
    );
};

const NavLink = ({ href, title, onClick }) => (
    <Link href={href}>
        <div
            className="text-white hover:text-gray-300"
            onClick={onClick}
        >
            {title}
        </div>
    </Link>
);

export default NavBar;
