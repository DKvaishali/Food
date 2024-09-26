import React from 'react';
import BriyaniImg from '../assets/images/food1.png';
// import Vector from '../assets/images/Vector.png';
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";


const About = () => {
    // const bgImage = {
    //     backgroundImage: `url(${Vector})`,
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     height: "100%",
    //     width: "100%",
    //   };
      return (
        <>
          <div className="min-h-screen mt-16" >
            <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
              <div
                data-aos="slide-up"
                data-aos-duration="300"
                className="container"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Image section */}
                  <div>
                    <img
                      src={BriyaniImg}
                      alt="biryani img"
                      className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                    />
                  </div>
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-6 sm:pt-0">
                    <h1 className="text-2xl sm:text-4xl font-bold">
                      
                  Deliciously Spiced Rice Delight
                    </h1>
                    <p className="text-lg text-gray-500  leading-7">
                    Biryani is a flavorful South Asian dish combining rice, meat (chicken, mutton, or fish), 
                    and aromatic spices. Originating from Persian cuisine, it has various regional versions, 
                    like Hyderabadi, Lucknowi, and Kolkata biryani. Often garnished with fried onions, 
                    boiled eggs, and fresh herbs, it is traditionally served with raita or a boiled egg.
                    </p>
                    <div className="flex gap-6">
                      <div>
                        <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                      </div>
                      <div>
                        <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                      </div>
                      <div>
                        <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                      </div>
                    </div>
                    <div>
                    <button className='bg-gradient-to-r from-primary text-xl font-semibold
                to-secondary text-black  px-20 py-4
                rounded-full hover:scale-105 duration-200
                '>

                    Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
};

export default About
