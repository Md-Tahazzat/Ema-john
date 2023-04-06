import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { img, name, ratings, seller, price } = product;
  return (
    <div className="card rounded-lg bg-slate-200 overflow-hidden dark:bg-slate-800 shadow-lg border-slate-300 border">
      <figure>
        <img className="duration-300" src={img} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="mb-4">Price ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p className="mb-5">Rattings : {ratings} Stars</p>
        <div className="absolute bottom-0 left-0 w-full text-slate-800">
          <button
            onClick={() => handleAddToCart(product)}
            className="w-full bg-[#FFE0B3] duration-200 hover:bg-[#edc180] font-bold py-2"
          >
            Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
