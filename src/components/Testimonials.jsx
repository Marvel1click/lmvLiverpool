import React, { useState } from "react";
import TestimonialAlex from "../assets/images/TestimonialAlex.jpg";
import TestimonialSarah from "../assets/images/TestimonialSarah.png";
import TestimonialMichael from "../assets/images/TestimonialMichael.jpg";
import TestimonialEmma from "../assets/images/TestimonialEmma.jpg";
import TestimonialJohn from "../assets/images/TestimonialJohn.jpg";

const Testimonials = () => {
  const Testimonial_data = [
    {
      img: TestimonialJohn,
      content_text:
        "LMV Auto Detailing is the best in the business! Steve and his team did an incredible job on my car. It looks brand new again! The convenience of their mobile service is unbeatable, and the attention to detail is impressive. Highly recommend!",
      testimonial_name: "John D.",
      testimonial_location: "Liverpool",
    },
    {
      img: TestimonialSarah,
      content_text:
        "I'm so glad I found LMV Auto Detailing. Their Protect package is fantastic! My car stays cleaner for much longer, and the paintwork looks amazing. The team is professional, friendly, and always on time. I won't go anywhere else for my car care needs.",
      testimonial_name: "Sarah M.",
      testimonial_location: "Merseyside",
    },
    {
      img: TestimonialAlex,
      content_text:
        "The Enchance Paint Correction service is a game-changer. My car had some scratches and dull spots, but after LMV worked their magic, it looks as good as new. The difference is night and day. Thank you for the excellent work!",
      testimonial_name: "Alex P.",
      testimonial_location: "SouthPort",
    },
    {
      img: TestimonialEmma,
      content_text:
        "I joined the LMV Maintenance Club, and it's the best decision I've made for my car. The regular cleanings keep my vehicle looking sharp all year round. Plus, Steve and his team are always so accommodating with my schedule. Top-notch service.",
      testimonial_name: "Emma R.",
      testimonial_location: "Liverpool",
    },
    {
      img: TestimonialMichael,
      content_text:
        "I've been using LMV Auto Detailing for over 3 years, and I'm always impressed with the quality of their work. Their commitment to customer satisfaction is evident in every detail. My car looks better than ever, thanks to their exceptional care and expertise.",
      testimonial_name: "Michael T.",
      testimonial_location: "Chester",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === Testimonial_data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? Testimonial_data.length - 1 : prev - 1));
  };

  return (
    <section className="flex sm:h-auto justify-center items-center sm:my-5">
      <div className="max-w-md mx-auto p-8 bg-neutral-800 rounded-lg shadow-lg w-96 lg:w-full lg:h-auto lg:max-w-max">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {Testimonial_data.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col items-center justify-center"
              >
                <div className="pb-4 flex items-start gap-4">
                  <img
                    src="https://assets.website-files.com/5fef5619b640934b33c2385e/5ff6a53da27356854576b920_Group%2058.svg"
                    alt="Quote Icon"
                    className="w-6 h-6"
                  />
                  <h2 className="text-purple-400 text-xl font-bold">
                    {item.content_text}
                  </h2>
                </div>
                <div className="flex gap-4 items-center">
                  <div>
                    <img
                      src={item.img}
                      alt=""
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">
                      {item.testimonial_name}
                    </h6>
                    <span className="text-white">
                      {item.testimonial_location}
                    </span>
                  </div>
                  <div>
                    <svg
                      fill="#000000"
                      height="24px"
                      width="24px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 330 330"
                      xmlSpace="preserve"
                      className="w-12 h-12"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          id="XMLID_222_"
                          d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                          className={`w-12 h-12 transition-transform duration-300 transform ${
                            index === current ? "rotate-0" : "rotate-180"
                          }`}
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-amber-600 rounded-full p-2" onClick={prevSlide}>
            Prev
          </button>
          <button
            className="bg-amber-600 rounded-full p-2 ml-2"
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
