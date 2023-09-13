import { fireEvent, render, screen } from '@testing-library/react';
import TreeGenerator from "./TreeGenerator";

describe('Tree generator', () => {
    it('should render warning message when height is 0', () => {
      const { getByText } = render(<TreeGenerator treeHeight={0}/>);
      
      expect(getByText('Please, select height and generate to get your tree')).toBeInTheDocument();
    });
    
    it('should render tree of height 1', () => {
        const { getByTestId } = render(<TreeGenerator treeHeight={1}/>);

        const renderedTree = getByTestId("tree");

        expect(renderedTree).toBeInTheDocument();
        expect(renderedTree.innerHTML).toBe('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X<br>'+
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|')
    });
});