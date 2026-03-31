import React, { Suspense } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const PremiumBtn = ({ dataAi }) => {
  return (
    <div className="container mx-auto p-20 ">
      <div className="text-center space-y-4">
        <h2 className="font-bold text-5xl">Premium Digital Tools</h2>
        <p className="max-w-lg mx-auto text-[#627382]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex items-center justify-center p-4">
        <button className="btn rounded-r-none rounded-l-xl text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
          Products
        </button>
        <button className="btn rounded-l-none rounded-r-xl text-black">
          Cart (2)
        </button>
      </div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Card dataAi={dataAi}></Card>
      </Suspense>
      <Cart></Cart>
    </div>
  );
};

export default PremiumBtn;