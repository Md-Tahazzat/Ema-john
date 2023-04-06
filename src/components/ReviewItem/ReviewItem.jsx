import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, name, img, price, quantity } = product;
  console.log(product);
  return (
    <div className="mb-5 border p-4 hover:bg-slate-200 dark:bg-slate-800 hover:border-slate-600 dark:hover:border-slate-200 dark:hover:bg-slate-700 rounded-md durat flex justify-between items-center">
      <img className="w-[91px] rounded-md" src={img} alt="" />
      <div className="flex-grow ml-4">
        <p className="text-[21px]">{name}</p>
        <p className="text-base">
          Price <span className="text-[#FF9900]">${price}</span>
        </p>
        <p>
          Quantity <span className="text-[#FF9900]">{quantity}</span>
        </p>
      </div>
      <button
        onClick={() => handleRemoveItem(id)}
        className="py-2 px-4 text-2xl bg-red-200 text-red-600 rounded-full"
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default ReviewItem;
