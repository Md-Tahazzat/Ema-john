import React, { useContext, useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoaderData } from "react-router-dom";
import { deleteShoppingCart } from "../utilities/fakedb";
import { CartProductContext } from "../Home/Home";

const ShoppingCart = () => {
  const locatStorageProducts = useLoaderData();
  const [cartProducts, setCartProducts] = useState(locatStorageProducts);
  const [productsAmount, setProductsAmount] = useContext(CartProductContext);

  let price = 0;
  let tax = 0;
  let grandTotal = 0;
  let shipping = 0;
  let quantity = 0;
  if (cartProducts.length > 0) {
    for (let product of cartProducts) {
      let totalPrice = product.quantity * product.price;
      price += totalPrice;
      shipping += product.shipping;
      quantity += product.quantity;
    }
    tax = (price * 7) / 100;
    grandTotal = price + tax;
  }

  const handleClearCart = () => {
    setCartProducts([]);
    deleteShoppingCart();
    setProductsAmount(0);
  };

  return (
    <div className="bg-orange-300 min-h-[calc(100vh-121px)]  p-10  text-slate-900">
      <h1 className="text-xl font-bold text-center mb-2">Order Summery</h1>
      <h1 className="text-center text-lg font-semibold mb-5">
        Selected Items: {quantity}
      </h1>
      <p className=" flex justify-between text-xl">
        Total Price: <span>${price.toFixed(2)}</span>
      </p>
      <p className=" flex justify-between text-xl">
        Total Shipping Charge: <span>${shipping}</span>
      </p>
      <p className=" flex justify-between text-xl">
        Tax: <span>${tax.toFixed(2)}</span>
      </p>
      <p className=" flex justify-between text-xl">
        Grand Total: <span>${grandTotal.toFixed(2)}</span>
      </p>
      <div className="mt-8">
        <button
          onClick={handleClearCart}
          className="btn w-full mb-2 border-none hover:bg-red-600 bg-red-500 text-white flex items-center justify-between"
        >
          Clear Cart <FontAwesomeIcon className="text-xl" icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
