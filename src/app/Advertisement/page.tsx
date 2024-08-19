const Advertisement = () => {
    return (
        <div className="bg-gray-100 py-20 flex flex-col justify-center items-center min-h-screen">
            <div className="container mx-auto px-4 flex items-center gap-48 mr-14">
                <div>
                    <img src="/Images/app.png" alt="Applicaton display" className="w-72 h-104" />
                </div>
                <div className="text-start">
                    <h3 className="text-yellow-500 text-xl">
                        Download Our App
                    </h3>
                    <h1 className="text-5xl font-bold mb-4">
                        It's all here. <br />
                        All in one app.
                    </h1>
                    <p className="text-gray-700 mb-8">
                        Discover local on-demand delivery or Pickup from <br /> restaurants nearby
                        grocery and convenience stores <br />and more.
                    </p>
                    <div className="flex justify-center gap-6">
                        <img src="Images/appstore.png" alt="" className="w-64 h-16 mr-4" />
                        <img src="Images/googleplay.png" alt="" className="w-64 h-16" />
                    </div>
                </div>
            </div>
            <div className=" py-12 mt-12 w-full ">
                <div className="container mx-auto px-4 flex items-center ">
                    <div className=" mb-8 w-120 text-start mr-6">
                        <h1 className="text-4xl font-bold mb-4">Subscribe Our NewsLetter</h1>
                        <p className="text-gray-700">Subscribe on our newsletter to get our <br />news</p>
                    </div>
                    <div className="flex ml-96">
                        <input
                            type="text"
                            placeholder="Your email address..."
                            className="border rounded-l-md px-4 py-2 w-96 focus:outline-none  focus:border-yellow-500 h-12"
                        />
                        <button className="bg-yellow-500 text-white rounded-r-md px-4 py-2 hover:bg-yellow-600 h-12 w-32">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Advertisement;
