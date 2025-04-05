import Video from '../Components/Video';
function NewHome () {
    return(
        <div>
            <div className="max-w-[800px] w-full h-screen mx-auto flex flex-col justify-center text-center">
                <p className="text-pink-800 text-2xl font-bold p-2">Welcome to the BIB clinic.</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Enhance your natural beauty.</h1>
                <button className="bg-pink-800 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">Book Now</button>
            </div> 
            <div>
                <Video />
            </div>
        </div>
    )
}
export default NewHome;