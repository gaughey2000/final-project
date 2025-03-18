function NewHome() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-1/2 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 items-center">
        <img src="https://placehold.co/1500x500" alt="profile picture" className="w-full h-1/2" />
        <h1 className="text-4xl font-bold text-center text-black">Hello and welcome to BiB Clinic</h1>
      </div>
    </div>
  );
}

export default NewHome;