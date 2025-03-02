import React from "react";

import Header from "../Header/Header.jsx";
import Routes from "../../routes/Routers";
import Carts from "../UI/cart/Carts.jsx";

import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      {showCart && <Carts />}
      <div className="flex-grow-1">
        <Routes />
      </div>
    </div>
  );
};

export default Layout;