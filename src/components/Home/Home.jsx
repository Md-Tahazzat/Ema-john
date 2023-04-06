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
          headerEl.classList.contains("-translate-y-24")
        ) {
          headerEl.classList.remove("-translate-y-24");
          cartContainer.classList.add("duration-500");
          cartContainer.classList.remove("-translate-y-16");
          cartContainer.classList.add("translate-y-0");
          // cartContainer.classList.add("-translate-y-0");
        } else if (
          currentScroll > lastScroll &&
          !headerEl.classList.contains("-translate-y-24")
        ) {
          headerEl.classList.add("-translate-y-24");
          cartContainer.classList.add("-translate-y-16");
          cartContainer.classList.remove("duration-500");
          cartContainer.classList.remove("translate-y-0");
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
