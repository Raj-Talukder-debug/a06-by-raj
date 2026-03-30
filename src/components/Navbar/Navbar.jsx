import React, { useState } from 'react';
import { CiMenuFries, CiShoppingCart } from 'react-icons/ci';
import { LuShoppingCart } from 'react-icons/lu';
import DigiTool from '../../../assets/products/DigiTools.png'
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
      <nav>
        <div className="flex justify-between  md:justify-around  items-center shadow-sm p-4">
          <span
            onClick={() => setOpen(!open)}
            className="flex  gap-4 cursor-pointer  "
          >
            {open ? (
              <IoMdClose className="md:hidden"></IoMdClose>
            ) : (
              <CiMenuFries className="md:hidden"></CiMenuFries>
            )}
            
              <ul
                className={`md:hidden absolute bg-white shadow-2xl p-4 font-semibold space-y-2 duration-1000 cursor-pointer
                
                ${open ? "top-15" : "-top-64"}

                `}
              >
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
              </ul>
              <div className="  md:hidden w-[100px] ">
                <img src={DigiTool} alt="DigiTools" />
              </div>
            
            <div className=" md:flex hidden w-[150px]">
              <img src={DigiTool} alt="DigiTools" />
            </div>
          </span>

          <ul className="md:flex hidden gap-10 font-semibold text-[#101727] ">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>

          <div className="flex gap-4 items-center">
            <p className="flex items-center font-semibold gap-4">
              <LuShoppingCart></LuShoppingCart> Login
            </p>
            <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;