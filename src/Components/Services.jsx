// import React from 'react';
// import Img2 from '../assets/images/food1.png';
// import Img1 from '../assets/images/food2.png';
// import Img3 from '../assets/images/fish1.png';
// import Img4 from '../assets/images/food5.png';
// import Img5 from '../assets/images/plate1.png';
// import Img6 from '../assets/images/plate2.png';
// import Img7 from '../assets/images/plate3.png';
// import Img8 from '../assets/images/biryani3.png';

// const ServicesData = [
//     {
//         id:1,
//         img:Img2,
//         name:"Briyani",
//         description :
//         "Biryani: Aromatic rice dish layered with marinated meat or vegetables, infused with rich spices, and garnished with fried onions and herbs."
//     },
//     {
//         id:2,
//         img:Img1,
//         name:" Egg Briyani",
//         description :
//         "Egg biryani is a fragrant, flavorful rice dish with perfectly boiled eggs, aromatic spices, and a blend of basmati rice."
//     },
//     {
//         id:3,
//         img:Img3,
//         name:" Fish Briyani",
//         description :
//         "Fish Biryani: Aromatic basmati rice cooked with tender fish pieces, fragrant spices, and fresh herbs, creating a flavorful and satisfying dish."
//     },
//     {
//         id:4,
//         img:Img4,
//         name:" Chiken Briyani",
//         description :
//         "Chicken biryani: aromatic basmati rice, tender chicken, exotic spices, saffron, and herbs, cooked to perfection for a deliciously flavorful experience."
//     },
//     {
//         id:4,
//         img:Img5,
//         name:" Chiken Briyani",
//         description :
//         "Chicken biryani: aromatic basmati rice, tender chicken, exotic spices, saffron, and herbs, cooked to perfection for a deliciously flavorful experience."
//     },
//     {
//         id:4,
//         img:Img6,
//         name:" Chiken Briyani",
//         description :
//         "Chicken biryani: aromatic basmati rice, tender chicken, exotic spices, saffron, and herbs, cooked to perfection for a deliciously flavorful experience."
//     },
//     {
//         id:4,
//         img:Img7,
//         name:" Chicken Briyani",
//         description :
//         "Chicken biryani: aromatic basmati rice, tender chicken, exotic spices, saffron, and herbs, cooked to perfection for a deliciously flavorful experience."
//     },
//     {
//         id:4,
//         img:Img8,
//         name:" Chiken Briyani",
//         description :
//         "Chicken biryani: aromatic basmati rice, tender chicken, exotic spices, saffron, and herbs, cooked to perfection for a deliciously flavorful experience."
//     },

// ]

// const Services = () => {
//   return (
//     <>
//      <div className="min-h-[750px] mt-16" >
//      <div className="py-10" id='services'>
//         <div className="container">
//             <div className='text-center mb-20
//             max-w-[400px] mx-auto'>
//                 <p className='text-5xl font-bold pb-4 bg-clip-text
//                 text-transparent bg-gradient-to-r
//                 from-primary to-secondary'>Biryani Delight</p>

//                 <p className='text-xl
//                 text-gray-400'>Authentic biryani crafted with premium ingredients, offering a perfect blend of spices for an unforgettable taste.
//                 </p>
//             </div>
//             {/*Card Section */}
//             <div className='grid 
//              sm:grid-cols-4 gap-6 sm:gap-10 md:gap-y-20 place-content-center'>
//             {
//                 ServicesData.map(({id,img,name,description})=>{
//                     return (
//                         <div>
//                         <div 
//                         data-aos="zoom-in"
//                         data-aos-duration="300"
//                         key={id}
//                         className="rounded-2xl items-center p-4 bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]">
//                        {/* className='max-w-[300px]  rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary hover:text-white duration-300
//                         p-4 shadow-xl'*/}
//                             <div className='h-[100px]'>
//                                 <img src={img} alt=""  
//                                 className='max-w-[200px] mx-auto 
//                                 block transform -translate-y-20
//                                 group-hover:scale-105
//                                 group-hover:rotate-6 duration-300'/>
//                                 </div>
//                                 <div className='p-4 text-center'>
//                                 <h1 className='text-xl font-bold group-hover:text-black'>{name}</h1>
//                                 <p className='text-gray-400 
//                                 group-hover:text-black duration-300 text-sm 
//                                 line-clamp-2 
//                                 '>{description}</p>
//                                 </div>
//                                 </div>
//                                 </div>
//                     )
//                 })
//             }
//             </div>
//             </div>
//             </div> 
//     </div>
//     </>
//   )
// }

// export default Services
import React from 'react';
import Img2 from '../assets/images/A.png';
import Img3 from '../assets/images/B.png';
import Img1 from '../assets/images/J.png';
import Img4 from '../assets/images/D.png';
import Img5 from '../assets/images/E.png';
import Img6 from '../assets/images/F.png';
import Img7 from '../assets/images/food4.png';
import Img8 from '../assets/images/H.png';
import one from '../assets/images/3.png';
import two from '../assets/images/2.png';
import three from '../assets/images/1.png';


const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Biryani",
        description:
            "Biryani: Aromatic rice dish layered with marinated meat or vegetables, infused with rich spices, and garnished with fried onions and herbs."
    },
    {
        id: 2,
        img: Img1,
        name: "Egg Biryani",
        description:
            "Egg biryani is a fragrant, flavorful rice dish with perfectly boiled eggs, aromatic spices, and a blend of basmati rice."
    },
    {
        id: 3,
        img: Img3,
        name: "Fish Biryani",
        description:
            "Fish Biryani: Aromatic basmati rice cooked with tender fish pieces, fragrant spices, and fresh herbs, creating a flavorful and satisfying dish."
    },
    {
        id: 4,
        img: Img4,
        name: "Chicken Biryani",
        description:
            "Chicken biryani: aromatic basmati rice, tender chicken, exotic spices, saffron, and herbs, cooked to perfection for a deliciously flavorful experience."
    },
    {
        id: 5,
        img: Img5,
        name: "Fish Biryani",
        description:
            "Fish Biryani: Aromatic basmati rice cooked with tender fish pieces, fragrant spices, and fresh herbs, creating a flavorful and satisfying dish."
    },
    {
        id: 6,
        img: Img6,
        name: "Beary Biryani",
        description:
            "Aromatic chicken curry, rice, bread, and traditional side dishes.Spiced fish curry, rice, bread, and flavorful regional accompaniments"
    },
    {
        id: 7,
        img: Img7,
        name: "Mughlai Biryani",
        description:
            "Fragrant rice, mixed vegetables, and flavorful Indian sides, cooked to perfection."
    },
    {
        id: 8,
        img: Img8,
        name: "Chicken Biryani",
        description:
            "Chicken biryani: aromatic basmati rice, tender chicken, exotic spices, saffron, and herbs, cooked to perfection for a deliciously flavorful experience."
    },
];

const Services = () => {
    return (
        <>
    
                <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center py-10">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                            Our Services
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Service Card 1 */}
                            <div className=" dark:bg-gray-900  dark:hover:bg-primary hover:bg-primary p-6 rounded-lg  transition-shadow duration-300">
                                <div className="flex justify-center">
                                    <img src={one} alt="original food" className='h-32 w-32' />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800 text-center dark:text-white mb-4">Healthy Food</h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Enjoy a wide variety of nutritious meals crafted with fresh, wholesome ingredients.
                                </p>
                            </div>
                            {/* Service Card 2 */}
                            <div className=" dark:bg-gray-900  dark:hover:bg-primary hover:bg-primary p-6 rounded-lg  transition-shadow duration-300">
                            <div className="flex justify-center">
                                <img src={two} alt="original food" className='h-32 w-32' />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800 text-center dark:text-white mb-4">Fastest Delivery</h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Get your meals delivered hot and fresh in no time with our efficient delivery service.
                                </p>
                            </div>
                            {/* Service Card 3 */}
                            <div className=" dark:bg-gray-900  dark:hover:bg-primary hover:bg-primary p-6 rounded-lg transition-shadow duration-300">
                            <div className="flex justify-center">
                                <img src={three} alt="original food" className='h-32 w-32' />
                                </div>
                                <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-4">Original Recipes</h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Savor our unique dishes, made with original recipes that celebrate authentic flavors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hot Meal */}
                <div className="py-10" id='services'>
                    <div className="container">
                        <div className='text-center mb-20 max-w-[550px] mx-auto'>
                            <p className='text-5xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                                Biryani Delight
                            </p>
                            <p className='text-xl text-gray-400'>
                                Authentic biryani crafted with premium ingredients, offering a perfect blend of spices for an unforgettable taste.
                            </p>
                        </div>
                        {/* Card Section */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10'>
                            {
                                ServicesData.map(({ id, img, name, description }) => {
                                    return (
                                        <div key={id} className="flex justify-center mt-10">
                                            <div
                                                data-aos="zoom-in"
                                                data-aos-duration="300"
                                                className="rounded-2xl items-center p-4 bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-2xl shadow-slate-400 duration-high group max-w-[250px] sm:max-w-[300px]">
                                                {/* Card Image */}
                                                <div className='h-[60px]'>
                                                    <img src={img} alt=""
                                                        className='max-w-[150px] mx-auto  block transform -translate-y-20 group-hover:scale-105 group-hover:rotate-6 duration-300' />
                                                </div>
                                                {/* Card Text */}
                                                <div className='p-4 text-center'>
                                                    <h1 className='text-xl font-bold group-hover:text-black'>{name}</h1>
                                                    <p className='text-gray-400 group-hover:text-black duration-300 text-sm pt-2 line-clamp-2'>{description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
        
        </>
    )
}

export default Services;


