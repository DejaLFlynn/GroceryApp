import React, { useState } from "react";
import { clearItems } from "./ItemSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const [itemName, setItemName] = useState("");
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      clearItems({
        itemName,
      })
    );
    setItemName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
    
      </form>
       
    </div>
  );
};

export default Cart;
