import React,{useState,useEffect} from "react";
import lightmode from "../assets/images/light.png";
import darkmode from "../assets/images/dark.png";

// const DarkMode = () => {
//   const [theme, setTheme] = React.useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );
//   const element = document.documentElement;
//   React.useEffect(() => {
//     if (theme === "dark") {
//       element.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       element.classList.remove("dark");
//       localStorage.setItem("themt", "light");
//     }
//   }, [theme]);

//   const changeTheme = () => {
//     if (theme === "light") {
//       setTheme("dark");
//     } else {
//       setTheme("light");
//     }
//   };
//   return (
//     <>
//       <div className="relative">
//         <img
//           src={darkmode}
//           alt=""
//           onClick={changeTheme}
//           className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow[1px_1px_1px rgba(0,0,0,0.1)] transition-all duration-300 ${
//             theme !== "dark" ? "opacity-0" : "opacity-100"
//           }`}
//         />
//         <img
//           src={lightmode}
//           alt=""
//           onClick={changeTheme}
//           className="w-12 right-0 z-10 drop-shadow[1px_1px_1px rgba(0,0,0,0.1)] transition-all duration-300"
//         />
//       </div>
//     </>
//   );
// };
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <>
      <div className="relative ">
        <img
          // src={theme === "dark" ? darkPng : lightPng}
          src={lightmode}
          alt="dark"
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
          className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10  ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          } `}
        />
        <img
          src={darkmode}
          alt="dark"
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
          className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300 "
        />
      </div>
    </>
  );
};
export default DarkMode;
