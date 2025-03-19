function NewHome() {
  return (
    
    <>
        <div className="w-full h-full flex flex-col items-center justify-center">
            {/*top section*/}
            <div className="w-full h-1/2 text-center">
                <img src="https://placehold.co/1500x500" alt="profile picture" className="w-full h-full" />
                <h1 className="text-4xl font-bold text-center text-black absolute">Hello and welcome to BiB Clinic</h1>
            </div>
            {/*main section*/}
            <div className="w-250 h-1/2 flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-10" >
                <ul className="list-disc list-inside text-xl text-center text-black">
                    <li>Some</li>
                    <li>General</li>
                    <li>Information</li>
                </ul>
            </div>
        </div>
    </>
  );
}

export default NewHome;