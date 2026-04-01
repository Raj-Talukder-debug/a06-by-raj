import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
    return (
      <div className="container mx-auto mt-30">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#101727] mb-2">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold">Starter</h3>
            <p className="text-gray-400 text-sm mb-6">
              Perfect for getting started
            </p>
            <div className="mb-8">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-gray-400">/Month</span>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-green-500"></FaCheck> Access to 10 free
                tools
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-green-500"></FaCheck> Basic templates
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-green-500"></FaCheck> Community support
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-green-500"></FaCheck> 1 project per
                month
              </li>
            </ul>
            <button className="w-full py-4 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold">
              Get Started Free
            </button>
          </div>

          <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-8 rounded-3xl shadow-xl text-white relative md:scale-100  border-2 ">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-700 text-xs font-bold px-4 py-1 rounded-full">
              Most Popular
            </span>
            <h3 className="text-xl font-bold">Pro</h3>
            <p className="text-purple-100 text-sm mb-6">
              Best for professionals
            </p>
            <div className="mb-8">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-purple-100">/Month</span>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-sm">
                <FaCheck></FaCheck> Access to all premium tools
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaCheck></FaCheck> Unlimited templates
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaCheck></FaCheck> Priority support
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaCheck></FaCheck> Unlimited projects
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaCheck></FaCheck> Cloud sync
              </li>
              <li className="flex items-center gap-3 text-sm">
                <FaCheck></FaCheck> Advanced analytics
              </li>
            </ul>
            <button className="w-full py-4 rounded-full bg-white font-bold">
              <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Start Pro Trial
              </span>
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold">Enterprise</h3>
            <p className="text-gray-400 text-sm mb-6">
              For teams and businesses
            </p>
            <div className="mb-8">
              <span className="text-3xl font-bold">$99</span>
              <span className="text-gray-400">/Month</span>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-green-500"></FaCheck> Everything in Pro
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-green-500"></FaCheck> Team
                collaboration
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-green-500"></FaCheck> Custom
                integrations
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-green-500"></FaCheck> Dedicated support
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-green-500"></FaCheck> SLA guarantee
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-green-500"></FaCheck> Custom branding
              </li>
            </ul>
            <button className="w-full py-4 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    );
};

export default Pricing;