import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Christmas tree App', () => {
  it('Should render app title', () => {
    const { getByText } = render(<App />);
    expect(getByText('Wellcome to Christmas Tree Generator!')).toBeInTheDocument();
});
});
