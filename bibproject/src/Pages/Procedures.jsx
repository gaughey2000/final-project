import antiwrinkle from '../media/anti-wrinkle.png';

function Procedures() {
    return (
        <div className="w-full p-4 mt-16 ml-4 mr-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Procedures
                </h5>
         
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <h5 className="text-xl font-bold text-gray-900 truncate dark:text-white">Anti-Wrinkle</h5>
                    <img src={antiwrinkle} alt="Anti-Wrinkle" className="w-48 h-48 " />
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                <strong>About</strong>
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Reduce fine lines with anti-wrinkle injections.
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <a href="/contact" className="text-blue-500 hover:underline">more info</a>
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                1 Area
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                £150.00
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                2 Areas
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                £200.00
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                3 Areas
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                £250.00
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Other
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                £550.00
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Procedures;