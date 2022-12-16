import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddItems() {
    setIsInCart((isInCart) => !isInCart)
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddItems} className="add">{isInCart ? "Remove From" : "Add to"} Cart</button>

    </li>
  )
}

export default Item;
