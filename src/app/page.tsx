import Advertisement from "./Advertisement/page";
import BestOffers from "./BestOffers/page";
import Footer from "./Footer/page";
import Landingpage from "./Landingpage/page";
import Navbar from "./Navbar/page";
import Onlinestore from "./Onlinestore/page";
import Services from "./Services/page";
import SpecialOffer from "./Specialoffer/page";
import Testimonial from "./Testimonial/page";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Landingpage/>
      <Onlinestore/>
      <SpecialOffer/>
      <BestOffers/>
      <Services/>
      <Testimonial/>
      <Advertisement/>
      <Footer/>
    </main>
  );
}

// git remote add origin https://github.com/yvonneannet/Restaurant-Webiste.git
