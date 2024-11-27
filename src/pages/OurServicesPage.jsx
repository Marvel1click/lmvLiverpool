import CarWashServiceHero from "../assets/videos/carwashservicehero.mp4";
import DeepCleanServices from "../assets/images/deepcleanservices.jpg";
import ProtectCoatingsServices from "../assets/images/protectcoatingsservices.jpg";
import PaintCorrectionServices from "../assets/images/paintcorrectionservices.jpg";
import MaintenanceClubServices from "../assets/images/maintenanceclubservices.jpg";
import Testimonials from "../components/Testimonials";

const OurServicesPage = () => {
  return (
    <>
      <div className="my-44 mt-0 p-1">
        {/* Hero Section */}
        <div className="relative text-white py-16">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={CarWashServiceHero}
            alt="Car Wash Services"
            className="w-full h-auto object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">
              Professional Mobile Car Detailing and Valeting in Liverpool
            </p>
          </div>
        </div>
        {/* Hero Section Ends Here */}
        {/* Service Overview */}
        <div className="py-16 px-4 sm:px-16 lg:px-32 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Comprehensive Car Care Services
          </h2>
          <p className="text-lg mb-8">
            At <span className="text-orange-500">LMV Auto Detailing</span>, we
            offer a full range of mobile car detailing services to keep your
            vehicle looking its best. From deep cleaning to paint protection,
            our expert team has you covered.
          </p>
        </div>
        {/* Service Overview Ends Here */}
        {/* Detailed Service Descriptions */}
        <div className="py-16 px-4 md:px-16 lg:px-32">
          {/* <!-- Deep Clean Service --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <img
              src={DeepCleanServices}
              alt="Deep Clean Service"
              className="w-full h-auto rounded-md"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4">Deep Clean</h3>
              <p className="text-lg mb-4">
                Our intensive Deep Clean service provides a thorough cleaning
                that goes beyond a regular car wash. We remove dirt, grime, and
                contaminants from every nook and cranny, restoring your vehicle
                to a like-new condition.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  This is our entry level package, once this standard is
                  achieved you are eligible to join our maintenance plan
                </li>
                <li>This is so much more than an average valet</li>
                <li>
                  This is a half day intensive treatment that will deliver a new
                  car feeling!
                </li>
                <li>
                  Small <span className="text-orange-500">£130</span> Medium{" "}
                  <span className="text-orange-500">£140</span> Large{" "}
                  <span className="text-orange-500">£150</span>{" "}
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Protect Service --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="order-last md:order-first">
              <h3 className="text-2xl font-bold mb-4">Protective Coatings</h3>
              <p className="text-lg mb-4">
                Our protective coatings service offers advanced protection
                against the elements, ensuring your car stays cleaner for longer
                and looks great between washes. We use high-quality products
                that enhance your car&apos;s shine and durability.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  This is our signature package; The package is focused on
                  protecting your asset
                </li>
                <li>
                  A full decontamination is carried out to prepare for our
                  durable protective coatings
                </li>
                <li>
                  These deliver unrivalled water repellency, self cleaning
                  properties and breezy maintenance
                </li>
                <li>
                  This means your vehicle stays cleaner for longer and maintains
                  its value. An Engine Bay detail and full interior cleanse are
                  included
                </li>
                <li>
                  Small <span className="text-orange-500">£200</span> Medium{" "}
                  <span className="text-orange-500">£225</span> Large{" "}
                  <span className="text-orange-500">£250</span>{" "}
                </li>
              </ul>
            </div>
            <img
              src={ProtectCoatingsServices}
              alt="Protective Coatings"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* <!-- Paint Correction Service --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <img
              src={PaintCorrectionServices}
              alt="Paint Correction Service"
              className="w-full h-auto rounded-md"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4">Paint Correction</h3>
              <p className="text-lg mb-4">
                Our Paint Correction service is designed to remove imperfections
                like swirl marks and scratches from your car’s paintwork. Using
                advanced machine polishing techniques, we restore your car’s
                original shine and smoothness.
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Our enhance treatment is the removal of defects via machine
                  polishing
                </li>
                <li>
                  Swirl marks, Scratches and other imperfections are removed in
                  order to revolutionise the aesthetic of your vehicle, before
                  locking in the finish with our protective coatings
                </li>
                <li>Vehicles will be quoted following a thorough inspection</li>
              </ul>
              <li>
                <span className="text-orange-500">£350</span> Day Rate
              </li>
            </div>
          </div>

          {/* <!-- Maintenance Club Service --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="order-last md:order-first">
              <h3 className="text-2xl font-bold mb-4">Maintenance Club</h3>
              <p className="text-lg mb-4">
                Join our Maintenance Club for regular car care services tailored
                to your needs. Keep your car in top condition with our flexible
                scheduling options and personalized service packages.
              </p>
              <ul className="list-disc pl-5">
                <li>Great results regularyly!!!</li>
                <li>
                  Our Maintenance Club is exclusively for regular clients who
                  use our services 2/4/6 weekly
                </li>
                <li>
                  Any bookings beyond 6 weeks will require a Deep Cleaning
                  booking
                </li>
                <li>
                  Small <span className="text-orange-500">£80</span> Medium{" "}
                  <span className="text-orange-500">£90</span> Large{" "}
                  <span className="text-orange-500">£100</span>{" "}
                </li>
              </ul>
            </div>
            <img
              src={MaintenanceClubServices}
              alt="Maintenance Club"
              className="w-full h-auto rounded-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div className="order-last md:order-first">
              <h3 className="text-2xl font-bold mb-4">Extras</h3>
              <ul className="list-disc pl-5">
                <li>
                  1 Year ceramic coating{" "}
                  <span className="text-orange-500">£80</span> / 3 Year ceramic
                  coating <span className="text-orange-500">£100</span>
                </li>
                <li>
                  5 Year ceramic coating{" "}
                  <span className="text-orange-500">£120</span>
                </li>
                <li>
                  12 Months glass coating{" "}
                  <span className="text-orange-500">£30</span>
                </li>
                <li>
                  Leather protection{" "}
                  <span className="text-orange-500">£30</span> / Fabric
                  Protection <span className="text-orange-500">£40</span>
                </li>
                <li>
                  Engine Bay detail <span className="text-orange-500">£40</span>
                </li>
                <li>
                  Soft top protection{" "}
                  <span className="text-orange-500">£50</span>
                </li>
                <li>
                  Interior Only <span className="text-orange-500">£80</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Detailed Service Descriptions Ends Here*/}
        <div className="py-16 px-4 md:px-16 lg:px-32 text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
          <div>
            <Testimonials />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServicesPage;
