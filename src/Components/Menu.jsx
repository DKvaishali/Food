import React from 'react';
import Img2 from '../assets/images/A.png';
import Img3 from '../assets/images/I.png';
import Img1 from '../assets/images/G.png';
import Img5 from '../assets/images/B.png'; 
import Img4 from '../assets/images/J.png';
import Img7 from '../assets/images/C.png';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      title: "Chicken Biryani",
      price: "$10",
      description: "Chicken biryani, tender chicken, and herbs, cooked to perfection for a deliciously flavorful experience.",
      image: Img1,
    },
    {
      id: 2,
      title: "Mutton Biryani",
      price: "$15",
      description: "Tender, flavorful mutton slow-cooked with aromatic basmati rice, spices, and herbs for a rich, savory experience.",
      image: Img2,
    },
 
    {
        id:4,
        title:"Egg Biryani",
        price:"$20",
        description:"Egg biryani is a fragrant, flavorful rice dish with perfectly boiled eggs, blend of basmati rice.",
        image:Img4,
    },
    {
        id:4,
        title:"Biryani",
        price:"$20",
        description:"biryani is a fragrant, flavorful rice dish with perfectly boiled eggs, blend of basmati rice.",
        image:Img3,
    },
    {
        id:4,
        title:"Beary Biryani",
        price:"$20",
        description:"biryani is a fragrant, flavorful rice dish with perfectly boiled eggs, blend of basmati rice.",
        image:Img5,
    },
    {
        id:4,
        title:"Mughlai Biryani",
        price:"$20",
        description:"biryani is a fragrant, flavorful rice dish with perfectly boiled eggs, blend of basmati rice.",
        image:Img7,
    },

    // Add more items as needed
  ];

  return (
    <div className="container mx-auto mt-20 p-8">
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Our Menu Pricing</h1>
        <p className="text-gray-600 mt-2">
          Explore our delicious biryani offerings, crafted with the finest ingredients and spices.
        </p>
      </div>

      {/* Menu List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuItems.map((item) => (
          <div key={item.id} className="flex items-start space-x-4 border-b pb-4">
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="h-20 w-16 rounded"
            />
            {/* Title and Price */}
            <div>
              <h2 className="text-xl font-semibold">{item.title} <span className="text-gray-400"> — {item.price}</span></h2>
              {/* Description */}
              <p className="text-gray-500 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
