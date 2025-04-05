import video from "../media/intro.mp4";

function Home() {
  return (
    
    <>
        <div className="w-full h-full flex flex-row items-center justify-center">
            {/*top section*/}
            <div className="w-[75%] h-1/2 relative flex flex-col items-center justify-center p-4 mt-16 ml-4 mr-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700" >
                <h1 className="text-4xl font-bold text-center dark:text-white">
                    Welcome to the BIB Clinic.
                </h1>
                <br />
                <p className="mt-4 text-lg text-center dark:text-gray-300">
                    With over 15 years of experience, <br />you can be confident that you are in good hands.
                </p>
            </div>

            {/*video section*/}
            <div className="w-full h-5/8 felx relative top-1 p-4 mt-16 left-1/8 ">
                <video width="75%" height="auto" controls className="justify-center rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </>
  );
}

export default Home;