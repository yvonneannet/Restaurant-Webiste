const Landingpage = () => {
    return (
        <div className="container mx-auto px-2 py-24 flex flex-col lg:flex-row"> 
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col justify-center"> 
                <h1 className="text-6xl font-bold mb-4">Enjoy Delicious <br/>Food in<span className="text-yellow-500"> Healthy Life</span></h1>
                <p className="text-2xl mb-8 mt-12">Tandoori masala is an Indian spice blend consisting of a <br/> variety of spices. Tandoori masala is an Indian spice blend<br/> consisting of a variety of spices.</p>
                <button className="bg-yellow-500 text-white w-40 py-2 rounded-[12px] hover:bg-yellow-600 mt-16">ORDER NOW</button>
            </div>
            <div className="w-full lg:w-1/2 flex items-center">
                <img src="/Images/chicken.png" alt="Roasted Chicken" className="w-full h-auto object-cover rounded-lg" />
            </div>
        </div>
    );
};
export default Landingpage;
