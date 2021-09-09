import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Butter Panner Masala",
    description:
      "Creamy cottegecheese preparation with indian herbs and spices!",
    price: 322.99,
  },
  {
    id: "m2",
    name: "Sushi",
    description: "Fine fish and veggies!",
    price: 576.5,
  },
  {
    id: "m3",
    name: "Garlic Naan",
    description: "Authentic indian bread with a hint of sharpness of garlic!",
    price: 102.68,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 498.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
