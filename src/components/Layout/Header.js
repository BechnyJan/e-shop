import React from "react";
import meailsImage from "../../meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header({onOpen}) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onOpen}  />
      </header>
      <div className={classes["main-image"]}>
        <img src={meailsImage} alt="" />
      </div>
    </>
  );
}

export default Header;
