import antiwrinkle from '../media/anti-wrinkle.png';
import fillerpic from '../media/filler.png';
import harmony from '../media/harmony.png';
import skinboosters from '../media/skin-booster.png';
import skincare from '../media/skin-care.png';
import skinpeel from '../media/peel.png';
import poly from '../media/poly.png';
import { useState } from 'react';
function Procedures() {
    
    const [aRmoreInfo, setArMoreInfo] = useState(false);
    const handleArMoreInfo = () => {
        setArMoreInfo(!aRmoreInfo);
    };
    const [moreDfInfo, setMoreDfInfo] = useState(false);
    const handleDfMoreInfo = () => {
        setMoreDfInfo(!moreDfInfo);
    };
    const [moreHtInfo, setMoreHtInfo] = useState(false);
    const handleHtMoreInfo = () => {
        setMoreHtInfo(!moreHtInfo);
    };
    const [moreSbInfo, setMoreSbInfo] = useState(false);
    const handleSbMoreInfo = () => {
        setMoreSbInfo(!moreSbInfo);
    };
    const [moreScInfo, setMoreScInfo] = useState(false);
    const handleScMoreInfo = () => {
        setMoreScInfo(!moreScInfo);
    };
    
    const [moreSpInfo, setMoreSpInfo] = useState(false);
    const handleMoreSpInfo = () => {
        setMoreSpInfo(!moreSpInfo);
    };

    const [morePInfo, setMorePInfo] = useState(false);
    const handlePInfo = () => {
        setMorePInfo(!morePInfo);
    };
    const [moreVInfo, setMoreVInfo] = useState(false);
    const handleVInfo = () => {
        setMoreVInfo(!moreVInfo);
    };
    
    const [moreHInfo, setMoreHInfo] = useState(false);
    const handleHInfo = () => {
        setMoreHInfo(!moreHInfo);
    };

    return (
        <div className="w-full p-4 mt-16 ml-4 mr-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900">
                    Procedures
                </h5>
         
            </div>
            <div className="flow-root">
{/*Anti-Wrinkle*/}
                <ul role="list" className="divide-y divide-gray-200">
                    <h5 className="text-xl font-bold text-gray-900 truncate">Anti-Wrinkle</h5>
                    <img src={antiwrinkle} alt="Anti-Wrinkle" className="w-48 h-48 " />
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900 truncate ">
                                <strong>About</strong>
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate">
                                Reduce fine lines with anti-wrinkle injections.
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                <p onClick={handleArMoreInfo} className="text-pink-800 hover:underline">Pricing</p>
                            </div>
                        </div>
                    </li>
                    <div className={aRmoreInfo ? 'block' : 'hidden'}>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    1 Area
                                </p>
                                <p className="text-sm font-medium text-pink-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-pink-900">
                                    £150.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    2 Areas
                                </p>
                                <p className="text-sm font-medium text-pink-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-pink-900">
                                    £200.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    3 Areas
                                </p>
                                <p className="text-sm font-medium text-pink-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-pink-900">
                                    £250.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    Other
                                </p>
                                <p className="text-sm font-medium text-pink-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-pink-900">
                                    £550.00
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
{/*Dermal Fillers*/}
                <ul role="list" className="divide-y divide-gray-200">
                    <h5 className="text-xl font-bold text-gray-900 truncate ">Dermal Fillers</h5>
                    <img src={fillerpic} alt="Dermal Fillers" className="w-48 h-48 " />
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900 truncate">
                                <strong>About</strong>
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate">
                                Volumise, lift and contour with dermal fillers.
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                <p onClick={handleDfMoreInfo}className="text-pink-900 hover:underline">Pricing</p>
                            </div>
                        </div>
                    </li>
                    <div className={moreDfInfo ? 'block' : 'hidden'}>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    0.5ml
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £165.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    0.7ml
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £200.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    1ml Lip / Nasolabial
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £225.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    1ml Tear Trough
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £350.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncat">
                                    3ml package
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncat">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £600.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    4ml package
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-90">
                                    £750.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    5ml Tear Trough
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £850.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    6ml Tear Trough
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £900.00
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
                
{/*Harmony Threads*/}
                <ul role="list" className="divide-y divide-gray-20">
                    <h5 className="text-xl font-bold text-gray-900 truncate" >Harmony Threads </h5>
                    <img src={harmony} alt="Harmony Threads" className="w-48 h-48 " />
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900 truncate">
                                <strong>About</strong>
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate">
                                Hybrid filler that provides an immediate volumising as well as stimulating collagen regrowth.
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                <p onClick={handleHtMoreInfo}className="text-pink-900 hover:underline">Pricing</p>
                            </div>
                        </div>
                    </li>
                    <div className={moreHtInfo ? 'block' : 'hidden'}>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    1.25ml
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £300.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    2.5ml
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £600.00
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
                 
{/*Skin-boosters*/}
                <ul role="list" className="divide-y divide-gray-200">
                    <h5 className="text-xl font-bold text-gray-900 truncate">Skinboosters</h5>
                    <img src={skinboosters} alt="Skinboosters" className="w-48 h-48 " />
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900 truncate">
                                <strong>About</strong>
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate">
                                Improve you skins tone, texture, hydration, and overall radience with Profhilo skin booster injections.
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                <p onClick={handleSbMoreInfo} className="text-pink-900 hover:underline">Pricing</p>
                            </div>
                        </div>
                    </li>
                    <div className={moreSbInfo ? 'block' : 'hidden'}>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    Single treatment
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £250.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    3 treatments course
                                </p>
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £600.00
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
                
{/*Skin-care*/}
                <ul role="list" className="divide-y divide-gray-200>">
                    <h5 className="text-xl font-bold text-gray-900 truncate">Skin Care</h5>
                    <img src={skincare} alt="Skin Care" className="w-48 h-48 " />
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900">
                                <strong>About</strong>
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                                Rejuvinate and refresh your skin with clinical skin care.
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                <p onClick={handleScMoreInfo} className="text-pink-900 hover:underline">Pricing</p>
                            </div>
                        </div>
                    </li>
                    <div className={moreScInfo ? 'block' : 'hidden'}>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900">
                                    Microdermabrasion
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £40.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900">
                                    Dermaplaning
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £45.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900">
                                    Sclerotherapy
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £175.00
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
               
{/*Skin-peel*/}
                <ul role="list" className="divide-y divide-gray-200">
                    <h5 className="text-xl font-bold text-gray-900 truncate">Skin Peel</h5>
                    <img src={skinpeel} alt="Skin Peel" className="w-48 h-48 " />
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900">
                                <strong>About</strong>
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                                Skin peels will leave your skin looking smoother, healthier, plumper and tighter
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                <p onClick={handleMoreSpInfo} className="text-pink-900 hover:underline">Pricing</p>
                            </div>
                        </div>
                    </li>
                    <div className={moreSpInfo ? 'block' : 'hidden'}>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900">
                                    Dermaceutic Milk Peel
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £95.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900">
                                    Obaji Blue Peel
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £100.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900">
                                    Alumier Glow Peel
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £120.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900">
                                    Dermaceutic TCA
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £150.00
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
                
{/*Polynucleotides*/}
                <ul role="list" className="divide-y divide-gray-200">
                    <h5 className="text-xl font-bold text-gray-900 truncate">Polynucleotides</h5>
                    <img src={poly} alt="Polynucleotides" className="w-48 h-48 " />
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900">
                                <strong>About</strong>
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                                Restore and hydrate your skin by stimulating cell regrowth with Polyucletotide injections
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                <p onClick={handlePInfo} className="text-pink-900 hover:underline">Pricing</p>
                            </div>
                        </div>
                    </li>
                    <div className={morePInfo ? 'block' : 'hidden'}>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900">
                                    Single treatment
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £250.00
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900">
                                3 treatments course
                                </p>
                                <p className="text-sm font-medium text-gray-900">
                                    
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £600.00
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
                 
{/*Vitamin*/}
                <ul role="list" className="divide-y divide-gray-2000">
                    <h5 className="text-xl font-bold text-gray-900 truncate">Vitamin</h5>
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900">
                                <strong>About</strong>
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                                Increase energy levels, improve sleep and overall well being with a Vitamin B12 injection
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                <p onClick={handleVInfo} className="text-pink-900 hover:underline">Pricing</p>
                            </div>
                        </div>
                    </li>
                    <div className={moreVInfo ? 'block' : 'hidden'}>
                        <li className="py-3 sm:py-4">
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900">
                                    B12
                                </p>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    £25.00
                                </div>
                            </div>
                        </li>
                    </div>
                </ul>
                
{/*Hyperhydrosis*/} 
                <ul role="list" className="divide-y divide-gray-200">
                    <h5 className="text-xl font-bold text-gray-900 truncate">Hyperhydrosis</h5>
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900">
                                <strong>About</strong>
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                                Treat hyperhydrosis (excessive sweating) with muscle relaxing injections.
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                <p onClick={handleHInfo} className="text-pink-900 hover:underline">Pricing</p>
                            </div>
                        </div>
                    </li>
                    <div className={moreHInfo ? 'block' : 'hidden'}>
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900">
                                Female
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                £350.00
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900">
                                Male
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                £450.00
                            </div>
                        </div>
                    </li>
                    </div>
                </ul>               
            </div>
                       
        </div>
    )
}

export default Procedures;