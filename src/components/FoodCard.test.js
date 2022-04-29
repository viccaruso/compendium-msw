import { render, screen } from '@testing-library/react';
import FoodCard from './FoodCard';

describe('FoodCard', () => {
  it('should render a food card to the screen and display info matching the object provided', async () => {
    const food = {
      description: '100 GRAND Bar',
      foodNutrients: [
        {
          name: 'Protein',
          amount: 2.5,
          unitName: 'G',
        },
        {
          name: 'Total lipid (fat)',
          amount: 19.3,
          unitName: 'G',
        },
        {
          name: 'Carbohydrate, by difference',
          amount: 71.0,
          unitName: 'G',
        },
        {
          name: 'Energy',
          amount: 468,
          unitName: 'KCAL',
        },
      ],
    };

    render(<FoodCard food={food} />);

    const foodName = screen.getByText('100 GRAND Bar');
    expect(foodName.textContent).toEqual('100 GRAND Bar');

    const foodProtein = screen.getByText('Protein: 2.5 G');
    expect(foodProtein.textContent).toEqual('Protein: 2.5 G');

    const foodLipid = screen.getByText('Total lipid (fat): 19.3 G');
    expect(foodLipid.textContent).toEqual('Total lipid (fat): 19.3 G');

    const foodCarbs = screen.getByText('Carbohydrate, by difference: 71 G');
    expect(foodCarbs.textContent).toEqual('Carbohydrate, by difference: 71 G');

    const foodCalories = screen.getByText('Energy: 468 KCAL');
    expect(foodCalories.textContent).toEqual('Energy: 468 KCAL');
  });
});
