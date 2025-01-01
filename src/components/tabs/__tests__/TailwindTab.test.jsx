import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TailwindTab } from '../TailwindTab';

describe('TailwindTab', () => {
  const mockProps = {
    tailwindUrl: '',
    setTailwindUrl: vi.fn(),
    tailwindTel: '',
    setTailwindTel: vi.fn(),
  };

  it('renders URL and telephone input fields with labels', () => {
    render(<TailwindTab {...mockProps} />);
    
    expect(screen.getByLabelText('Website URL')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();
  });

  it('renders section headings', () => {
    render(<TailwindTab {...mockProps} />);
    
    expect(screen.getByText('Tailwind URL Input')).toBeInTheDocument();
    expect(screen.getByText('Tailwind Telephone Input')).toBeInTheDocument();
  });
}); 