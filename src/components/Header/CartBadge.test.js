import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import CartBadge from './CartBadge';
import { useShopCart } from 'providers/ShopCartProvider';

jest.mock('providers/ShopCartProvider', () => ({
  useShopCart: jest.fn(),
}));

describe('CartBadge', () => {
  let mockCallBack = jest.fn();
  afterEach(() => {
    cleanup();
  });

  describe('should correctly render', () => {
    test('Adding cart', () => {
      useShopCart.mockReturnValueOnce({
        addCart: true,
        setCart: mockCallBack,
        productCounts: 9,
      });
      render(<CartBadge />);
      expect(screen.getByTestId('cart-badge')).toBeInTheDocument();
      expect(screen.getByText('Qty:9')).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('remove-cart'));
      expect(mockCallBack).toHaveBeenCalledTimes(1);
    });

    test('Removing cart', () => {
      useShopCart.mockReturnValueOnce({
        addCart: false,
        setCart: mockCallBack,
        productCounts: 8,
      });
      render(<CartBadge />);
      expect(screen.queryByTestId('cart-badge')).not.toBeInTheDocument();
    });
  });
});
