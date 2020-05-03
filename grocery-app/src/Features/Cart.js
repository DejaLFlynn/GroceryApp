import React, { useState } from "react";
import { buyItems, ClearItems } from "./ItemSlice";
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
        <input
          value={itemName}
          placeholder="itemName"
          onChange={(e) => setItemName(e.target.value)}
        ></input>
      </form>
      <button>Add to Cart</button>
    </div>
  );
};

export default Cart;
