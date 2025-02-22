import React from 'react';
import { BiHome, BiStats, BiSmile, BiTask, BiMessage, BiHelpCircle, BiSolidCalendarPlus,BiCart} from "react-icons/bi";
import {Link} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='flex flex-col h-full w-64 gap-6 p-4 bg-beige  text-[#e4b9b9] shadow-lg'>
      
      {/* Header */}
      <div className='flex items-center justify-center gap-4 p-4 rounded-xl shadow-md'>
        <BiSmile className='text-3xl' />
        <h2 className='text-lg font-semibold'>WELCOME</h2>
      </div>

      {/* Sidebar Links */}
      <div className='flex flex-col gap-4'>
        {[
          { icon: <BiHome />, text: "Dashboard" ,href:""},
          { icon: <BiTask />, text: "ALL PRoducts" ,href:""},
          { icon: <BiStats />, text: "View Stats", href:""},
          { icon: <BiCart />, text: "View orders" ,href:""},
          { icon: <BiSolidCalendarPlus />, text: "Add Products", href:"/ShopkeeperaddSpecs"}
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            className='flex items-center gap-4 px-4 py-3  text-[#8e6060] rounded-xl shadow-md 
                      transition-all duration-300 hover:bg-[#27374d] hover:scale-105'
          >
            {item.icon}
            <span className="font-medium">{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
