import React, { useState, useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);
  const inputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredQuantity = +inputRef.current.value;
    if (enteredQuantity < 1 || enteredQuantity > 5) {
      setFormIsValid(false);
      return;
    }
    props.onAddToCart(enteredQuantity);
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={inputRef}
        label="Quantity"
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!formIsValid && <p>Please enter a valid quantity (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
