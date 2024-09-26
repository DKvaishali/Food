import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.png';
import { IoCallOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import newsletterBg from '../assets/images/newsletter-bg.jpg'; // Import the background image

const Contact = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div className="min-h-[750px] mt-10">
        {/* Newsletter Section */}
        <div
          className="bg-cover bg-fixed bg-center relative"
          style={{ backgroundImage: `url(${newsletterBg})` }} // Set background image
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto py-16 relative z-10">
            <h2 className="text-4xl font-bold text-center text-white mb-6">
              Newsletter
            </h2>
            <p className="text-center mb-10 text-white">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="max-w-lg mx-auto relative">
              <input
                type="email"
                placeholder="Enter your e-mail id"
                className="w-full p-3 border-2 border-dotted border-gray-300 bg-gray-100 text-gray-800 rounded"
              />
              <button
                className="absolute top-0 right-0 h-full px-5 flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-r"
                type="submit"
              >
                 <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 dark:bg-gray-950" id="footer">
  <section className="container mx-auto max-w-[1000px] sm:max-w-full">
    <div className="flex flex-col md:flex-row justify-between py-5 px-5">
      {/* Company Information */}
      <div className="flex-1 py-8 px-4 flex flex-col items-center md:items-start">
        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-center mb-3 flex items-center gap-3">
          <img src={logo} alt="Logo" className="max-w-[70px]" />
          Spice Haven
        </h1>
        <p className="text-lg sm:text-xl text-center md:text-left">
          Delicious biryani delivered with love. Order now for authentic flavors and free delivery on orders over ₹500.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <FiMapPin className="font-semibold text-xl" />
          <p className="text-lg">Pune, Pimpri-Chinchwad</p>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <IoCallOutline className="font-semibold text-xl" />
          <p className="text-lg">+91 123456789</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-3 mt-6 justify-center sm:justify-start">
          <a href="#">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="#">
            <FaFacebook className="text-3xl" />
          </a>
          <a href="#">
            <FaLinkedin className="text-3xl" />
          </a>
        </div>
      </div>

      {/* Links and Menu Sections */}
      <div className="flex-1 flex justify-between md:pl-8 flex-wrap gap-5 sm:gap-10">
        <div className="py-8 px-1 text-center md:text-left">
          <h1 className="sm:text-2xl text-xl font-semibold mb-3">Opening Hours</h1>
          <ul className="flex flex-col gap-2">
            <li>
              <h2 className="text-lg">Monday - Thursday</h2>
              <p className="text-lg">11:00 AM - 9:00 PM</p>
            </li>
            <li>
              <h2 className="text-lg">Friday - Saturday</h2>
              <p className="text-lg">11:00 AM - 5:00 PM</p>
            </li>
          </ul>
        </div>

        <div className="py-8 px-2 text-center md:text-left">
          <h1 className="sm:text-xl text-lg font-semibold mb-3">New Menu Biryani</h1>
          <ul className="flex flex-col gap-3">
            <li className="text-lg cursor-pointer hover:text-xl">Beary Biryani</li>
            <li className="text-lg cursor-pointer hover:text-xl">Mughlai Biryani</li>
            <li className="text-lg cursor-pointer hover:text-xl">Bhatkali Biryani</li>
            <li className="text-lg cursor-pointer hover:text-xl">Fish Biryani</li>
          </ul>
        </div>

        <div className="py-8 px-4 text-center md:text-left">
          <h1 className="sm:text-2xl text-xl font-semibold mb-3">Links</h1>
          <ul className="flex flex-col gap-3">
            <li className="text-lg cursor-pointer hover:text-xl">
              <a href="/home">Home</a>
            </li>
            <li className="text-lg cursor-pointer hover:text-xl">
              <a href="/Banner">About</a>
            </li>
            <li className="text-lg cursor-pointer hover:text-xl">
              <a href="/services">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="text-center py-5 border-t-2 border-gray-300/90 flex justify-between items-center">
              <span>© 2024 All rights reserved || Made with Spice Haven.</span>
              <button onClick={handleScrollToTop} className="text-3xl text-primary cursor-pointer">
                <FaArrowUp />
              </button>
            </div>
  </section>
</div>
      </div>
    </>
  );
};

export default Contact;
