import { render, fireEvent } from '@testing-library/react';
import { MUITelephoneInput } from './MUITelephoneInput';

describe('MUITelephoneInput', () => {
  test('renders with label', () => {
    const { getByLabelText } = render(
      <MUITelephoneInput label="Phone Number" />
    );
    expect(getByLabelText('Phone Number')).toBeInTheDocument();
  });

  test('shows helper text', () => {
    const { getByText } = render(
      <MUITelephoneInput helperText="Enter your phone number" />
    );
    expect(getByText('Enter your phone number')).toBeInTheDocument();
  });

  test('shows error state', () => {
    const { getByRole, getByText } = render(<MUITelephoneInput label="Phone" />);
    const input = getByRole('textbox');
    
    fireEvent.change(input, { target: { value: 'invalid' } });
    expect(getByText('Please enter a valid phone number')).toBeInTheDocument();
  });
}); 