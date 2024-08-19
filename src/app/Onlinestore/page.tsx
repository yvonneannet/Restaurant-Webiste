const Onlinestore = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-center mb-4">Online Store</h1>
            <h2 className="text-5xl font-light text-center mb-2 ">Popular Foods</h2>
            <svg className="w-full h-32 p-4 -ml-2" viewBox="0 0 100 40">
                <path
                    d="M 10 30 Q 50 10 90 30"
                    fill="none"
                    stroke="orange"
                    strokeWidth="1"
                />
            </svg>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                {[
                    {
                        imgSrc: "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=300",
                        title: "Fruit dish",
                        description: "Dinko Food",
                        price: "$696",
                        rating: 4
                    },
                    {
                        imgSrc: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=300",
                        title: "Fruit dish",
                        description: "Dinko Food",
                        price: "$696",
                        rating: 5
                    },
                    {
                        imgSrc: "https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg?auto=compress&cs=tinysrgb&w=300",
                        title: "Sea fish dish",
                        description: "Dinko Food",
                        price: "$696",
                        rating: 3
                    },
                    {
                        imgSrc: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=300",
                        title: "Pizza",
                        description: "Dinko Food",
                        price: "$696",
                        rating: 4
                    }
                ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-3">
                        <img className="w-64 h-64 rounded-full object-cover mb-4" src={item.imgSrc} alt={item.title} />
                        <h3 className="text-2xl font-medium text-center mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-center mb-2 text-xl">{item.description}</p>
                        <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-5 h-5 ${i < item.rating ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 15.27L16.18 20 14.54 12.97 20 8.64l-7.19-.61L10 1 7.19 8.03 0 8.64l5.46 4.33L3.82 20z" />
                                </svg>
                            ))}
                        </div>
                        <button className="mt-2 bg-yellow-500 text-white py-3 px-4 rounded-[20px] hover:bg-yellow-600">Add to cart {item.price}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Onlinestore;
