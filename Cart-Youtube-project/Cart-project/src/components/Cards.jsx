import React, { useState } from "react";
import "../styles/cards.css";

const Cards = ({ items, handleclick, remove }) => {
  const { img, id, name, price } = items;
  const [btn, setBtn] = useState(true);
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="*400*300" />
      </div>
      <div className="details">
        <p>{name}</p>
        {/* <p>{id}</p> */}
        <p>Price - {price}Rs</p>
        {btn ? (
          <button
            onClick={() => {
              handleclick(items);
              setBtn(false);
            }}
          >
            Add to Cart
          </button>
        ) : (
          <button
            onClick={() => {
              // handleclick(items);
              setBtn(true);
              remove(items.id);
            }}
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Cards;
