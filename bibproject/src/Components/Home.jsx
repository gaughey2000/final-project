function Home() {
    return (
        <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div class="row-span-3 ...">
                <img src="https://www.bibclinic.co.uk/wp-content/uploads/2016/09/mugshot.png"
 alt="profile picture" className="w-1/2 h-auto" />
            </div>
            <div class="col-span-2 ... pr-10">
                <h1 className="text-4xl font-bold text-center">Hello and welcome to BiB Clinic</h1>
            </div>
            <div class="row-span-2 col-span-2 ... pr-10">
                <ul className="list-disc list-inside text-xl text-center">
                    <li>Some</li>
                    <li>General</li>
                    <li>Information</li>
                </ul>
            </div>
        </div>
    )
}

export default Home;