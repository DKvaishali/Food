import React from 'react';
import bg from '../assets/images/newsletter-bg.jpg';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="bg-cover bg-fixed bg-center relative"
             style={{ backgroundImage: {bg} }}
             >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto py-16 relative z-10">
                    <h2 className="text-4xl font-bold text-center text-white mb-6">Newsletter</h2>
                    <p className="text-center mb-10">Subscribe to our newsletter for the latest updates and offers.</p>
                    <form className="max-w-lg mx-auto relative">
                        <input type="email" placeholder="Enter your e-mail id" className="w-full p-3 border-2 border-dotted border-gray-300 bg-gray-100 text-gray-800 rounded" />
                        <button className="absolute top-0 right-0 h-full px-5 flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-r" type="submit">
                            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div className="bg-gray-800 py-16">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full lg:w-1/4 mb-8 lg:mb-0 text-center lg:text-left">
                            <img src="images/logo.png" alt="Biryani Restaurant" className="mx-auto lg:mx-0 mb-4" />
                            <p>Experience the authentic taste of biryani at our restaurant.</p>
                            <div className="flex justify-center lg:justify-start mt-4">
                                <a href="#" className="mx-2 text-white hover:text-orange-500"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="mx-2 text-white hover:text-orange-500"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="mx-2 text-white hover:text-orange-500"><i className="fa fa-instagram"></i></a>
                                <a href="#" className="mx-2 text-white hover:text-orange-500"><i className="fa fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
                            <h3 className="text-xl font-semibold mb-4">New Menu</h3>
                            <ul>
                                <li className="mb-2"><a href="#" className="hover:text-orange-500">Chicken Biryani</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-orange-500">Mutton Biryani</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-orange-500">Veg Biryani</a></li>
                                <li className="mb-2"><a href="#" className="hover:text-orange-500">Hyderabadi Biryani</a></li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
                            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                            <p><i className="fa fa-map-signs mr-2" aria-hidden="true"></i> 123 Biryani Street, Flavor Town</p>
                            <p><i className="fa fa-phone mr-2" aria-hidden="true"></i> +1 234 567 890</p>
                            <p><i className="fa fa-envelope mr-2" aria-hidden="true"></i> <a href="mailto:info@biryani.com" className="hover:text-orange-500">info@biryani.com</a></p>
                        </div>
                        <div className="w-full lg:w-1/4">
                            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
                            <ul>
                                <li className="flex justify-between mb-2"><span>Monday - Thursday</span><span>11:00 AM - 10:00 PM</span></li>
                                <li className="flex justify-between mb-2"><span>Friday - Saturday</span><span>11:00 AM - 11:00 PM</span></li>
                                <li className="flex justify-between"><span>Sunday</span><span>12:00 PM - 9:00 PM</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 py-4 text-center">
                <p>&copy; 2024 Biryani Restaurant. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
