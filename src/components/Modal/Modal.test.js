import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  let mockProps;
  let mockCallBack = jest.fn();
  beforeEach(() => {
    mockProps = {
      title: 'Reviews',
      footer: undefined,
      hideModal: mockCallBack,
    };
  });

  afterEach(() => {
    cleanup();
  });

  describe('should correctly render', () => {
    test('Display Modal testing', () => {
      mockProps.active = true;
      render(<Modal {...mockProps} />);
      expect(screen.getByTestId('modal-title').textContent).toBe('Reviews');
      expect(screen.queryByTestId('modal-footer')).not.toBeInTheDocument();
      fireEvent.click(screen.getByTestId('modal-close'));
      expect(mockCallBack).toHaveBeenCalledTimes(1);
    });

    test('Hide Modal testing', () => {
      mockProps.active = false;
      render(<Modal {...mockProps} />);
      expect(screen.queryByTestId('modalWrapper')).not.toBeInTheDocument();
    });
  });
});
