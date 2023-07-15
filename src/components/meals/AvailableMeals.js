import React from "react";
import DUMMY from "../../DUMMY_MEALS";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./mealItem/MealItem";

function AvailableMeals() {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY.map((meal) => (
            <MealItem
              price={meal.price}
              description={meal.description}
              name={meal.name}
              key={meal.id}
              id={meal.id}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
