const Navbar = () => {
    return (
        <main>
            <nav className="flex justify-between items-center p-8">
                <h1 className="text-4xl font-bold text-yellow-500 font-serif">FoodHouse</h1>
                <ul className="flex space-x-16 text-xl">
                    <li>
                        <a href="#" className="text-yellow-500  hover:text-black">HOME</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700  hover:text-black">RESTAURANT</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700  hover:text-black">SERVICES</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700  hover:text-black">CART</a>
                    </li>
                </ul>
                <div>
                    <a href="#" className="text-xl text-gray-700 hover:text-black">Sign In</a>
                </div>
            </nav>
        </main>
    );
  };
  
  export default Navbar;
  