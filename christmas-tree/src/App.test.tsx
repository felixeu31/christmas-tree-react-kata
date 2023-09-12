import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Christmas tree App', () => {
  it('should render app title', () => {
    const { getByText } = render(<App />);
    expect(getByText('Wellcome to Christmas Tree Generator!')).toBeInTheDocument();
  });

  it('should render a tree height input', () => {
    const { getByPlaceholderText } = render(<App />);
    expect(getByPlaceholderText('Indicate the desired tree height')).toBeInTheDocument();    
  });
});
