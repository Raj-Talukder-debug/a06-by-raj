import React from 'react';

const Cart = ({ cart}) => {
console.log(cart);
    return (
      <div className='space-y-20 '>
        <h2 className='text-xl font-semibold'>Your Cart</h2>
        {cart.map((seletedCart, index) => {
            const { icon, price , name} = seletedCart;
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

              <button className="ml-auto bg-red-100 text-red-600 px-4 py-2 rounded-md">
                Remove
              </button>
            </div>
          );
        })}
      </div>
    );
};

export default Cart;   