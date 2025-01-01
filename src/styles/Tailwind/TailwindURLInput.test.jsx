import { render, screen, fireEvent } from '@testing-library/react';
import { TailwindURLInput } from './TailwindURLInput';

describe('TailwindURLInput', () => {
  it('renders with label', () => {
    render(<TailwindURLInput label="Test Label" id="url-input" />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('shows error message on invalid URL', () => {
    render(<TailwindURLInput />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'invalid-url' } });
    
    expect(screen.getByText('Please enter a valid URL')).toBeInTheDocument();
  });

  it('applies error styles when URL is invalid', () => {
    render(<TailwindURLInput />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'invalid-url' } });
    
    expect(input).toHaveClass('border-red-500');
  });
}); 