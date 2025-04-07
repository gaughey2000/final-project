import video from '../media/intro.mp4';
import thumbnail from '../media/intro-thumb.png'
function Video (){
    return(
        <div>
            <video controls poster={thumbnail}className="w-full h-auto mt-6 mx-auto shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
export default Video;