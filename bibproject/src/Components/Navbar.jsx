import { NavLink } from "react-router";

function Navbar() {
    return (
        <div className="w-screen flex flex-wrap items-center justify-between mx-auto">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://www.bibclinic.co.uk/wp-content/uploads/2017/06/bib_clinic_logo_grey.png" alt="BiB Clinic Logo" className="w-30 hover:scale-110 transition-all duration-300" />
            </div>
            <div>
                <ul className='flex flex-row'>
                    <li className='p-8'><NavLink to="/">Home</NavLink></li>
                    <li className='p-8'><NavLink to="/procedures">Procedures</NavLink></li>
                    <li className='p-8'><NavLink to="/whyus">Why Us</NavLink></li>
                    <li className='p-8'><NavLink to="/contact">Contact</NavLink></li>
                    <li className='p-8'><NavLink to="/book">Book Now</NavLink></li>
                    <li className='p-8'><NavLink to="/voucher">Gift Vouchers</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;