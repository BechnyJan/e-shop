import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let updatedItems;
    let isPresent = false;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item?.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      console.log("ahoj", existingCartItem?.amount + action.item.amount);
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    console.log(existingCartItem);

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    console.log(state.items);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    console.log(existingCartItem);

    return defaultCartState;
  }
  return defaultCartState;
};

function CartProvider({ children }) {
  const [cartState, dispatchState] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchState({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
