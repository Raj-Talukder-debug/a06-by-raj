import React, { use } from 'react';
import Cart from '../Cart/Cart';

const Card = ({ dataAi }) => {
    const datas = use(dataAi);
    console.log(datas);
    
       
  return (
    <div className="mt-20 grid grid-cols-3 gap-10 p-4 ">
      {datas.map((data, index) => {
        const { name, tag, icon, description, features } = data;
        return (
          <div key={index} className="card w-full bg-base-100 shadow-sm">
            <div className="card-body ">
              <div className="flex justify-end">
                <span className="badge badge-xs badge-warning  ">{tag}</span>
              </div>
              <div className="py-4">
                <img src={icon} alt="" />
              </div>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">{name}</h2>
              </div>
              <p className="text-[#627382] font-medium">{description}</p>

              <h2 className="font-bold text-xl">
                $29/<span className="font-normal text-[#627382]">Mo</span>{" "}
              </h2>

              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {features.map((feature, index) => {
                  return (
                    <div key={index} className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <li className="text-[#627382] font-medium text-md">
                        {feature}
                      </li>
                    </div>
                  );
                })}
              </ul>
              <div className="mt-6">
                <button className="btn w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full ">
                  Buy Now
                </button>
              </div>
              
            </div>
            
          </div>
        );
      })}
      
    </div>
  );
};

export default Card;