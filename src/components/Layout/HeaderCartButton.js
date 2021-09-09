import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currValue, item) => {
    return currValue + item.quantity;
  }, 0);

  useEffect(() => {
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, [items]);

  const btnClasses = `${classes.badge} ${btnIsHighlighted ? classes.bump : ""}`;
  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>View Cart</span>
      <span className={btnClasses}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
