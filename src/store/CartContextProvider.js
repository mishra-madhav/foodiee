import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const indexOfExistingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    if (indexOfExistingItem !== -1) {
      const updatedItem = {
        ...state.items[indexOfExistingItem],
        quantity:
          state.items[indexOfExistingItem].quantity + action.item.quantity,
      };
      const updatedItems = [...state.items];
      updatedItems[indexOfExistingItem] = updatedItem;
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    } else {
      const updatedItems = state.items.concat(action.item);

      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    }
  }
  if (action.type === "REMOVE") {
    const toBeRemoved = state.items.find((item) => item.id === action.id);
    if (toBeRemoved.quantity > 1) {
      const updatedAmount = state.totalAmount - toBeRemoved.price;
      const updatedItemsTemp = state.items.filter(
        (item) => item.id !== action.id
      );
      const updatedItems = [
        ...updatedItemsTemp,
        {
          id: toBeRemoved.id,
          name: toBeRemoved.name,
          price: toBeRemoved.price,
          quantity: toBeRemoved.quantity - 1,
        },
      ];
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    }
  }
  return defaultState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
