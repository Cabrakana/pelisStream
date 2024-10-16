import { render, screen, fireEvent } from '@testing-library/react';
import Alert from './Alert';

test('renders alert with message and close button', () => {
  const handleClose = jest.fn();
  render(<Alert type="success" message="Success message!" onClose={handleClose} />);

  expect(screen.getByText(/success message/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button'));
  expect(handleClose).toHaveBeenCalledTimes(1);
});
