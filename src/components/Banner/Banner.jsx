import React from 'react';
import round from '../../../assets/products/round.png'
import icon from '../../../assets/products/Play.png'
import banner from '../../../assets/products/banner.png'

const Banner = () => {
    return (
      <div className="mt-[60px] container mx-auto flex justify-center gap-20 items-center">
        <div className="left space-y-4 ">
          <div className="flex gap-2 items-center border-none bg-gradient-to-r from-[#4F39F6]/15 to-[#4F39F6]/20 rounded-full w-fit px-4 py-2 text-xl">
            <img className="w-5 h-5" src={round} alt="" />
            <p className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] inline-block text-transparent bg-clip-text">
              New: AI-Powered Tools Available
            </p>
          </div>

          <div className="space-y-4">
            <h1 className="font-bold text-[70px] leading-[1.1]  max-w-[700px]">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="text-[#627382] text-xl font-medium  leading-[1.5] max-w-[520px]">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
          </div>
          <div className="flex gap-2">
            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full ">
              Explore Products
            </button>
            {/* <div className="p-[2px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  rounded-full"> */}
              <button className="btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-transparent bg-clip-text  ">
                <img src={icon} alt="" />
                Watch Demo
              </button>
            {/* </div> */}
          </div>
        </div>
        <div className="right w-[400px] ">
            <img src={banner} alt="" />
        </div>
      </div>
    );
};

export default Banner;



