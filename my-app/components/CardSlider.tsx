import React from "react";
import Card from "./Card";

const CardSlider = ({
  title,
  productList,
}: {
  title: string;
  productList: {
    id: number;
    title: string;
    image: string;
    description: string;
    price: string;
  }[];
}) => {
  return (
    <div className="flex flex-col items-center w-full p-4">
      <h1 className="font-serif text-left w-full text-4xl p-4 ">{title}</h1>
      <div className="flex overflow-x-auto custom-scrollbar w-full">
        {productList.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
