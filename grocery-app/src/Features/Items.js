import React, { useState } from "react";
import { buyItems } from "./ItemSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Cart = () => {
  const [itemName, setItemName] = useState("");
  const [clicks, setClicks] = useState(0);
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      buyItems({
        itemName,
      })
    );
    setItemName("");
  };

  const handleClick = (id) => {
    setClicks({
        
    });
  };
  const addToCart = (event) => {
    event.preventDefault();
    history.pushState({
      pathname: `/cart${event.target.value}`,
      state: { url: event.target.id },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      Click on a button to add to cart!
      <button>Toilet Paper</button>
      <button onClick={handleClick}>Sanitizer</button>
      <button onClick={handleClick}>Soap</button>
      <button onClick={handleClick}>Water</button>
      <button onClick={handleClick}>Lysol</button>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
};

export default Cart;
