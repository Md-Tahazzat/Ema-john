import React, { createContext, useEffect, useState } from "react";
import Header from "../Shared/Header";
import { Outlet } from "react-router-dom";
import { getShoppingCart } from "../utilities/fakedb";
import Loading from "../Loading/Loading";
import Footer from "../Shared/Footer";

export const CartProductContext = createContext(null);

const Home = () => {
  const [productsAmount, setProductsAmount] = useState(0);

  // setEvent listener to add scrolling effect on header element.
  useEffect(() => {
    setTimeout(() => {
      const headerEl = document.getElementById("header");
      let lastScroll = 0;
      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (
          currentScroll < lastScroll &&
          headerEl.classList.contains("-translate-y-24")
        ) {
          headerEl.classList.remove("-translate-y-24");
        } else if (
          currentScroll > lastScroll &&
          !headerEl.classList.contains("-translate-y-24")
        ) {
          headerEl.classList.add("-translate-y-24");
        }
        lastScroll = currentScroll;
      });
    }, 1000);
  }, [Outlet]);

  // useEffect to show product amount in shopping cart icon from local storage
  useEffect(() => {
    let cartProduct = 0;
    const savedCart = getShoppingCart();
    for (let id in savedCart) {
      cartProduct += savedCart[id];
    }
    setProductsAmount(cartProduct);
  }, []);

  return (
    <div className="App bg-slate-50 dark:bg-slate-900 dark:text-slate-400">
      <Header productsAmount={productsAmount}></Header>
      <CartProductContext.Provider value={[productsAmount, setProductsAmount]}>
        <div className="max-w-[90rem] bg-slate-50 dark:bg-slate-900 mx-auto px-2 md:px-5">
          <Outlet />
        </div>
      </CartProductContext.Provider>
      <Footer></Footer>
    </div>
  );
};

export default Home;
