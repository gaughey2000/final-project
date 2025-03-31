import video from "../media/intro.mp4";

function NewHome() {
  return (
    
    <>
        <div className="w-full h-full flex flex-row items-center justify-center">
            {/*top section*/}
            <div className="w-[75%] h-1/2 relative flex flex-col items-center justify-center bg-quaternary rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-10" >
                <h1 className="text-4xl font-bold text-center dark:text-white">Welcome to the BIB Clinic.</h1>

            </div>

            {/*video section*/}
            <div className="w-full h-5/8 felx relative top-1 left-1/8 ">
                <video width="75%" height="auto" controls className="justify-center rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </>
  );
}

export default NewHome;