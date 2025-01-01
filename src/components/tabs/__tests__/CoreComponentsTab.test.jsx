import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CoreComponentsTab } from '../CoreComponentsTab';

describe('CoreComponentsTab', () => {
  const mockProps = {
    coreUrl: '',
    setCoreUrl: vi.fn(),
    coreTel: '',
    setCoreTel: vi.fn(),
    coreUrlError: false,
    setCoreUrlError: vi.fn(),
    coreTelError: false,
    setCoreTelError: vi.fn(),
  };

  it('renders URL and telephone input fields', () => {
    render(<CoreComponentsTab {...mockProps} />);
    
    expect(screen.getByPlaceholderText('Enter URL')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('+1 (555) 555-5555')).toBeInTheDocument();
  });

  it('displays error messages when errors are present', () => {
    render(<CoreComponentsTab {...mockProps} coreUrlError={true} coreTelError={true} />);
    
    expect(screen.getByText('Please enter a valid URL')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument();
  });
}); 