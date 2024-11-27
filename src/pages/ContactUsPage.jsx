import ContactUsHeroVid from "../assets/videos/ContactUsHero.mp4";

const ContactUsPage = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="relative text-white py-16">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={ContactUsHeroVid}
            alt="Contact Us"
            className="w-full h-auto object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">
              We’re here to help with all your car detailing needs. Reach out
              today!
            </p>
          </div>
        </div>
        {/* Hero Section Ends Here */}
        {/* Contact Form */}
        <div className="py-16 px-4 md:px-16 lg:px-32">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <p className="text-lg text-center mb-8">
            Have questions about our services, want a quote, or ready to book?
            Fill out the form below, and we’ll get back to you as soon as
            possible.
          </p>
          <div className="max-w-lg mx-auto">
            <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4 ">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-black dark:bg-black"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-black dark:bg-black"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline bg-black dark:bg-black"
                  id="message"
                  rows="4"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Contact Form Ends Here */}
        {/* Direct Contact Information */}
        <div className="py-16 px-4 md:px-16 lg:px-32 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
          <div className="flex flex-col items-center mb-8">
            <p className="text-lg font-bold">
              Phone:{" "}
              <a
                href="tel:+447956494838"
                className="text-blue-500 hover:underline"
              >
                +44 7956 494 838
              </a>
            </p>
            <p className="text-lg font-bold">
              Email:{" "}
              <a
                href="mailto:wardxxx@aol.com"
                className="text-blue-500 hover:underline"
              >
                wardxxx@aol.com
              </a>
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold">Business Hours</h3>
            <p className="text-lg">Monday - Friday: 7:00 AM - 5:30 PM</p>
            <p className="text-lg">Saturday: 7:00 AM - 5:30 PM</p>
            <p className="text-lg">Sunday: Closed</p>
          </div>
        </div>
        {/* Direct Contact Information Ends Here */}
        {/* Location / Service Area Map */}
        <div className="py-16 px-4 md:px-16 lg:px-32">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Service Area
          </h2>
          <p className="text-lg text-center mb-8">
            We offer mobile detailing services across Liverpool and surrounding
            areas. Check the map below to see if we serve your location.
          </p>
          <div className="max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147907.67448098538!2d-3.083738834135435!3d53.39314886462989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487adf8a647060b7%3A0x42dc046f3f176e01!2sLiverpool!5e1!3m2!1sen!2suk!4v1725828832168!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md shadow-md"
            ></iframe>
          </div>
        </div>
        {/* Location / Service Area Map Ends Here*/}
      </div>
    </>
  );
};

export default ContactUsPage;
