import React from 'react';
import { MdDeliveryDining } from "react-icons/md";

const FreeDelivery = () => {
  return (
    <div>
         <div className="FreeDelivery border border-primary  py-1 px-2 rounded-2xl hover:bg-primary text-black">
      <h2 className="flex justify-center items-center text-xl font-bold text-black">< MdDeliveryDining className='font-bold text-4xl px-1 text-primary hover:text-black' />Free Delivery!</h2>
      <p className="text-center text-primary hover:text-black mt-2">
        Enjoy free delivery on orders over ₹500. <br/>
        Order now and savor the deliciousness!
      </p>
    </div>


    </div>
  )
}

export default FreeDelivery
