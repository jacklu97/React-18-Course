import { useEffect, useState } from 'react';

import useHttp from '../../hooks/use-http';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [availableMeals, setAvailableMeals] = useState([])
  const { sendRequest, isLoading, error } = useHttp()

  useEffect(() => {
    sendRequest({url: 'meals'}, (meals) => {
      const fixedMeals = []
      for (const [key, value] of Object.entries(meals)) {
        fixedMeals.push({
          id: key,
          name: value.name,
          description: value.description,
          price: value.price
        })
      }
      setAvailableMeals(fixedMeals)
    })
  }, [sendRequest])

  const mealsList = availableMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return <section className={classes.mealsLoading}>
      <p>Loading. . .</p>
    </section>
  }

  if (error) {
    return <section className={classes.mealsError}>
      <p>{error}</p>
    </section>
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
