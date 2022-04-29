import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import { fetchFoods } from '../services/foodapi';
import { foodsApiData } from '../tests/fixtures/foodData';
import FoodList from './FoodList';

describe('FoodList', () => {
  const server = setupServer(
    rest.get(`https://api.nal.usda.gov/fdc/v1/foods/list`, (req, res, ctx) => {
      return res(ctx.json(foodsApiData));
    })
  );

  beforeAll(() => server.listen());
  afterAll(() => server.close());

  describe('FoodList', () => {
    it('should render a list of foods with nutrition info', async () => {
      render(<FoodList />);

      const grand = await screen.findByText('One Hundred Grand Bar'); // <-- this doesn't exist in real API call only msw call
      expect(grand.textContent).toEqual('One Hundred Grand Bar');

      const filter = screen.getByPlaceholderText('Filter foods');
      userEvent.type(filter, 'Mu');

      return waitFor(() => {
        const result = screen.getAllByRole('heading');
        console.log(result.length);
        expect(result.length).toEqual(2);

        const secondItem = result[1];
        expect(secondItem.textContent).toEqual(
          '3 Musketeers Truffle Crisp Bar'
        );
      });
    });
  });
});
