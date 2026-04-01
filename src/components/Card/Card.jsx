import React, { use, useState } from 'react';
import Cart from '../Cart/Cart';
import CardBody from '../Ui/CardBody';

const Card = ({ dataAi, cart, setCart }) => {
  const datas = use(dataAi);
  // console.log(datas);

  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 p-4 ">
      {datas.map((data, index) => {
        // const { name, tag, icon, description, features } = data;
        return (
          <CardBody
            cart={cart}
            setCart={setCart}
            key={data.id}
            data={data}
          ></CardBody>
        );
      })}
    </div>
  );
};

export default Card;