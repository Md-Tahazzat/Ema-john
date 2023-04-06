import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ShopContainer = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    // if product already exist in cart, quantity will increase by 1.
    let isExist = false;
    cart.forEach((pd) => {
      if (pd.id === product.id) {
        pd.quantity++; /* pd.quantity = pd.quantity + 1 */
        isExist = true;
      }
    });
    // set cart data conditionally.
    if (isExist) {
      setCart([...cart]);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }

    addToDb(product.id);
  };

  useEffect(() => {
    if (products.length < 1) return;
    let savedProducts = [];
    const savedCart = getShoppingCart();
    if (!savedCart) return;
    for (let id in savedCart) {
      let matchedProduct = products.find((pd) => id == pd.id);
      matchedProduct.quantity = savedCart[id];
      savedProducts.push(matchedProduct);
    }
    setCart(savedProducts);
  }, [products]);

  // cartData clear handler
  const handleClearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };
  return (
    <div className="px-2 md:px-0 md:flex relative">
      <div className="w-full md:w-8/12 lg:w-9/12 grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 md:mt-10">
        {products.map((product) => (
          <Product
            handleAddToCart={handleAddToCart}
            key={product.id}
            product={product}
          ></Product>
        ))}
      </div>
      <div
        id="cart-container"
        className="bg-orange-300 rounded-lg md:rounded-none hidden md:inline-block md:w-4/12 lg:w-3/12 md:ml-5 p-10 h-screen translate-y-0 duration-500 duration-200 md:sticky top-16 text-slate-900"
      >
        <Cart cartProducts={cart} handleClearCart={handleClearCart}>
          <Link to="orderReview">
            <button className="btn w-full flex items-center justify-between">
              Review Order
              <FontAwesomeIcon className="text-xl" icon={faArrowRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default ShopContainer;
