import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 text-white">
      <h1 className="my-10 text-center text-4xl font-bold">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p id="steveward" className="text-lg">
          SteveWard
        </p>
        <p className="my-3 text-xl">
          E<span className="text-orange-500">S</span>T 1995
        </p>
        <p className="my-3 text-2xl">
          0<span className="text-orange-500">7956</span> 4
          <span className="text-orange-500">94</span> 8
          <span className="text-orange-500">38</span>
        </p>
      </div>
      <div className="flex justify-center text-5xl text-orange-600 my-5">
        <a
          href="https://www.instagram.com/liverpoolmobilevaleting?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="flex justify-center text-xl my-3">
        <h1>
          Made by{" "}
          <a
            href="/"
            className="text-red-500 hover:text-red-400 transition-colors duration-300"
          >
            DigitalMarvel
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
