import React from 'react';
import user from '../../../assets/products/user.png';
import pack from '../../../assets/products/package.png'
import rocket from '../../../assets/products/rocket.png'
const Features = () => {
    return (
      <div className="container mx-auto mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#101727] mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-lg mb-16">
            Start using premium digital tools in minutes, not hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-10 border border-gray-100 rounded-3xl shadow-sm bg-white text-center">
              <span className="absolute top-6 right-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-[10px] font-bold h-6 w-6 flex items-center justify-center rounded-full">
                01
              </span>

              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="w-10 h-10  rounded-full">
                  <img src={user} alt="" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#101727] mb-4">
                Create Account
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>

            <div className="relative p-10 border border-gray-100 rounded-3xl shadow-sm bg-white text-center">
              <span className="absolute top-6 right-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-[10px] font-bold h-6 w-6 flex items-center justify-center rounded-full">
                02
              </span>
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="w-10 h-10 ">
                  <img src={pack} alt="" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#101727] mb-4">
                Choose Products
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>

            <div className="relative p-10 border border-gray-100 rounded-3xl shadow-sm bg-white text-center">
              <span className="absolute top-6 right-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-[10px] font-bold h-6 w-6 flex items-center justify-center rounded-full">
                03
              </span>
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <div className="w-10 h-10 ">
                  <img src={rocket} alt="" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#101727] mb-4">
                Start Creating
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Features;