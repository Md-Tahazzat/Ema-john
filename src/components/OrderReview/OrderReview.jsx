import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteShoppingCart, removeFromDb } from "../utilities/fakedb";

const OrderReview = () => {
  const data = useLoaderData();
  const [cart, setCart] = useState(data);
  const handleRemoveItem = (id) => {
    const remaining = cart.filter((p) => p.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="w-full min-h-[calc(100vh-121px)] md:min-h-[calc(100vh-161px)] flex relative">
      <div className="w-full md:w-8/12 lg:w-7/12 mt-6 md:mt-10 mr-auto">
        {cart.length > 0 ? (
          cart.map((product) => (
            <ReviewItem
              handleRemoveItem={handleRemoveItem}
              key={product.id}
              product={product}
            ></ReviewItem>
          ))
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <p className="text-center text-2xl font-bold text-slate-500">
              0 item, <br /> add something
            </p>
          </div>
        )}
      </div>
      <div
        id="cart-container"
        className="bg-orange-300 hidden md:block md:w-4/12 lg:w-3/12 ml-5 p-10 md:sticky right-0 top-0 min-h-[calc(100vh-121px)] md:min-h-[calc(100vh-161px)]  text-slate-900"
      >
        <Cart handleClearCart={handleClearCart} cartProducts={cart}>
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
