import React from 'react';
import { Link } from 'react-router-dom';
import biryani1 from '../assets/images/food2.png';
import biryani2 from '../assets/images/food4.png';
import veg from '../assets/images/food1.png';
import bg from '../assets/images/lastBBgR.png';
import FreeDelivery from './FreeDelivery';
import NavBar from './NavBar';

const ImageList = [
    {
        Id: 1,
        img: biryani1,
    },
    {
        Id: 2,
        img: biryani2,
    },
    {
        Id: 3,
        img: veg,
    }
]

const bgImage = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
};

const Hero = () => {
    const [imageId, setImageId] = React.useState(veg);

    return (
        <>
            <div
                className="min-h-[900px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
                style={bgImage}
            >
                <div className='container pb-8 sm:pb-0'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                        {/* Text Content Section */}
                        <div className='flex flex-col justify-self-center gap-4 pt-5 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>

                            <div className='md:mt-10 mt-36'>
                                <h1 className='text-3xl sm:mt-0 sm:text-5xl lg:text-5xl font-bold'>
                                    Welcome to <br /> the Spice Heaven
                                </h1>
                                <p className='text-[20px] mt-2 sm:text-xl w-full sm:w-10/12'>
                                    Discover a world of authentic flavors with our expertly crafted biryani, made from premium ingredients for a truly delicious experience.
                                </p>
                            </div>
                            <div className='flex gap-3 pt-6 justify-center sm:justify-start'>
                                <Link to="/ordernow"> {/* Make sure the path matches your route */}
                                    <button className='bg-gradient-to-r from-primary text-lg sm:text-xl font-semibold to-secondary text-black px-12 sm:px-20 py-3 sm:py-4 rounded-full hover:scale-105 duration-200'>
                                        Order Now
                                    </button>
                                </Link>
                                <Link to="/menu">
                                <button className='bg-gradient-to-r bg-[#424242] text-lg sm:text-xl font-semibold
                                to-secondary text-primary px-12 sm:px-20 py-3 sm:py-4 rounded-full hover:scale-105
                                duration-200'>
                                    Menu
                                </button>
                                </Link>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className='order-1 sm:order-2 min-h-[300px] sm:min-h-[300px] flex justify-center items-center relative'>
                            {/* Main Image */}
                            <div className='flex mr-0 sm:mr-10 lg:mr-96 h-[300px] pl-20 sm:h-[350px] w-auto  sm:mt-20 overflow-hidden'>
                                <img
                                    data-aos="zoom-in"
                                    data-aos-duration="300"
                                    data-aos-once="true"
                                    src={imageId}
                                    alt=""
                                    className='ImageB spin w-[400px] h-[400px] mt-20  object-contain'
                                />
                            </div>

                            {/* Image List Section */}
                            <div className='flex  lg:flex-col lg:top-1/2 lg:-translate-y-2/3 lg:py-5 justify-center gap-4 absolute top-[420px] lg:-right-10 bg-gray-400 rounded-full sm:'>
                                {
                                    ImageList.map((item) => (
                                        <img key={item.Id}
                                            src={item.img}
                                            className='max-w-[60px] sm:max-w-[80px] h-[60px] sm:h-[80px] object-contain inline-block hover:scale-105 duration-200'
                                            onClick={() => {
                                                setImageId(
                                                    item.Id === 1 ?
                                                        biryani1 : item.Id === 2 ?
                                                            biryani2 : veg
                                                );
                                            }} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/** Free Delivery */}
                </div>
            </div>
        </>
    );
}

export default Hero;
