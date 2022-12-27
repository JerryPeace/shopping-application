import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import { useRating } from 'provider/RatingProvider';
import { useShopCart } from 'provider/ShopCartProvider';
import ProductInfo from '../ProductInfo';

jest.mock('provider/ShopCartProvider', () => ({ useShopCart: jest.fn() }));
jest.mock('provider/RatingProvider', () => ({ useRating: jest.fn() }));

describe('ProductInfo', () => {
  let mockCallBack = jest.fn();
  afterEach(() => {
    cleanup();
  });

  test('should correctly render', () => {
    useShopCart.mockReturnValueOnce({
      productCounts: 9,
      setCounts: jest.fn(),
      setCart: mockCallBack,
    });
    useRating.mockReturnValueOnce({
      currentRating: 3,
      totalCount: 100,
      setRating: jest.fn(),
    });
    render(<ProductInfo />);
    fireEvent.click(screen.getByTestId('add-cart-button'));
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
