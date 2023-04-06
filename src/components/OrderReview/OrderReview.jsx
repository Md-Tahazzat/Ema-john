import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeFromDb } from "../utilities/fakedb";

const OrderReview = () => {
  const data = useLoaderData();
  const [cart, setCart] = useState(data);
  const handleRemoveItem = (id) => {
    const remaining = cart.filter((p) => p.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="w-full h-screen flex relative">
      <div className="md:w-8/12 lg:w-7/12 mt-6 md:mt-10 mr-auto">
        {cart.map((product) => (
          <ReviewItem
            handleRemoveItem={handleRemoveItem}
            key={product.id}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div
        id="cart-container"
        className="bg-orange-300 md:w-4/12 lg:w-3/12 ml-5 p-10 md:sticky right-0 top-0 h-screen  text-slate-900"
      >
        <Cart cartProducts={cart}>
          <Link to="/manageInventory">
            <button className="btn w-full flex items-center justify-between">
              Proceed Checkout
              <FontAwesomeIcon className="text-xl" icon={faCreditCard} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
