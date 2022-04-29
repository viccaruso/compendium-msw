import React from 'react';

export default function FoodCard({ food }) {
  return (
    <div className="food-card">
      <h3>{food.description}</h3>
      {food.foodNutrients.map((nutrient, index) => (
        <p
          key={index}
        >{`${nutrient.name}: ${nutrient.amount} ${nutrient.unitName}`}</p>
      ))}
    </div>
  );
}
