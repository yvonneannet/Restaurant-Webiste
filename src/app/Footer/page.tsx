const Footer = () => {
    return (
      <>
        <footer className="bg-gray-800 text-white py-8 px-4 flex flex-col sm:flex-row gap-24 sm:gap-x-96">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">FoodHouse <span className="text-3xl font-bold text-yellow-500">.</span></h3>
            <p className="text-sm">
              Best cooks and best delivery guys all at your service.<br />
              Hot tasty food will reach you in 60 minutes.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" aria-label="Facebook">
                <img
                  src="/Images/facebook.png"
                  alt="Facebook"
                  className="w-8 h-8 cursor-pointer"
                />
              </a>
              <a href="https://www.twitter.com" aria-label="Twitter">
                <img
                  src="/Images/twitter.png"
                  alt="Twitter"
                  className="w-8 h-8 cursor-pointer"
                />
              </a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <img
                  src="/Images/linkedin.png"
                  alt="LinkedIn"
                  className="w-8 h-8 cursor-pointer"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-40 ">
            <div>
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="list-none space-y-2">
                <li className="hover:text-gray-400 cursor-pointer">Career</li>
                <li className="hover:text-gray-400 cursor-pointer">About Us</li>
                <li className="hover:text-gray-400 cursor-pointer">Blog</li>
                <li className="hover:text-gray-400 cursor-pointer">Press Info</li>
                <li className="hover:text-gray-400 cursor-pointer">Features</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Fudo</h3>
              <ul className="list-none space-y-2">
                <li className="hover:text-gray-400 cursor-pointer">Why Fudo</li>
                <li className="hover:text-gray-400 cursor-pointer">How It Works</li>
                <li className="hover:text-gray-400 cursor-pointer">Why Choose Us</li>
                <li className="hover:text-gray-400 cursor-pointer">Client Stories</li>
                <li className="hover:text-gray-400 cursor-pointer">Gallery</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Menu</h3>
              <ul className="list-none space-y-2">
                <li className="hover:text-gray-400 cursor-pointer">Breakfast</li>
                <li className="hover:text-gray-400 cursor-pointer">Lunch</li>
                <li className="hover:text-gray-400 cursor-pointer">Dinner</li>
                <li className="hover:text-gray-400 cursor-pointer">Fast Foods</li>
                <li className="hover:text-gray-400 cursor-pointer">Drinks</li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="bg-yellow-500 text-gray-800 py-4 px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-white">Copyright 2021 Besnik. All Rights Reserved.</div>
          <div className="flex space-x-4 texr-size">
            <a href="#" className="hover:text-gray-600 cursor-pointer text-white">Terms</a>
            <a href="#" className="hover:text-gray-600 cursor-pointer  text-white">Privacy</a>
            <a href="#" className="hover:text-gray-600 cursor-pointer  text-white">Security</a>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;
  