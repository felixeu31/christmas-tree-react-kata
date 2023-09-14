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
        expect(renderedTree.innerHTML).toBe('X<br>'+
        '|')
    });
    
    it('should render tree of height 2', () => {
      const { getByTestId } = render(<TreeGenerator treeHeight={2}/>);

      const renderedTree = getByTestId("tree");

      expect(renderedTree).toBeInTheDocument();
      expect(renderedTree.innerHTML).toBe('X<br>'+
      'XXX<br>'+
      '|')
    });      
    
    it('should render tree of height 3', () => {
      const { getByTestId } = render(<TreeGenerator treeHeight={3}/>);

      const renderedTree = getByTestId("tree");

      expect(renderedTree).toBeInTheDocument();
      expect(renderedTree.innerHTML).toBe('X<br>'+
      'XXX<br>'+
      'XXXXX<br>'+
      '|')
    });  
});