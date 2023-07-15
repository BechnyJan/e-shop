import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

function Cart({ onClose }) {
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;
  const cartRemove = (id) => {};
  const cartAdd = (item) => {};
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          name={item.name}
          onRemove={cartRemove.bind(null, item.id)}
          onAdd={cartAdd.bind(null, item)}
          amount={item.amount}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onClose} className={classes["button-alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
