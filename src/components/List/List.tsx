import React from "react";
import { CardData } from "../../data/cardData";
import Item from "../Item/Item";

export default function List() {
  return (
    <div className="bg-blue-300 md:max-w-xl md:p-4 mx-auto md:my-4">
      {CardData.map((item) => {
        return <Item itemData={item} />;
      })}
    </div>
  );
}
