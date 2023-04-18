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
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Register from "./components/Authenticated/Register";
import Login from "./components/Authenticated/Login";
import AuthProvider from "./components/Provider/AuthProvider";
import PrivateRoute from "./components/Authenticated/PrivateRoute";
import CheckOut from "./components/CheckOut/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <ShopContainer></ShopContainer>,
        loader: () => fetch("products.json"),
      },
      {
        path: "orderReview",
        element: <OrderReview></OrderReview>,
        loader: cartProductsLoader,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      {
        path: "manageInventory",
        element: <ManageInventory></ManageInventory>,
      },
      {
        path: "shoppingCart",
        element: <ShoppingCart></ShoppingCart>,
        loader: cartProductsLoader,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
