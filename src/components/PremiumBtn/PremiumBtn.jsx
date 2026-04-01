import React, { Suspense, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const PremiumBtn = ({ dataAi, cart, setCart }) => {
  const [selectedtype, setSelectedType] = useState("Products");

  return (
    <div className="container mx-auto p-20 ">
      <div className="text-center space-y-4">
        <h2 className="font-bold text-2xl md:text-5xl">Premium Digital Tools</h2>
        <p className="max-w-lg mx-auto text-[#627382]">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex items-center justify-center p-4">
        <button
          onClick={() => setSelectedType("Products")}
          className={`btn rounded-r-none rounded-l-xl  ${selectedtype === "Products" ? "text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]" : "bg-white text-black"}`}
        >
          Products
        </button>
        <button
          onClick={() => setSelectedType("something")}
          className={`btn rounded-l-none rounded-r-xl ${selectedtype === "something" ? "text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]" : "bg-white  text-black"}`}
        >
          Cart {cart.length}
        </button>
      </div>

      {selectedtype === "Products" ? (
        <Card cart={cart} setCart={setCart} dataAi={dataAi}></Card>
      ) : (
        <Cart cart={cart} setCart={setCart}></Cart>
      )}
    </div>
  );
};

export default PremiumBtn;