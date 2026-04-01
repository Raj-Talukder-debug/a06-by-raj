import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="container mx-auto mt-10 bg-[#101727] text-white py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16 text-left">
          
          <div className="">
            <h2 className="text-3xl font-bold mb-6">DigiTools</h2>
            <p className="text-sm leading-relaxed max-w-sm opacity-80">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          
          <div>
            <h4 className="font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm ">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm ">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-semibold mb-6">Social Links</h4>
            <div className="flex gap-3">
              <div className="bg-white p-2 rounded-full text-[#101727] flex items-center justify-center w-9 h-9">
                <FaInstagram  />
              </div>
              <div className="bg-white p-2 rounded-full text-[#101727] flex items-center justify-center w-9 h-9">
                <FaFacebookF />
              </div>
              <div className="bg-white p-2 rounded-full text-[#101727] flex items-center justify-center w-9 h-9">
                <FaTwitter  />
              </div>
            </div>
          </div>
        </div> 
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-60">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    );
};

export default Footer;