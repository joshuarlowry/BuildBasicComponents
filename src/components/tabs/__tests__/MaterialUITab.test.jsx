import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MaterialUITab } from '../MaterialUITab';

describe('MaterialUITab', () => {
  const mockProps = {
    muiUrl: '',
    setMuiUrl: vi.fn(),
    muiTel: '',
    setMuiTel: vi.fn(),
  };

  it('renders URL and telephone input fields with labels', () => {
    render(<MaterialUITab {...mockProps} />);
    
    expect(screen.getByLabelText('Website URL')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();
  });

  it('displays helper text for both inputs', () => {
    render(<MaterialUITab {...mockProps} />);
    
    expect(screen.getByText('Enter your website URL')).toBeInTheDocument();
    expect(screen.getByText('Enter your phone number')).toBeInTheDocument();
  });
}); 