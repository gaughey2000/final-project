function Navbar() {
    return (
        <div className="w-screen flex flex-wrap items-center justify-between mx-auto bg-blue-400">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://www.bibclinic.co.uk/wp-content/uploads/2017/06/bib_clinic_logo_grey.png" alt="BiB Clinic Logo" className="h-30 p-2" />
            </div>
            <div>
                <ul className='flex flex-row'>
                    <li className='p-2'><a href="/">Home</a></li>
                    <li className='p-2'><a href="/procedures">Procedures</a></li>
                    <li className='p-2'><a href="/why-us">Why Us</a></li>
                    <li className='p-2'><a href="/contact">Contact</a></li>
                    <li className='p-2'><a href="/book-now">Book Now</a></li>
                    <li className='p-2'><a href="/gift-vouchers">Gift Vouchers</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;