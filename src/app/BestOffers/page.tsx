const BestOffers = () => {
    return (
      <div className="container mx-auto px-4 py-12 ">
        <div className="text-center">
        <h3>Quality Food</h3>
        <h1 className="text-3xl font-bold mb-4">Get The Best Offers</h1>
        <p className="text-gray-700 mb-8">The food at your doorstep. Why starve when you have us. Your hunger
        <br />partner. Straight out of the oven to your desktop.</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center bg-white rounded-lg p-4">
            <div className="flex flex-col items-start mr-4">
              <h3 className="text-xl font-bold mb-2">Any day offers</h3>
              <p className="text-gray-700 mb-2">New phenomenon Burger taste</p>
              <p className="text-lg font-bold text-yellow-500">$12.90</p>
            </div>
            <img 
              src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Any day offer" 
              className="rounded-full w-56 h-56 object-cover" 
            />
          </div>
          <div className="flex items-center bg-white rounded-lg p-4">
            <div className="flex flex-col items-start mr-4">
              <h3 className="text-xl font-bold mb-2">Other flavors</h3>
              <p className="text-gray-700 mb-2">Save room. We made salads</p>
              <p className="text-lg font-bold text-yellow-500">$12.90</p>
            </div>
            <img 
              src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Other flavors" 
              className="rounded-full w-56 h-56 object-cover" 
            />
          </div>
          <div className="flex items-center bg-white rounded-lg p-4">
            <div className="flex flex-col items-start mr-4">
              <h3 className="text-xl font-bold mb-2">Find a Poco store near you</h3>
            </div>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_c-lI9DyU65Y9eh0t8fm5OxpHUuhv8ss4w&s" 
              alt="Find a Poco store" 
              className="rounded-full w-56 h-56 object-cover"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default BestOffers;
  