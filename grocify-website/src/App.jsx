import React from "react";
import Home from "./components/Home/Home";
import Fruits from "./components/Fruits/Fruits";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dairy from "./components/Dairy/Dairy";
import Seafood from "./components/Seafood/Seafood";
import Allproducts from "./components/Allproducts/Allproducts";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import { LikesProvider } from "./context/LikesContext";
import Favorites from "./components/Favorites/Favorites";
import { CartProvider } from "./context/CartContext";
import Buy from "./components/Buy/Buy";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import AboutUs from "./components/AboutUs/AboutUs";
import Ourprocess from "./components/Ourprocess/Ourprocess";
import ContactUs from "./components/ContactUs/ContactUs";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { AuthProvider } from "./context/AuthContext";
import Checkout from "./components/Checkout/Checkout";
import BillPage from "./components/BillPage/BillPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, 
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seafood",
          element: <Seafood />,
        },
        {
          path: "/allproducts",
          element: <Allproducts />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
        {
          path: "/buy",
          element: <Buy />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/bill",
          element: <BillPage />,
        },
        {
          path: "/product/:id",
          element: <ProductDetail />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/ourprocess",
          element: <Ourprocess />,
        },
         {
                  path: "/contact",
                  element: <ContactUs />,
                },
        // {
        //   path: "/cart",
        //   element: <Cart />,
        // },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <AuthProvider>
      <CartProvider>
        <LikesProvider>
          <RouterProvider router={router} />
        </LikesProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
