import React from "react";
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import SubHeader from "./components/subheader/SubHeader";
import Pants from "./pages/pants/Pants";
import Shirt from "./pages/shirt/Shirt";
import Cart from "./pages/cart/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  //This is for searching and showing result in according to searching
  let [type, setType] = useState("")

  //It store the count of objects/product which are added to the cart
  let [cartObj, setCartObj] = useState([])

  function getObjects(product) {
    //whea we click then i have to check is that object is already present or not.
    const isProductPresent = cartObj.find(element => element.id === product.id);

    //true means present in cart and if already present then simply increment quatity of that product. 
    if (isProductPresent) {
      if (product.stock > product.quantity) {
        cartObj.map((ele) => {
          if (ele.id === product.id) {
            ele.quantity++;
          }
          return 0;
        })
      }
    }
    // Add that product with quantity = 1 in cartObj array of objects
    else {
      setCartObj([...cartObj, { ...product, quantity: 1 }]);
    }
  }
  return (
    <BrowserRouter>
      <Header info={{ setType, cartObj }} />
      <SubHeader />
      <Routes>
        <Route path="/" element={<Card info={{ type, getObjects }} />} />
        <Route path="/pants" element={<Pants getObjects={getObjects} />} />
        <Route path="/shirt" element={<Shirt getObjects={getObjects} />} />
        <Route path="/cart" element={<Cart cartObj={cartObj} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
