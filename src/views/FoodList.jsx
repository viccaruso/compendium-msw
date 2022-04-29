import React, { useEffect, useState } from 'react';
import { fetchFoods } from '../services/foodapi';

export default function FoodList() {
  const [loading, setLoading] = useState(false);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const data = await fetchFoods();
      setFoods(data);
      setLoading(false);
    }

    fetch();
  }, []);
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="food-list">
          {foods.map((food) => (
            <p>Food goes here</p>
          ))}
        </div>
      )}
    </>
  );
}
