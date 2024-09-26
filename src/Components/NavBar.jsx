
// import React, { useState } from "react";
// import logo from "../assets/images/logo.png";
// import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
// import DarkMode from "./DarkMode";
// import { Link, useLocation } from "react-router-dom";


// const Menu = [
//   {
//     id: 1,
//     name: "Home",
//     link: "/",
//   },
//   {
//     id: 2,
//     name: "Services",
//     link: "/services",
//   },
//   {
//     id: 3,
//     name: "About",
//     link: "/about",
//   },
//   {
//     id: 4,
//     name: "Contact",
//     link: "/contact",
//   },
  
// ];
// const NavBar = () => {
//   let { pathname } = useLocation();
//   let subpage = pathname.split("/")?.[1];
  
//   const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle


//   function Linkness(type = null) {
//     let classes = "inline-block text-lg py-2 sm:py-4 sm:px-4 hover:text-primary";
//     if (type === subpage) {
//       classes += "text-primary";
//     } else {
//       classes += "text-white";
//     }
//     return classes;
//   }

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className="shadow-md h-20 bg-white dark:bg-gray-900 dark:text-white duration-200 fixed w-full z-20 top-0 start-0">
//         <div className="container py-2 sm:px-0">
//           <nav className="flex justify-between items-center">
//             <div>
//               <a href="/hero" className="flex items-center gap-2 text-2xl sm:text-xl font-bold">
//                 <img src={logo} alt="Master chef" className="w-14" />
//               </a>
//             </div>
//             <div className="flex items-center gap-4">
//               <div>
//                 <DarkMode />
//               </div>

//               {/* Hamburger Menu for Mobile */}
//               <div className="sm:hidden">
//                 <button onClick={toggleMenu} className="text-white text-3xl">
//                   {isOpen ? <MdClose /> : <MdMenu />}
//                 </button>
//               </div>

//               {/* Desktop Menu */}
//               <ul className="hidden sm:flex items-center gap-4">
//                 {Menu.map((menu) => (
//                   <li key={menu.id}>
//                     <a
//                       href={menu.link}
//                       className="inline-block py-4 px-4 hover:text-yellow-500"
//                     >
//                       {menu.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>

//               {/* Order Button */}
//               <Link to="/Ordernow" className="hidden sm:flex">
//       <button className="bg-gradient-to-r text-lg from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 flex items-center gap-2">
//         Order
//         <MdOutlineShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//       </button>
//     </Link>
//             </div>
//           </nav>

//           {/* Mobile Menu Items */}
//           {isOpen && (
//             <ul className="sm:hidden flex flex-col items-center gap-4 mt-4 bg-gray-800 py-4">
//               <li>
//                 <Link to={"/"} className={Linkness("")} onClick={toggleMenu}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to={"/services"} className={Linkness("services")} onClick={toggleMenu}>
//                   Menu
//                 </Link>
//               </li>
//               <li>
//                 <Link to={"/about"} className={Linkness("about")} onClick={toggleMenu}>
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to={"/contact"} className={Linkness("contact")} onClick={toggleMenu}>
//                   Contact
//                 </Link>
//               </li>
//               <li>
//               <Link to={"/ordernow"} className="flex" >
//       <button className="bg-gradient-to-r text-lg from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 flex items-center gap-2">
//         Order
//         <MdOutlineShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
//       </button>
//     </Link>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;
import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import DarkMode from "./DarkMode";
import { Link, useLocation } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Services",
    link: "/services",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id:4,
    name:"Gallery",
    link:"/gallery",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
];

const NavBar = () => {
  let { pathname } = useLocation();
  let subpage = pathname.split("/")?.[1];
  
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle

  function Linkness(type = null) {
    let classes = "inline-block text-lg py-2 sm:py-4 sm:px-4 hover:text-primary";
    if (type === subpage) {
      classes += " text-primary";
    } else {
      classes += " text-white";
    }
    return classes;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-md h-20 bg-white dark:bg-gray-900 dark:text-white duration-200 fixed w-full z-20 top-0 start-0">
      <div className="container py-2 sm:px-0">
        <nav className="flex justify-between items-center">
          <div>
            <Link to="/hero" className="flex items-center gap-2 text-2xl sm:text-xl font-bold">
              <img src={logo} alt="Master chef" className="w-14" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <DarkMode />
            {/* Hamburger Menu for Mobile */}
            <div className="sm:hidden">
              <button onClick={toggleMenu} className="text-white text-3xl">
                {isOpen ? <MdClose /> : <MdMenu />}
              </button>
            </div>
            {/* Desktop Menu */}
            <ul className="hidden sm:flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <Link to={menu.link} className="inline-block font-semibold py-4 px-4 hover:text-yellow-500">
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Order Button */}
            <Link to="/ordernow" className="hidden sm:flex">
              <button className="bg-gradient-to-r text-lg from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 flex items-center gap-2">
                Order
                <MdOutlineShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </Link>
          </div>
        </nav>
        {/* Mobile Menu Items */}
        {isOpen && (
          <ul className="sm:hidden flex flex-col items-center gap-4 mt-4 bg-gray-800 py-4">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.link} className={Linkness(menu.name.toLowerCase())} onClick={toggleMenu}>
                  {menu.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/ordernow" className="flex" onClick={toggleMenu}>
                <button className="bg-gradient-to-r text-lg from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 flex items-center gap-2">
                  Order
                  <MdOutlineShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;

