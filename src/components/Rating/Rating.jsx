import React from 'react';

const Rating = () => {
    return (
      <div className=" hidden bg-gradient-to-r from-[#4F39F6] to-[#9514FA] md:grid grid-cols-3 p-8 mt-10 ">
        <div className="md:text-center text-white">
          <h2 className="font-semibold text-3xl">50k+</h2>
          <p>Active Users</p>
        </div>
        <div className="text-center text-white">
          <h2 className="font-semibold text-3xl">200+</h2>
          <p>Premium Tools</p>
        </div>
        <div className="text-center text-white">
          <h2 className="font-semibold text-3xl">4.9</h2>
          <p>Rating</p>
        </div>
      </div>
    );
};

export default Rating;