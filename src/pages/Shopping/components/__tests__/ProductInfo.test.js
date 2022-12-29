import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import { useRating } from 'providers/RatingProvider';
import { useShopCart } from 'providers/ShopCartProvider';
import ProductInfo from '../ProductInfo';

jest.mock('providers/ShopCartProvider');
jest.mock('providers/RatingProvider');

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
      averageRating: 3,
      totalCount: 100,
      setRating: jest.fn(),
    });
    render(<ProductInfo />);
    fireEvent.click(screen.getByTestId('add-cart-button'));
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
