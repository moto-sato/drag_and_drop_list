import React, { FC } from "react";
import { Card } from "../../type/card";

type Props = { itemData: Card };

const Item: FC<Props> = (props) => {
  const { itemData } = props;
  return (
    <div className="w-82 flex flex-row md:m-4 p-2 bg-white border border-black">
      <img className="w-12 mr-2 rounded-full" src={itemData.icon} alt="icon" />
      <div className="flex flex-col justify-between">
        <p>{itemData.phrase}</p>
        <div className="flex flex-row justify-between text-xs text-gray-500">
          <p>(id: {itemData.id})</p>
          <p>{itemData.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
