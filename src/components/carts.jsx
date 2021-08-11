import React from "react";

const Cart = props => {
  const style = !props.product.isInCart
    ? { color: "#80808080", cursor: "pointer" }
    : { cursor: "pointer" };
  return (
    <i
      style={style}
      onClick={() => props.onClick(props.product)}
      className="fas fa-cart-plus m-2"
    ></i>
  );
};

export default Cart;
