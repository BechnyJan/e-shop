import React, { useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm({ id, onSubmit }) {
  const [enteredValue, setEnteredValue] = useState(1);
  const [isValid, setIsValid] = useState(true);

  const changeHandler = (e) => {
    setEnteredValue(e.target.value);
    console.log(enteredValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // enteredValue.trim()


    onSubmit(+enteredValue);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: enteredValue,
          onChange: changeHandler,
        }}
      />
      <button>+ Add</button>
      {!isValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default MealItemForm;
