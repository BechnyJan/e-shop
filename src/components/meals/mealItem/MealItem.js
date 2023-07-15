import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

function MealItem({ name, price, description, id }) {
  const cartCtx = useContext(CartContext);

  const submitMealHandler = (amount) => {
    
    const mealItem = { name, price, id, amount };
    cartCtx.addItem(mealItem);
    console.log(mealItem, amount);
  };

  const fixedPrice = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div>{fixedPrice}</div>
      </div>
      <div>
        <MealItemForm onSubmit={submitMealHandler} id={id} />
      </div>
    </li>
  );
}

export default MealItem;
