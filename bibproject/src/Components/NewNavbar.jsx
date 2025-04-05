import {useState} from 'react';
function NewNavbar(){
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return(
        <div className="flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto">
            <h1 className="w-full text-3xl font-bold ">Bib Clinic.</h1>
            <ul className="hidden md:flex p-4">
                <li className="p-4">Home</li>
                <li className="p-4">Procedures</li>
                <li className="p-4">Why Us</li>
                <li className="p-4">Contact</li>
                <li className="p-4">Book</li>
            </ul>
{/** mobile nav */}
            <div onClick={handleMenuToggle} className='block md:hidden'>
                {!isMenuOpen ? <i className="bx bx-x text-5xl cursor-pointer"></i> : <i className="bx bx-menu text-5xl cursor-pointer"></i>}
            </div>
            <div className={!isMenuOpen ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-tertiary ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-[60%] h-full border-r border-gray-900 bg-tertiary ease-in-out duration-500'}>
            <h1 className="w-full text-3xl font-bold ">Bib Clinic.</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b">Home</li>
                    <li className="p-4 border-b">Procedures</li>
                    <li className="p-4 border-b">Why Us</li>
                    <li className="p-4 border-b">Contact</li>
                    <li className="p-4">Book</li>   
                </ul>
            </div>
        </div> 
    )
}
export default NewNavbar;