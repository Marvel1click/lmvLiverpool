import CarDetailingHero from "../assets/videos/CarDetailingHero.mp4";
import DeepCleanImg from "../assets/images/DeepCleanImg.jpg";
import ProtectImg from "../assets/images/ProtectImg.jpg";
import EnhancePaintImg from "../assets/images/EnchancePaintImg.jpg";
import MaintenanceClubImg from "../assets/images/MaintenanceClubImg.jpg";
import QualityandConvenience from "../assets/images/QualityandConvenience.jpg";
import CustomerCentricApproach from "../assets/images/CustomerCentricApproach.jpg";
import OngoingTrainingandInnovation from "../assets/images/deepclean.jpg";
import A28YearsEts from "../assets/images/28YearsEts.jpg";

const AboutUsPage = () => {
  return (
    <>
      <div className="my-44 mt-0 p-1">
        {/* Hero Section */}
        <div className="relative sm:flex sm:justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={CarDetailingHero}
            alt="Car Detailing"
            className="w-full h-auto object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h1 className="text-2xl font-bold mb-4 md:text-4xl">
              Welcome to LMV Auto Detailing
            </h1>
            <p className="text-xl mb-6">Premium Mobile Car Care in Liverpool</p>
          </div>
        </div>
        {/* Hero Section Ends Here */}
        {/* Introduction and Our Story */}
        <div id="about" className="py-16 px-4 md:px-16 lg:px-32">
          <div className="">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-lg mb-4">
                At <span className="text-orange-500">LMV Auto Detailing</span>,
                we believe in delivering exceptional car care services that go
                beyond the ordinary. Based in Liverpool, we have been serving
                our community with dedication and excellence for over{" "}
                <span className="text-orange-500">28 years</span>. Our journey
                began with a simple mission: to provide the best possible care
                for vehicles while ensuring convenience for our customers.
              </p>
              <p className="text-lg">
                Founded by <span className="text-orange-500">Steve Ward</span>,
                a car enthusiast with a passion for detail and perfection, LMV
                Auto Detailing has grown from a small local business to a
                well-respected name in the car detailing industry. Our
                commitment to quality and customer satisfaction has been the
                cornerstone of our success. Over the years, we have expanded our
                services, continuously upgrading our techniques and products to
                keep up with the latest advancements in car care.
              </p>
            </div>
          </div>
        </div>
        {/* Introduction and Our Story Ends Here */}
        {/* What We Do */}
        <div className="py-16 bg-black px-4 md:px-16 lg:px-32">
          <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <img
                src={DeepCleanImg}
                alt="Deep Clean"
                className="w-1/2 h-auto mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Deep Clean</h3>
                <p>
                  A thorough cleaning process that goes beyond a standard car
                  wash, providing a deep and detailed clean to make your car
                  look and feel like new
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                src={ProtectImg}
                alt="Protective Coatings"
                className="w-1/2 h-auto mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Protective Coatings</h3>
                <p>
                  Our signature protective coatings offer unrivaled protection
                  against the elements, keeping your car cleaner for longer and
                  maintaining its value.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                src={EnhancePaintImg}
                alt="Paint Correction"
                className="w-1/2 h-auto mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Paint Correction</h3>
                <p>
                  Using advanced machine polishing techniques, we remove
                  imperfections like scratches and swirl marks to restore your
                  car’s paintwork to its original glory.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <img
                src={MaintenanceClubImg}
                alt="Maintenance Club"
                className="w-1/2 h-auto mr-4"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">Maintenance Club</h3>
                <p>
                  Regular maintenance services designed to keep your car in
                  pristine condition throughout the year, with flexible
                  scheduling to fit your busy lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* What We Do Ends Here*/}
        {/* Why Choose Us? */}
        <div className="py-16 px-4 md:px-16 lg:px-32">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-neutral-500 shadow-md rounded-md p-6 text-center">
                <img
                  src={A28YearsEts}
                  alt="Experience"
                  className="w-full md:w-1/2 lg:w-1/4 p-4 rounded-full"
                />
                <h3 className="text-xl font-bold mb-2">
                  28 Years of Experience
                </h3>
                <p>
                  With nearly three decades in the industry, our team has the
                  knowledge and skills to handle any car detailing challenge. We
                  are fully insured and Titan accredited, ensuring the highest
                  standards of safety and professionalism.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-neutral-500 shadow-md rounded-md p-6 text-center">
                <img
                  src={QualityandConvenience}
                  alt="Quality and Convenience"
                  className="w-1/2 h-auto mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">
                  Quality and Convenience
                </h3>
                <p>
                  Our mobile service brings the detailing shop to you, providing
                  unparalleled convenience without compromising on quality. We
                  use only the best products and equipment to deliver
                  outstanding results every time.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-neutral-500 shadow-md rounded-md p-6 text-center">
                <img
                  src={CustomerCentricApproach}
                  alt="Customer-Centric Approach"
                  className="w-1/2 h-auto mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">
                  Customer-Centric Approach
                </h3>
                <p>
                  At LMV Auto Detailing, our customers are at the heart of
                  everything we do. We take the time to understand your needs
                  and provide tailored solutions that exceed your expectations.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-neutral-500 shadow-md rounded-md p-6 text-center">
                <img
                  src={OngoingTrainingandInnovation}
                  alt="Ongoing Training and Innovation"
                  className="w-1/2 h-auto mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">
                  Ongoing Training and Innovation
                </h3>
                <p>
                  We believe in continuous improvement and stay up-to-date with
                  the latest trends and technologies in the car detailing
                  industry. This commitment to innovation allows us to offer the
                  best possible service to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose Us? Ends Here */}
        {/* Contact Information */}
        <div className="py-16 px-4 md:px-16 lg:px-32 text-center">
          <p className="text-lg mb-4">
            We would love to hear from you! Whether you have questions about our
            services...
          </p>
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Contact Us
          </a>
        </div>

        {/* Contact Information Ends Here */}
      </div>
    </>
  );
};

export default AboutUsPage;
