const AboutUsPreview = () => {
  return (
    <div className="mb-7 sm:px-10 px-3">
      <div className="flex justify-center mb-0">
        <h1 className="text-center font-bold text-2xl tracking-tight lg:mt-16 border-2 p-4 w-fit">
          About Us Preview
        </h1>
      </div>
      <p className="border-2 p-1 my-2 max-w-max py-6 font-light tracking-tighter lg:text-2xl mt-0 mb-0 sm:px-10">
        Welcome to <span className="text-orange-600">LMV Auto Detailing</span>,
        your premier mobile car wash and detailing service in Liverpool! With
        over 28 years of experience, our team, led by Steve Ward, is dedicated
        to delivering exceptional care and protection for your vehicle. Fully
        insured and Titan accredited, we offer a range of services including
        deep cleaning, paint correction, and protective coatings to keep your
        car looking its best. Whether you&apos;re at home or at work, our mobile
        service brings professional car care right to your doorstep. At{" "}
        <span className="text-orange-600">LMV</span>, we believe in quality,
        convenience, and a commitment to excellence.
      </p>
      <a href="/about">
        <button className="border-2 bg-blue-700 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 px-6 py-2 text-blue-200 mt-0">
          Read more About Us
        </button>
      </a>
    </div>
  );
};

export default AboutUsPreview;
