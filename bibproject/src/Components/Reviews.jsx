function Reviews () {
    return(
        <div>
            <div className="max-w-[800px] w-full mx-auto flex flex-col justify-center text-center">
                <h1 className="md:text-7xl sm:text-6xl text-2xl font-bold md:py-6 mt-2">What our customers think.</h1>
                <div>
                    <i className='bx bxs-star text-[#cfae09]'></i> <i className='bx bxs-star text-[#cfae09]'></i> <i className='bx bxs-star text-[#cfae09]'></i> <i className='bx bxs-star text-[#cfae09]'></i> <i className='bx bxs-star text-[#cfae09]'></i>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <div className="max-w-[300px] w-full mx-auto p-4">
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <p>"The staff were incredibly friendly and made me feel at ease. Highly recommend!"</p>
                        <p className="text-right font-bold">- Sarah</p>
                    </div>
                </div>
                <div className="max-w-[300px] w-full mx-auto p-4">
                    <div className="bg-white shadow-lg rounded-lg p-4">
                        <p>"I had a fantastic experience. The results exceeded my expectations!"</p>
                        <p className="text-right font-bold">- John</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reviews;