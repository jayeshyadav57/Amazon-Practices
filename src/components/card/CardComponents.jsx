import React from "react";
import "./Card.css";
export default function CardComponents({ info }) {
  let cards = info.map((ele) => {
    return (
      <div className="card-container" key={ele.id}>
        <div className="card-image">
          <img src={ele.imageUrl} alt="gg" />
        </div>
        <div className="card-title">{ele.title}</div>
        <div className="card-description">{ele.description}</div>
        <div className="card-available-stocks">
          <span className="stock-title">Available Stocks :- </span>
          {ele.stock}
        </div>
        <div className="card-price">{ele.price}</div>
        <div className="addToCart">Add to Cart</div>
      </div>
    );
  });
  return <div className="cardContainer">{cards}</div>;
}
