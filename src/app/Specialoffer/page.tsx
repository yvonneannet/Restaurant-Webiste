const SpecialOffer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  bg-white rounded-lg items-center p-28"> 
            <div className="flex flex-col gap-10">
                <div className="bg-yellow-500 text-center text-3xl font-bold text-white py-2 rounded w-fit ">
                    -50%
                </div>
                <h1 className="text-3xl font-bold ">Our Special Offer</h1>
                <p className="text-gray-700">
                    Best Cooks and Best Delivery guys at your service. Hot tasty food will <br />
                    reach you in 60 minutes.
                </p>
                <button className="flex items-center justify-center w-[300px] px-4 py-2 bg-yellow-500 text-white font-bold rounded-md hover:bg-yellow-600 transition duration-300">
                    See All Menu
                    <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className="relative flex items-center justify-center">
                <img 
                    src="https://media.istockphoto.com/id/1190330112/photo/fried-pork-and-vegetables-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=o09wI3aSVncD5Ih_Gj11RJdf7MQQt0QMv4DvkKvj-n4=" 
                    alt="Delicious food offered" 
                />
                
                <div className="absolute left-0 p-2 bg-white rounded-lg shadow-md m-2">
                    <div className="flex items-center space-x-2">
                        <img
                            src="https://images.pexels.com/photos/1116380/pexels-photo-1116380.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Customer 1: Cristio Mario"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">Cristio Mario</h3>
                            <p className="text-gray-600 text-sm">Healthy and delicious pizza</p>
                            <div className="flex space-x-1">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        className="h-4 w-4 text-yellow-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15.27L16.18 19l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 4.73L5.82 19z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 p-2 bg-white rounded-lg shadow-md m-2">
                    <div className="flex items-center space-x-2">
                        <img
                            src="https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Customer 2: Srah Ali Khan"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="text-lg font-semibold">Srah Ali Khan</h3>
                            <p className="text-gray-600 text-sm">Healthy and delicious pizza</p>
                            <div className="flex space-x-1">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        className="h-4 w-4 text-yellow-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15.27L16.18 19l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 4.73L5.82 19z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;