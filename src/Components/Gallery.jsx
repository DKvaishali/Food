import React from 'react';
import img1 from '../assets/images/gallery-1.jpg';
import img2 from '../assets/images/gallery-2.jpg';
import img3 from '../assets/images/gallery-3.jpg';
import img4 from '../assets/images/gallery-4.jpg';
import img5 from '../assets/images/gallery-5.jpg';
import img6 from '../assets/images/gallery-6.jpg';
import img8 from '../assets/images/gallery-8.jpeg';
import img9 from '../assets/images/gallery-9.jpeg';
import img10 from '../assets/images/gallery-10.jpeg';
import img11 from '../assets/images/gallery-11.jpeg';
import img12 from '../assets/images/gallery-12.jpeg';
import img13 from '../assets/images/gallery-13.jpeg';
import img14 from '../assets/images/gallery-14.jpeg';
import img15 from '../assets/images/gallery-15.jpeg';
import img16 from '../assets/images/backImage.jpg';



const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img8, img9, img10, img11, img12,img13,img14,img15,img16];

  return (
    <div className="p-4">
      {/* Heading for the gallery */}
      <h1 className="text-4xl  mt-28 font-bold text-center mb-6">Gallery</h1>
      <h4 className="text-3xl font-bold text-center mb-6">Some Photos from Our Restaurant</h4>
      
      {/* Image gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`Restaurant ${index + 1}`}
              className="w-full h-full transform transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
