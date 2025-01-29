import React from "react";
import Data from "@/data/cosmetics.json";

const CosmeticsComp = () => {
  return (
    <div className="grid grid-cols-3">
      {Data.data.map((item, index) => {
        return <div className="p-2 border" key={index}>{item}</div>;
      })}
    </div>
  );
};

export default CosmeticsComp;
