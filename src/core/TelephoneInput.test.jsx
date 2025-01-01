import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { TelephoneInput } from './TelephoneInput';

describe('TelephoneInput', () => {
  test('renders input element', () => {
    const { getByRole } = render(<TelephoneInput />);
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  test('validates correct international numbers', () => {
    const onError = vi.fn();
    const { getByRole } = render(<TelephoneInput onError={onError} />);
    const input = getByRole('textbox');

    const validNumbers = [
      '+1 (555) 555-5555',
      '+44 20 7123 4567',
      '+81 3-1234-5678',
      '1-555-555-5555'
    ];

    validNumbers.forEach(number => {
      fireEvent.change(input, { target: { value: number } });
      expect(onError).toHaveBeenLastCalledWith(false);
    });
  });

  test('invalidates incorrect numbers', () => {
    const onError = vi.fn();
    const { getByRole } = render(<TelephoneInput onError={onError} />);
    const input = getByRole('textbox');

    const invalidNumbers = [
      'not-a-number',
      '123',
      '+',
      '+abc'
    ];

    invalidNumbers.forEach(number => {
      fireEvent.change(input, { target: { value: number } });
      expect(onError).toHaveBeenLastCalledWith(true);
    });
  });
}); 