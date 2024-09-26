import React from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import Layout from './Components/Layout';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import OrderNow from './Components/OrderNow';
import Menu from './Components/Menu';


const App = () => {
  const router = createBrowserRouter([
    { 
      element:<Layout/>,
      children:[
        {
        path:'/',
        element:<Hero/>
      },
      {
        path:'services',
        element:<Services/>
      },
      {
        path:'About',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'Gallery',
        element:<Gallery/>
      },
      {
        path:'ordernow',
        element:<OrderNow/>
      },
      {
        path:'menu',
        element:<Menu/>
      },
    ]


    }
   
  ])
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      
    <RouterProvider router={router}/>
  
    </div>
  )
}

export default App
