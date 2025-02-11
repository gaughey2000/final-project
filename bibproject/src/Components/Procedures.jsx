function Procedures() {
    return (
        <div className="w-full p-4 mt-16 ml-4 mr-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Procedures
                </h5>
                <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    View all
                </a>            
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Treatment 1
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Treatment info....
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                £999
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Treatment 2
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Treatment info....
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                £999
                            </div>
                        </div>
                    </li>
                    <li className="py-3 sm:py-4">
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Treatment 3
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Treatment info....
                            </p>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                £999
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Procedures;