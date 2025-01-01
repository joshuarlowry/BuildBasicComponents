import { describe, it, expect, beforeEach, vi } from 'vitest';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { TelephoneInput } from './TelephoneInput';

describe('TelephoneInput', () => {
  const mockOnChange = vi.fn();
  const mockOnError = vi.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
    mockOnError.mockClear();
  });

  it('renders default input when no renderInput prop is provided', () => {
    render(<TelephoneInput />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'tel');
  });

  it('uses custom render function when provided', () => {
    const customRender = (props) => <input data-testid="custom-input" {...props} />;
    render(<TelephoneInput renderInput={customRender} />);
    expect(screen.getByTestId('custom-input')).toBeDefined();
  });

  describe('validation', () => {
    const testCases = [
      { input: '+1 (555) 123-4567', expected: true, description: 'valid US format' },
      { input: '020 7123 4567', expected: true, description: 'valid UK format' },
      { input: '+44.7911.123456', expected: true, description: 'valid international format' },
      { input: '123456', expected: false, description: 'too short' },
      { input: 'abcdefghijk', expected: false, description: 'non-numeric' },
      { input: '', expected: false, description: 'empty string' },
    ];

    testCases.forEach(({ input, expected, description }) => {
      it(`correctly validates ${description}`, async () => {
        render(
          <TelephoneInput
            onChange={mockOnChange}
            onError={mockOnError}
          />
        );
        
        const inputElement = screen.getByRole('textbox');
        
        // First set to a different value
        fireEvent.change(inputElement, { target: { value: 'initial' } });
        // Then set to our test value
        fireEvent.change(inputElement, { target: { value: input } });

        expect(mockOnError).toHaveBeenLastCalledWith(!expected);
      });
    });
  });

  it('calls onChange with new value', () => {
    render(
      <TelephoneInput
        onChange={mockOnChange}
        onError={mockOnError}
      />
    );
    
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: '+1 (555) 123-4567' } });

    expect(mockOnChange).toHaveBeenCalledWith('+1 (555) 123-4567');
  });

  it('passes through additional props', () => {
    render(
      <TelephoneInput
        data-testid="phone-input"
        placeholder="Enter phone number"
      />
    );
    
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('placeholder', 'Enter phone number');
    expect(inputElement).toHaveAttribute('data-testid', 'phone-input');
  });
}); 