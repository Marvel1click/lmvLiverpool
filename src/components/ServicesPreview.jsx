import DeepCleanImg from "../assets/images/DeepCleanImg.jpg";
import ProtectImg from "../assets/images/ProtectImg.jpg";
import EnchancePaintImg from "../assets/images/EnchancePaintImg.jpg";
import MaintenanceClubImg from "../assets/images/MaintenanceClubImg.jpg";

const ServicesPreview = () => {
  return (
    <div className="sm:px-10">
      <div className="flex justify-center mb-0">
        <h1 className="text-center text-2xl font-bold border-2 p-4 w-fit">
          Our Services Preview
        </h1>
      </div>
      <p className="border-2 p-1 my-2 max-w-max py-6 font-light tracking-tighter lg:text-2xl mt-0 sm:p-10">
        At <span className="text-orange-600">LMV Auto Detailing</span>, we offer
        a comprehensive range of car care services designed to keep your vehicle
        looking immaculate. Our expert team provides:
      </p>
      <div>
        <div className="grid grid-cols-2 mb-3 shadow-[0_0_10px_blue] sm:size-4/5 sm:mx-auto">
          <div>
            <img className="w-full" src={DeepCleanImg} alt="Deep Clean Image" />
          </div>
          <div className="p-2 ml-0">
            <h1 className="underline text-bold text-2xl font-bold text-center">
              Deep Clean
            </h1>
            <p className="p-1 max-w-max py-6 font-light tracking-tighter lg:text-3xl text-sm">
              Our intensive entry-level package goes beyond a regular wash,
              offering a thorough clean that restores your car to like-new
              condition
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 shadow-[0_0_10px_blue] mb-3 sm:size-4/5 sm:mx-auto">
          <img
            className="w-full"
            src={ProtectImg}
            alt="Image of car covered with protection chemical"
          />
          <div className="p-2 ml-0">
            <h1 className="underline text-bold text-2xl font-bold text-center">
              Protect
            </h1>
            <p className="p-1 max-w-max py-6 font-light tracking-tighter lg:text-3xl text-sm">
              This signature service includes full decontamination and
              application of advanced protective coatings, ensuring your car
              stays cleaner for longer while preserving its value.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 shadow-[0_0_10px_slateblue] mb-3 sm:size-4/5 sm:mx-auto">
          <img
            className="w-full"
            src={EnchancePaintImg}
            alt="Using Equipment to remove imperfection on a car"
          />
          <div className="p-2 ml-0">
            <h1 className="underline text-bold text-2xl font-bold text-center">
              Enhance Paint Correction
            </h1>
            <p className="p-1 max-w-max py-6 font-light tracking-tighter lg:text-3xl text-sm">
              Using advanced techniques, we remove imperfections like swirl
              marks and scratches, rejuvenating your car&apos;s paintwork to a
              flawless, glossy finish.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 shadow-[0_0_10px_blue] sm:size-4/5 sm:mx-auto">
          <img
            className="w-full"
            src={MaintenanceClubImg}
            alt="Maintenace Club Image"
          />
          <div className="p-2 ml-0">
            <h1 className="underline text-bold text-2xl font-bold text-center">
              Maintenance Club
            </h1>
            <p className="p-1 max-w-max py-6 font-light tracking-tighter lg:text-3xl text-sm">
              Keep your car in top shape with our regular maintenance services,
              tailored to your needs with flexible scheduling options.
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <a href="/services">
          <button className="border-2 bg-blue-700 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 px-6 py-2 text-blue-200 mb-3 sm:mb-10 xl:mb-10">
            View All Services
          </button>
        </a>
      </div>
    </div>
  );
};

export default ServicesPreview;
