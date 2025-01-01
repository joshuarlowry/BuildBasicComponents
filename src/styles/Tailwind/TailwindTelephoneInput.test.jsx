import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { TailwindTelephoneInput } from './TailwindTelephoneInput';

describe('TailwindTelephoneInput', () => {
  test('renders with label', () => {
    const { getByLabelText } = render(
      <TailwindTelephoneInput label="Phone Number" />
    );
    expect(getByLabelText('Phone Number')).toBeInTheDocument();
  });

  test('shows error message for invalid number', () => {
    const { getByRole, getByText } = render(<TailwindTelephoneInput />);
    const input = getByRole('textbox');
    
    fireEvent.change(input, { target: { value: 'invalid' } });
    expect(getByText('Please enter a valid phone number')).toBeInTheDocument();
  });

  test('applies error styles', () => {
    const { getByRole } = render(<TailwindTelephoneInput />);
    const input = getByRole('textbox');
    
    fireEvent.change(input, { target: { value: 'invalid' } });
    expect(input).toHaveClass('border-red-500');
  });
}); 