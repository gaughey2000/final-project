import { NavLink } from "react-router";
import { useState } from "react";

function Navbar() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <>
            <nav className="bg-tertiary dark:bg-gray-900/100">
            {/* navbar logo */}
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://www.bibclinic.co.uk/wp-content/uploads/2017/06/bib_clinic_logo_grey.png" alt="BiB Clinic Logo" className="h-20 w-auto" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BiB Clinic</span>
                    </NavLink>
            {/*hamburger menu*/}
                    <div className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <i className="bx bx-menu text-5xl cursor-pointer"></i>
                        <div className={`absolute md:hidden top-24 left-0 w-full bg-tertiary flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100":"opacity-0"}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                            <NavLink to="/" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">HOME</NavLink>
                            <NavLink to="/procedures" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PROCEDURES</NavLink>
                            <NavLink to="/whyus" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">WHY US</NavLink>
                            <NavLink to="/contact" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT</NavLink>
                            <NavLink to="/book" className="py-3 px-8 bg-blue-400 text-white rounded-full font-light hover:bg-blue-500">BOOK NOW</NavLink>
                        </div>
                    </div>

            {/*navbar links*/}
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-tertiary md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-tertiary dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <NavLink to="/">
                                <li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">HOME</li>
                            </NavLink>
                            <NavLink to="/procedures">
                                <li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PROCEDURES</li>
                            </NavLink>
                            <NavLink to="/whyus">
                                <li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">WHY US</li>
                            </NavLink>
                            <NavLink to="/contact">
                                <li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT</li>
                            </NavLink>
                            <NavLink to="/book">
                                <li className="py-3 px-8 bg-primary text-gray-900 rounded-full font-light hover:bg-text-secondary">BOOK NOW</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;