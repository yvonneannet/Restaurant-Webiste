const Testimonial = () => {
    return (
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center"> {/* Centered text */}
          <h2 className="text-2xl font-bold mb-2">Testimonial</h2>
          <h1 className="text-4xl font-bold mb-8">What Our Clients Say</h1>
          <div className="flex justify-center mb-8">
            <img src="Images/quotes.png" alt="quote" className="w-16 h-16"/>
          </div>
          <p className="text-gray-700 mb-12">
           'Poco has been a game-changer for our business. The platform is user-friendly, and the customer support is top-notch. We highly recommend Poco to anyone looking for a reliable and efficient food delivery service.'
          </p>
          <div className="flex justify-center mb-8">
            <img
              src="https://media.istockphoto.com/id/1212710317/photo/young-handsome-man-with-beard-wearing-casual-t-shirt-standing-over-white-background-with-a.jpg?s=612x612&w=0&k=20&c=nSlJwjk7GNXyF0goEPp8B0Vo_tnk0OOkV1MlPJnTQ3A="
              alt="quote"
              className="w-24 h-24 rounded-full mx-2" // Increased image size and centered
            />
            <img
              src="https://media.istockphoto.com/id/1289220545/photo/beautiful-woman-smiling-with-crossed-arms.jpg?b=1&s=612x612&w=0&k=20&c=V0w97TpL-tuD3vdWC6AcD_nLE4BiAEN12mJdVZGw51g="
              alt="quote"
              className="w-24 h-24 rounded-full mx-2" // Increased image size and centered
            />
            <img
              src="https://media.istockphoto.com/id/1025855490/photo/horizontal-shot-of-young-positive-european-man-isolated-on-gray-background-standing-in-blank.jpg?s=612x612&w=0&k=20&c=cCy-tfqlGwz1QD9K1f7LIuPgvJFHXs9UmmkhetOjRyg="
              alt="quote"
              className="w-24 h-24 rounded-full mx-2" // Increased image size and centered
            />
            <img
              src="https://media.istockphoto.com/id/1351047038/photo/portrait-of-a-young-adult-man-against-a-white-background.jpg?s=612x612&w=0&k=20&c=e2X00aUGu_3hXm97Fh0XZNIZh97Z9RnZSzWvFbOZ2Dc="
              alt="quote"
              className="w-24 h-24 rounded-full mx-2" // Increased image size and centered
            />
            <img
              src="https://media.istockphoto.com/id/1174441836/photo/young-handsome-man-with-tattoo-wearing-casual-t-shirt-over-isolated-white-background-looking.jpg?s=612x612&w=0&k=20&c=8au2GqumpUO_ze8z16TUpauDh_-Fd6ukHCOAK5pWK5A="
              alt="quote"
              className="w-24 h-24 rounded-full mx-2" // Increased image size and centered
            />
            <img
              src="https://media.istockphoto.com/id/1022174744/photo/horizontal-shot-of-young-positive-european-guy-isolated-on-gray-background-standing-in-white.jpg?s=612x612&w=0&k=20&c=3Ys0XxpBFtRR_pcmFc37zRndN6KDCP7_NZqRWyhD_h8="
              alt="quote"
              className="w-24 h-24 rounded-full mx-2" // Increased image size and centered
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Mitchell Marsh</h3>
          <p className="text-gray-700 mb-8">CEO, Bexon Agency</p>
          <div className="flex justify-center">
            <img src="Images/navigate.png" alt="nav" className="w-28 h-18" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonial;
  