import Link from "next/link";
import NavLink from "./NavLink/NavLink";

function NavBar() {
    return (
        <>
            <nav className="bg-amber-950 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Spectra Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Spectra</span>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul
                            className="font-semibold flex flex-col p-0 md:p-0 mt-0 border border-gray-100 rounded-lg bg-gray-950 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>


                                <Link href="/"
                                    className="block py-2 px-3 text-gray-100 bg-blue-700 rounded md:bg-transparent md:text-blue-100 md:p-0 dark:text-white md:dark:text-blue-500"
                                    aria-current="page">Home</Link>


                            </li>
                            <li>

                                <NavLink path="/AboutUs" title="AboutUs" />

                            </li>
                            <li>
                                <NavLink path="/Resources" title="Resources" />

                            </li>

                            <li>
                                <NavLink path="/ContactUs" title="Contactus" />

                            </li>
                        </ul>
                    </div>
                </div>
            </nav >



        </>
    );
}

export default NavBar;