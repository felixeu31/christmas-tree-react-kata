import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import TreeGenerator from './TreeGenerator';

jest.mock('./TreeGenerator', () => {
  return function MockedTreeGenerator(props: any) {
    return (
      <div data-testid="tree-generator">
        <p data-testid="tree-height">{props.treeHeight}</p>
      </div>
    );
  };
});

describe('Christmas tree App', () => {
  it('should render app title', () => {
    const { getByText } = render(<App />);
    expect(getByText('Wellcome to Christmas Tree Generator!')).toBeInTheDocument();
  });

  it('should render a tree height input', () => {
    const { getByPlaceholderText } = render(<App />);
    expect(getByPlaceholderText('Indicate the desired tree height')).toBeInTheDocument();    
  });

  it('should render a generate button', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('button')).toBeInTheDocument();    
  });

  it('should render TreeGenerator and pass treeHeight as a prop', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
    const input = getByPlaceholderText('Indicate the desired tree height');
    const generateButton = getByText('Generate');

    fireEvent.change(input, { target: { value: '10' } });
    fireEvent.click(generateButton);

    // Check if the TreeGenerator component is rendered
    const treeGenerator = getByTestId('tree-generator');
    expect(treeGenerator).toBeInTheDocument();

    // Check if the treeHeight is passed as a prop to TreeGenerator
    const treeHeightElement = getByTestId('tree-height');
    expect(treeHeightElement.textContent).toBe('10');
  });
});
