import { render, screen, fireEvent } from '@testing-library/react';
import { URLInput } from './URLInput';

describe('URLInput', () => {
  it('renders without crashing', () => {
    render(<URLInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('validates correct URLs', () => {
    const onError = vi.fn();
    render(<URLInput onError={onError} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'https://example.com' } });
    
    expect(onError).toHaveBeenLastCalledWith(false);
  });

  it('invalidates incorrect URLs', () => {
    const onError = vi.fn();
    render(<URLInput onError={onError} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'not-a-url' } });
    
    expect(onError).toHaveBeenLastCalledWith(true);
  });

  it('accepts custom render function', () => {
    const customClass = 'custom-input';
    render(
      <URLInput
        renderInput={(props) => (
          <input {...props} className={customClass} />
        )}
      />
    );
    
    expect(screen.getByRole('textbox')).toHaveClass(customClass);
  });
}); 