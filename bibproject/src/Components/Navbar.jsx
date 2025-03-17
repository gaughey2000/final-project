import { NavLink } from "react-router";

function Navbar() {
    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://www.bibclinic.co.uk/wp-content/uploads/2017/06/bib_clinic_logo_grey.png" alt="BiB Clinic Logo" className="w-30 hover:scale-110 transition-all duration-300" />
            </div>
            <div>
                <ul className='hidden md:flex items-start gap-5 font-medium'>
                    <NavLink to="/">
                        <li className='py-1'>HOME</li>
                        <hr className="border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden" />
                    </NavLink>
                   
                    <NavLink to="/procedures">
                        <li className='py-1'>PROCEDURES</li>
                        <hr className="border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden" />
                    </NavLink>
                   
                    <NavLink to="/whyus">
                        <li className='py-1'>WHY US</li>
                        <hr className="border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden" />
                    </NavLink>

                    <NavLink to="/contact">
                        <li className='py-1'>CONTACT</li>
                        <hr className="border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden" />
                    </NavLink>
                    
                    <NavLink to="/book">
                        <li className='py-3 px-8 bg-blue-400 text-white rounded-full font-light hidden md:block hover:bg-blue-500'>BOOK NOW</li>
                    </NavLink>
                </ul>

            </div>
        </div>
    )
}

export default Navbar;