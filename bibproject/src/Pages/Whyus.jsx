import headshot from "../media/head-shot.png"
import { useState } from "react";

function Whyus() {

    const [isMenu1Open, setIsMenu1Open] = useState(false);
    const handleMenu1Toggle = () => {
        setIsMenu1Open(!isMenu1Open);
    }

    const [isMenu2Open, setIsMenu2Open] = useState(false);
    const handleMenu2Toggle = () => {
        setIsMenu2Open(!isMenu2Open);
    }

    const [isMenu3Open, setIsMenu3Open] = useState(false);
    const handleMenu3Toggle = () => {
        setIsMenu3Open(!isMenu3Open);
    }

    return (
        <div className="">
            {/*Rachel*/}
            <div className="mt-16 my-1 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 items-center">
                <div classname="">
                    <h1 className="text-xl font-bold text-gray-900 truncate">Meet Rachel</h1>
                    <img src={headshot} alt="Rachel" className="w-48 h-48 rounded-full" />
                    {isMenu1Open ? <i onClick={handleMenu1Toggle} className='bx bxs-chevron-up' ></i> : <i onClick={handleMenu1Toggle} className='bx bxs-chevron-down' ></i>}
                    
                    <box-icon name='chevron-up' type='solid' ></box-icon>
                </div>
                <div className={isMenu1Open ? 'block' : 'hidden'}>
                    <p>
                        <br />
                        <strong>Best of the best</strong>
                        <br/>
                        Rachel is a registered nurse and Independent Prescriber with over 25 years of 
                        nursing experience. Working within critical care before moving to community work.
                        Rachel has been working in aesthetics for 14 years and has trained with globally renowned
                        doctors in the UK and abroad.
                        <br />
                        <br />
                        <strong>Improving continuosly</strong>
                        <br/>
                        Over the last 14 years Rachel has train continuosly, not only in the UK but across europe
                        to bring her patients the highest standard of innovative treatments. She is a member of BACN 
                        (British Association of Cosmetic Nurses) and ACE (Aesthetics Complications Experts).
                        <br />
                        <br />
                        <strong>Premium products</strong>
                        <br/>
                        Our products are chosen by their quality, efficacy and safety profile.
                        We dont settle for anything less than the best.
                    </p>
                </div>
            </div>
            {/*Why Us*/}
            <div className="mt-16 my-1 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 items-center">
                <h1 className="font-bold">Why choose us?</h1>
                {isMenu2Open ? <i onClick={handleMenu2Toggle} className='bx bxs-chevron-up' ></i> : <i onClick={handleMenu2Toggle} className='bx bxs-chevron-down' ></i>}
                <div className={isMenu2Open ? 'block' : 'hidden'}>
                    <strong><p>Begginings</p></strong>
                    <br/>
                    <p>
                        All the aesthetic treatments are carried out by an experienced professional, registered nurse 
                        and independent prescriber Rachel McGaughey, who founded BiB.
                    </p>
                    <br />
                    <br />
                    <strong><p>Individual</p></strong>
                    <br/>
                    <p>
                        At BiB Aesthetics Clinic, our aim is to provide individually tailored treatments that deliver  
                        natural looking results.
                    </p>
                    <br />
                    <br />
                    <strong><p>Beauty</p></strong>
                    <br/>
                    <p>
                    Dedicated and commited to the highest ethical standards. We use the latest innovative treatments with high 
                    end products to ensure you look and feel beautiful
                    </p>
                </div>
            </div>

            
            {/*Our Promise*/}
            <div className="mt-16 my-1 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 items-center">
                <h5 className="">Our Promise</h5>
                {isMenu3Open ? <i onClick={handleMenu3Toggle} className='bx bxs-chevron-up' ></i> : <i onClick={handleMenu3Toggle} className='bx bxs-chevron-down' ></i>}
                <div className={isMenu3Open ? 'block' : 'hidden'}>
                    <strong><p>Confidence</p></strong>
                    <br/>
                    <p>
                        Boost your confidence, appearance and wellbeing.
                    </p>
                    <br />
                    <br />
                    <strong><p>Individual</p></strong>
                    <br/>
                    <p>
                        At BiB Aesthetics Clinic, our aim is to provide individually tailored treatments that deliver  
                        natural looking results.
                    </p>
                    <br />
                    <br />
                    <strong><p>Beauty</p></strong>
                    <br/>
                    <p>
                        Dedicated and commited to the highest ethical standards. We use the latest innovative treatments with high 
                        end products to ensure you look and feel beautiful.
                    </p>    
                </div>
            </div>
        </div>
    )
}

export default Whyus;