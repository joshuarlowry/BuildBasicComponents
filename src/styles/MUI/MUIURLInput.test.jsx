import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MUIURLInput } from './MUIURLInput';

describe('MUIURLInput', () => {
  it('renders with label', () => {
    render(<MUIURLInput label="Test Label" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('shows helper text', () => {
    render(<MUIURLInput helperText="Helper Text" />);
    expect(screen.getByText('Helper Text')).toBeInTheDocument();
  });

  it('shows error state', () => {
    render(<MUIURLInput />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'invalid-url' } });
    
    expect(screen.getByText('Please enter a valid URL')).toBeInTheDocument();
  });
}); 