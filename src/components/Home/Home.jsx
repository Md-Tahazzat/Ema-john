import React, { useEffect } from "react";
import Header from "../Shared/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      const headerEl = document.getElementById("header");
      const cartContainer = document.getElementById("cart-container");
      let lastScroll = 0;
      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (
          currentScroll < lastScroll &&
          !headerEl.classList.contains("sticky")
        ) {
          headerEl.classList.add("sticky");
          cartContainer.classList.add("top-14");
        } else if (
          currentScroll > lastScroll &&
          headerEl.classList.contains("sticky")
        ) {
          headerEl.classList.remove("sticky");
          cartContainer.classList.remove("top-14");
        }
        lastScroll = currentScroll;
      });
    }, 1000);
  }, [Outlet]);
  return (
    <div className="App bg-slate-50 dark:bg-slate-900 dark:text-slate-400">
      <Header></Header>
      <div className="max-w-[90rem] bg-slate-50 dark:bg-slate-900 mx-auto px-2 md:px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
