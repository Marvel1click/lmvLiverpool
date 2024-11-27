import CarDetailed from "../assets/images/CarDetailed 2.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col mb-7 p-1 mt-10">
      <div className="sm:w-auto sm:h-auto lg:flex lg:justify-center">
        <img src={CarDetailed} alt="Image of a car being detailed" />
      </div>
      <h1 className="text-2xl font-bold mt-2 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
        LMV Auto Detailing Liverpool
      </h1>
      <p className="text-center text-white tracking-wide">
        Mobile Valeting & Detailing Service
      </p>
      <div>
        <a
          href="https://www.instagram.com/liverpoolmobilevaleting/"
          className="flex sm:w-2/3 sm:mx-auto"
        >
          <button className="border-2 bg-blue-700 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 px-6 py-2 text-blue-200 mt-3 w-full">
            Book Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
