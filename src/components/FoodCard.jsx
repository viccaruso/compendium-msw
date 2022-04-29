import React from 'react'

export default function FoodCard({ food }) {
  return (
    <div className='food-card'>
      <h3>{food.description}</h3>
      {
        food.foodNutrients.map(nutrient => <p>{`${nutrient.name}: ${nutrient.amount} ${nutrient.unitName}`}</p>)
      }
    </div>
  )
}
