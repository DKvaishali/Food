import React, { useState } from 'react';

const OrderNow = () => {
  // State for handling form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    order: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically handle the form submission, e.g., send data to a server
    console.log('Order submitted:', formData);
  };

  return (
    <div className="min-h-screen flex mt-20 items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">Order Now</h1>

        {/* Order Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name and Email Input */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
          </div>

          {/* Phone and Address Input */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="address" className="block text-gray-700 dark:text-gray-300">Delivery Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                required
              />
            </div>
          </div>

          {/* Order Details */}
          <div>
            <label htmlFor="order" className="block text-gray-700 dark:text-gray-300">Your Order</label>
            <textarea
              id="order"
              name="order"
              value={formData.order}
              onChange={handleInputChange}
              className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-auto  bg-gradient-to-r text-lg self-center from-primary to-secondary text-white py-2 px-4 rounded-full hover:scale-105 duration-300 "
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderNow;
