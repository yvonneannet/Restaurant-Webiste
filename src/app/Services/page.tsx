const Services = () => {
    return (
      <div className="bg-white py-24"> 
        <h1 className="text-center text-4xl font-bold mb-8 p-10">Our Services</h1>
        <div className="grid grid-cols-4 gap-6 justify-items-center"> 
          <div className="flex flex-col items-center justify-center">
            <img 
              src="Images/restaurants.png" 
              alt="restaurant" 
              className="w-40 h-40 mb-2 rounded-full shadow-md" 
            />
            <h1 className="text-lg font-bold text-center">55+ Restaurants</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img 
              src="Images/quality.png" 
              alt="quality" 
              className="w-40 h-40 mb-2 rounded-full shadow-md" 
            />
            <h1 className="text-lg font-bold text-center">Good Quality</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img 
              src="Images/discount.png" 
              alt="discount" 
              className="w-40 h-40 mb-2 rounded-full shadow-md" 
            />
            <h1 className="text-lg font-bold text-center">Discount System</h1>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img 
              src="Images/delivery.png" 
              alt="delivery" 
              className="w-40 h-40 mb-2 rounded-full shadow-md" 
            />
            <h1 className="text-lg font-bold text-center">Fast Delivery</h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;
  