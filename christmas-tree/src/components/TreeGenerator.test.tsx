import { fireEvent, render, screen } from '@testing-library/react';
import TreeGenerator from "./TreeGenerator";

describe('Tree generator', () => {
    it('should render warning message when height is 0', () => {
      const { getByText } = render(<TreeGenerator treeHeight={0}/>);
      expect(getByText('Please, select height and generate to get your tree')).toBeInTheDocument();
    });
});