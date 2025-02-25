function Home() {
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3 ... max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ml-25 mt-16">
                <img src="https://placehold.co/400" alt="profile picture" />
            </div>
            <div className="col-span-2 ... pr-10 mt-16 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <h1 className="text-4xl font-bold text-center text-white">Hello and welcome to BiB Clinic</h1>
            </div>
            <div className="row-span-2 col-span-2 ... pr-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <ul className="list-disc list-inside text-xl text-center text-white">
                    <li>Some</li>
                    <li>General</li>
                    <li>Information</li>
                </ul>
            </div>
        </div>
    )
}

export default Home;