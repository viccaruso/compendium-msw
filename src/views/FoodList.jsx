import React, { useEffect, useState } from 'react';
import Filter from '../components/Filter';
import FoodCard from '../components/FoodCard';
import { fetchFoods } from '../services/foodapi';

export default function FoodList() {
  const [loading, setLoading] = useState(false);
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);

  const handleSearch = (search) => {
    const matches = foods.filter((food) =>
      food.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredFoods(matches);
  };

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const data = await fetchFoods();
      setFoods(data);
      setLoading(false);
    }

    fetch();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <Filter onSearch={handleSearch} />
        <div className="food-list">
          {filteredFoods.length
            ? filteredFoods.map((food) => (
                <FoodCard key={food.fdcId} food={food} />
              ))
            : foods.map((food) => <FoodCard key={food.fdcId} food={food} />)}
        </div>
      </>
    );
  }
}
