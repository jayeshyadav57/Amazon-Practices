import React from "react";
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import SubHeader from "./components/subheader/SubHeader";
import Pants from "./pages/pants/Pants";
import Shirt from "./pages/shirt/Shirt";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  //This is for searching and showing result in according to searching
  let [type, setType] = useState("")

  //It store the count of objects/product which are added to the cart
  let [cartCount, setCartCount] = useState([])
  return (
    <BrowserRouter>
      <Header setType={setType} />
      <SubHeader />
      <Routes>
        <Route path="/" element={<Card type={type} />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/shirt" element={<Shirt />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
