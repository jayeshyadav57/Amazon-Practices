import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header({ info: { setType, cartObj } }) {
  function searchValue(e) {
    setType(e.target.value);
  }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src="/images/logo.png" alt="amazon-images" />
        </Link>
      </div>
      <div className="search-box">
        <input
          type="search"
          id="search-item"
          name="search-item"
          onChange={searchValue}
        />
      </div>
      <Link to="/cart">
        <div className="cart-container">
          <img src="/images/cart.jpg" alt="cart-images" />
          <div className="cart-count">{cartObj.length}</div>
        </div>
      </Link>

    </div>
  );
}
