import video from "../media/intro.mp4";

function NewHome() {
  return (
    
    <>
        <div className="w-full h-full flex flex-col items-center justify-center">
            {/*top section*/}
            <div className="w-full h-1/2 felx relative top-1 left-1/8 ">
                <video width="75%" height="auto" controls className="justify-center rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/*main section*/}
            <div className="w-250 h-1/2 flex flex-col items-center justify-center bg-tertiary rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-10" >
                <ul className="list-none list-inside text-xl text-center text-black">
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