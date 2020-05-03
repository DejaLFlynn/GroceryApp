import React, { useState } from "react";
import { buyItems } from "./ItemSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const [itemName, setItemName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      buyItems({
        itemName,
      })
    );
    setItemName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
    
      </form>

      Click on a button to add to cart!
      <button>Toilet Paper</button>
        <button>Sanitizer</button>
        <button>Soap</button>
        <button>Water</button>
        <button>Lysol</button>
    </div>
  );
};

export default Cart;