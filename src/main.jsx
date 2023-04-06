import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import ShopContainer from "./components/ShopContainer/ShopContainer";
import OrderReview from "./components/OrderReview/OrderReview";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import FileNotFound from "./components/FileNotFound/FileNotFound";
import { cartProductsLoader } from "./components/utilities/CartProductsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <ShopContainer></ShopContainer>,
      },
      {
        path: "orderReview",
        element: <OrderReview></OrderReview>,
        loader: cartProductsLoader,
      },
      {
        path: "manageInventory",
        element: <ManageInventory></ManageInventory>,
      },
      {
        path: "*",
        element: <FileNotFound></FileNotFound>,
      },
    ],
  },
  {
    path: "*",
    element: <FileNotFound></FileNotFound>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
