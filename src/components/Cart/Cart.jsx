import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Cart = ({ cart, setCart}) => {
// console.log(cart);
const handleRemove = (name) => {
    const updatedCard = cart.filter(item => item.name != name );
    setCart(updatedCard);
};

const handleProceed = () =>{
  cart.length >0 ? 
  toast.success (("Order Placed Successfully"),
  setCart([])) : toast.warning ("Your cart is already empty") 
}

let total = 0;
cart.forEach(item => {
total = total + item.price;
console.log(total)
})
    return (
      <div className="space-y-20 ">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="font-bold text-5xl text-center text-gray-500">
            No Product Available
          </div>
        ) : (
          cart.map((selectedCart, index) => {
            const { icon, price, name } = selectedCart;
            return (
              <div
                className="mt-5 flex gap-10 items-center shadow-md p-5 "
                key={index}
              >
                <div>
                  <img className="h-[50px] w-auto  " src={icon} alt="" />
                </div>
                <div>
                  <h2>{name}</h2>
                  <p className="pt-5 text-gray-600">${price}</p>
                </div>

                <button
                  onClick={() => handleRemove(name)}
                  className="ml-auto bg-red-100 text-red-600 px-4 py-2 rounded-md"
                >
                  Remove
                </button>
              </div>
            );
          })
        )}

        <div className="flex justify-between items-center">
          <p className="font-semibold text-2xl text-gray-400">Total</p>
          <p className="font-bold text-2xl text-black">${total}</p>
        </div>
        <button onClick={handleProceed} className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-xl w-full p-6 rounded-full">
          Proceed to Checkout
        </button>
      </div>
    );
};

export default Cart;   