import headshot from "../media/head-shot.png"

function Whyus() {
    return (
        <div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Why choose us?</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <strong>Begginings</strong>
                    <br/>
                    All the aesthetic treatments are carried out by an experienced professional, registered nurse 
                    and independent prescriber Rachel McGaughey, who founded BiB.
                    <br />
                    <br />
                    <strong>Individual</strong>
                    <br/>
                    At BiB Aesthetics Clinic, our aim is to provide individually tailored treatments that deliver  
                    natural looking results.
                    <br />
                    <br />
                    <strong>Beauty</strong>
                    <br/>
                    Dedicated and commited to the highest ethical standards. We use the latest innovative treatments with high 
                    end products to ensure you look and feel beautiful
                    </p>
            </div>

            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-light text-gray-900 dark:text-white">Meet Rachel</h5>
                <img src={headshot} alt="Rachel" className="w-48 h-48 rounded-full" />
                <p>
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
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-light text-gray-900 dark:text-white">Our Promise</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <strong>Confidence</strong>
                    <br/>
                    Boost your confidence, appearance and wellbeing.
                    <br />
                    <br />
                    <strong>Individual</strong>
                    <br/>
                    At BiB Aesthetics Clinic, our aim is to provide individually tailored treatments that deliver  
                    natural looking results.
                    <br />
                    <br />
                    <strong>Beauty</strong>
                    <br/>
                    Dedicated and commited to the highest ethical standards. We use the latest innovative treatments with high 
                    end products to ensure you look and feel beautiful.
                </p>
            </div>
        </div>
    )
}

export default Whyus;