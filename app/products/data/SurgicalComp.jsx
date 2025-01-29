import React from "react";
import data from '@/data/surgical.json'

const SurgicalComp = () => {
  return (
    <div className="grid grid-cols-3">
      {data.map((item, index) => {
        return (
          <div className="p-2 border" key={index}>
            <h1>{item.productName}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default SurgicalComp;
